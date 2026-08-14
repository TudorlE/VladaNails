import { siteMeta } from "@/data/about";
import { bookingPolicy } from "@/data/booking-policy";

export interface BookingEmailData {
  service: string;
  dateLabel: string;
  time: string;
  name: string;
  phone: string;
}

/**
 * Table-based HTML email — kept deliberately simple (no CSS backgrounds,
 * no flex/grid) since most inboxes (Gmail included) strip or mis-render
 * modern CSS. The leopard photo ships as a plain <img> banner, which every
 * client renders reliably, followed by a solid brand-color title bar.
 */
export function buildBookingEmailHtml(data: BookingEmailData): string {
  const bannerUrl = `${siteMeta.url}/jaguar/blana-jaguar.jpg`;
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #ece2d3;font:13px/1.4 Georgia,serif;color:#7d7368;text-transform:uppercase;letter-spacing:.08em;width:130px;">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #ece2d3;font:16px/1.4 Georgia,serif;color:#1c1712;">${value}</td>
    </tr>`;

  return `<!doctype html>
<html lang="ro">
  <body style="margin:0;padding:0;background:#f8f4ee;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8f4ee;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:#fffdfa;border-radius:20px;overflow:hidden;border:1px solid #ece2d3;">
            <tr>
              <td>
                <img src="${bannerUrl}" width="600" height="180" alt="Vlada Nails" style="display:block;width:100%;height:180px;object-fit:cover;" />
              </td>
            </tr>
            <tr>
              <td style="background:#1c1712;padding:20px 32px;">
                <span style="font:24px/1 Georgia,serif;color:#f9f6f1;">Vlada <span style="color:#b8894a;">Nails</span></span>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 4px;font:12px/1 Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#b8894a;">Cerere nouă</p>
                <h1 style="margin:0 0 24px;font:28px/1.2 Georgia,serif;color:#1c1712;">O clientă vrea o programare</h1>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${row("Serviciu", data.service)}
                  ${row("Data", data.dateLabel)}
                  ${row("Ora", data.time)}
                  ${row("Nume", data.name)}
                  ${row("Telefon", `<a href="tel:${data.phone}" style="color:#1c1712;text-decoration:none;">${data.phone}</a>`)}
                </table>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                  <tr>
                    <td width="50%" style="padding:14px 16px;background:#f4e9d8;border-radius:12px 0 0 12px;">
                      <span style="display:block;font:14px/1 Georgia,serif;color:#b8894a;">Reprogramare gratuită</span>
                      <span style="display:block;font:12px/1.4 Arial,sans-serif;color:#7d7368;margin-top:4px;">cu peste ${bookingPolicy.freeThresholdDays} zile înainte</span>
                    </td>
                    <td width="50%" style="padding:14px 16px;background:#f1e3e3;border-radius:0 12px 12px 0;">
                      <span style="display:block;font:14px/1 Georgia,serif;color:#7c3048;">Taxă ${bookingPolicy.lateFee} lei</span>
                      <span style="display:block;font:12px/1.4 Arial,sans-serif;color:#7d7368;margin-top:4px;">sub ${bookingPolicy.lateThresholdHours}h înainte</span>
                    </td>
                  </tr>
                </table>

                <a href="tel:${data.phone}" style="display:inline-block;margin-top:28px;padding:14px 28px;background:#1c1712;color:#f9f6f1;font:14px/1 Arial,sans-serif;text-decoration:none;border-radius:999px;">
                  Sună clienta
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background:#f4efe6;">
                <p style="margin:0;font:12px/1.6 Arial,sans-serif;color:#7d7368;">
                  Vlada Nails · Chișinău, Republica Moldova · trimis automat de pe ${siteMeta.url.replace("https://", "")}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
