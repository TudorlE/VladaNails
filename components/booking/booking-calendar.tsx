"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { bookingPolicy } from "@/data/booking-policy";

const DAY_NAMES = ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"];
const WEEKDAY_LABELS = ["L", "Ma", "Mi", "J", "V", "S", "D"];
const MONTH_LABELS = [
  "Ianuarie",
  "Februarie",
  "Martie",
  "Aprilie",
  "Mai",
  "Iunie",
  "Iulie",
  "August",
  "Septembrie",
  "Octombrie",
  "Noiembrie",
  "Decembrie",
];

function startOfDay(date: Date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function getMonthGrid(monthDate: Date) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7; // 0 = Monday
  const cells: (Date | null)[] = Array(firstWeekday).fill(null);
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(new Date(year, month, day));
  }
  return cells;
}

function getHoursForDate(date: Date) {
  const dayName = DAY_NAMES[date.getDay()];
  return business.hours.find((entry) => entry.day === dayName);
}

function getTimeSlots(hours: string) {
  if (hours === "Închis") return [];
  const [startStr, endStr] = hours.split(" – ");
  const toMinutes = (value: string) => {
    const [h, m] = value.split(":").map(Number);
    return h * 60 + m;
  };
  const start = toMinutes(startStr);
  const end = toMinutes(endStr) - 60; // ultima programare, minim o oră înainte de închidere
  const slots: string[] = [];
  for (let t = start; t <= end; t += 30) {
    const h = Math.floor(t / 60);
    const m = t % 60;
    slots.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
  }
  return slots;
}

