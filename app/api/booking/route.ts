import nodemailer from "nodemailer";
import { business } from "@/data/business";
import { buildBookingEmailHtml } from "@/lib/email-template";

export async function POST(request: Request) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    return Response.json(
      { ok: false, error: "email-not-configured" },
      { status: 503 },
    );
  }

  let body: { service?: string; dateLabel?: string; time?: string; name?: string; phone?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid-json" }, { status: 400 });
  }

  const { service, dateLabel, time, name, phone } = body;
  if (!service || !dateLabel || !time || !name || !phone) {
    return Response.json({ ok: false, error: "missing-fields" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailAppPassword },
    });

    await transporter.sendMail({
      from: `"Vlada Nails — Programări" <${gmailUser}>`,
      to: business.email,
      replyTo: gmailUser,
      subject: `Programare nouă — ${service}, ${dateLabel} ora ${time}`,
      html: buildBookingEmailHtml({ service, dateLabel, time, name, phone }),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Trimiterea emailului de programare a eșuat:", error);
    return Response.json({ ok: false, error: "send-failed" }, { status: 500 });
  }
}