export function BookingCalendar() {
  const today = startOfDay(new Date());
  const [visibleMonth, setVisibleMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [serviceId, setServiceId] = useState(services[0]?.id ?? "");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const maxMonth = new Date(today.getFullYear(), today.getMonth() + 2, 1);
  const canGoPrev = visibleMonth.getFullYear() > today.getFullYear() || visibleMonth.getMonth() > today.getMonth();
  const canGoNext = visibleMonth < maxMonth;

  const cells = useMemo(() => getMonthGrid(visibleMonth), [visibleMonth]);
  const timeSlots = useMemo(
    () => (selectedDate ? getTimeSlots(getHoursForDate(selectedDate)?.hours ?? "Închis") : []),
    [selectedDate],
  );

  const selectedService = services.find((s) => s.id === serviceId);
  const isFormComplete = Boolean(selectedDate && selectedTime && name.trim() && phone.trim());

  const handleSubmit = async () => {
    if (!isFormComplete || !selectedDate || !selectedTime) return;
    setSending(true);

    const dateLabel = selectedDate.toLocaleDateString("ro-RO", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });

    try {
      await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: selectedService?.title ?? "",
          dateLabel,
          time: selectedTime,
          name,
          phone,
        }),
      });
    } catch {
      // Emailul e un canal suplimentar — WhatsApp rămâne metoda de rezervă.
    }

    const message = `Bună! Aș vrea să fac o programare la ${business.name}.\n\nServiciu: ${selectedService?.title ?? ""}\nData: ${dateLabel}\nOra: ${selectedTime}\nNume: ${name}\nTelefon: ${phone}`;
    const waNumber = business.phone.replace(/\D/g, "");
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;

    window.open(waLink, "_blank", "noopener,noreferrer");
    setSending(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-[2rem] border border-border-subtle bg-surface p-10 text-center shadow-luxury sm:p-14">
        <div className="flex size-14 items-center justify-center rounded-full bg-gold/15 text-gold">
          <Check className="size-6" />
        </div>
        <h3 className="font-display text-2xl text-foreground">Cererea a fost trimisă</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Am deschis WhatsApp cu detaliile completate și am trimis un email către studio. Vlada îți
          va confirma programarea cât mai curând — locul e rezervat definitiv doar după confirmare.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setSelectedDate(null);
            setSelectedTime(null);
            setName("");
            setPhone("");
          }}
          className="mt-2 text-sm font-medium text-gold underline underline-offset-4 hover:text-gold-dark"
        >
          Fă o altă cerere
        </button>
      </div>
    );
  }

  return (
    <div className="grid w-full gap-0 overflow-hidden rounded-[2rem] border border-border-subtle bg-surface shadow-luxury lg:grid-cols-[1.1fr_1fr]">
      {/* Calendar */}
      <div className="flex flex-col gap-5 border-b border-border-subtle p-7 sm:p-9 lg:border-b-0 lg:border-r">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <CalendarDays className="size-4 text-gold" />
            {MONTH_LABELS[visibleMonth.getMonth()]} {visibleMonth.getFullYear()}
          </div>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              disabled={!canGoPrev}
              onClick={() => setVisibleMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1))}
              aria-label="Luna anterioară"
              className="flex size-8 items-center justify-center rounded-full border border-border-subtle text-foreground transition-colors hover:border-gold hover:text-gold disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              disabled={!canGoNext}
              onClick={() => setVisibleMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1))}
              aria-label="Luna următoare"
              className="flex size-8 items-center justify-center rounded-full border border-border-subtle text-foreground transition-colors hover:border-gold hover:text-gold disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1.5 text-center text-[11px] font-medium uppercase tracking-wide text-muted">
          {WEEKDAY_LABELS.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1.5">
          {cells.map((date, index) => {
            if (!date) return <span key={`empty-${index}`} />;
            const isPast = date < today;
            const isClosed = getHoursForDate(date)?.hours === "Închis";
            const disabled = isPast || isClosed;
            const isSelected = selectedDate && isSameDay(date, selectedDate);
            const isToday = isSameDay(date, today);

            return (
              <button
                key={date.toISOString()}
                type="button"
                disabled={disabled}
                onClick={() => {
                  setSelectedDate(date);
                  setSelectedTime(null);
                }}
                className={cn(
                  "flex aspect-square items-center justify-center rounded-xl text-sm transition-colors duration-200",
                  disabled && "text-muted/40 line-through",
                  !disabled && !isSelected && "text-foreground hover:bg-gold/12",
                  isSelected && "bg-gold font-medium text-ink shadow-gold-glow",
                  !isSelected && isToday && !disabled && "border border-gold/50",
                )}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {selectedDate ? (
            <motion.div
              key={selectedDate.toISOString()}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-2.5 border-t border-border-subtle pt-5"
            >
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted">
                <Clock className="size-3.5" />
                Ore disponibile
              </p>
              {timeSlots.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={cn(
                        "rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-200",
                        selectedTime === slot
                          ? "border-gold bg-gold text-ink"
                          : "border-border-subtle text-foreground hover:border-gold/60 hover:text-gold",
                      )}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted">Studioul e închis în ziua selectată.</p>
              )}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {/* Form + policy */}
      <div className="flex flex-col gap-5 p-7 sm:p-9">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium uppercase tracking-wide text-muted">Serviciu</label>
          <div className="flex flex-wrap gap-2">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setServiceId(service.id)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors duration-200",
                  serviceId === service.id
                    ? "border-gold bg-gold text-ink"
                    : "border-border-subtle text-foreground hover:border-gold/60 hover:text-gold",
                )}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="booking-name" className="text-xs font-medium uppercase tracking-wide text-muted">
              Nume
            </label>
            <input
              id="booking-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Numele tău"
              className="h-11 rounded-xl border border-border-subtle bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-gold"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="booking-phone" className="text-xs font-medium uppercase tracking-wide text-muted">
              Telefon
            </label>
            <input
              id="booking-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+373 6XX XXX XX"
              className="h-11 rounded-xl border border-border-subtle bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-gold"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 rounded-2xl border border-border-subtle bg-surface-muted/40 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            Politică de reprogramare
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            <div className="flex flex-col gap-1 rounded-xl bg-gold/10 p-3">
              <span className="text-sm font-medium text-gold">Gratis</span>
              <span className="text-xs text-muted">
                cu peste {bookingPolicy.freeThresholdDays} zile înainte
              </span>
            </div>
            <div className="flex flex-col gap-1 rounded-xl bg-wine/10 p-3">
              <span className="text-sm font-medium text-wine">{bookingPolicy.lateFee} lei</span>
              <span className="text-xs text-muted">
                cu mai puțin de {bookingPolicy.lateThresholdHours}h înainte
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          disabled={!isFormComplete || sending}
          onClick={handleSubmit}
          className="group relative isolate mt-auto flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-ink text-sm font-medium text-ivory shadow-luxury transition-all duration-500 hover:bg-gold hover:text-ink disabled:pointer-events-none disabled:opacity-40 dark:bg-gold dark:text-ink"
        >
          <MessageCircle className="size-4" />
          {sending ? "Se trimite…" : "Trimite cererea de programare"}
        </button>
        <p className="text-center text-[11px] leading-relaxed text-muted">
          Cererea ajunge pe email și WhatsApp — programarea e confirmată manual de studio.
        </p>
      </div>
    </div>
  );
}
