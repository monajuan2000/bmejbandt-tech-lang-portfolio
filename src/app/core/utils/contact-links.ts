// Builders for external contact deep links. Pure functions: no Angular, no state.

/** Opens a new Gmail web draft addressed to `email`. */
export function buildGmailComposeUrl(email: string, subject?: string): string {
  const params = new URLSearchParams({ view: 'cm', fs: '1', to: email });
  if (subject) {
    params.set('su', subject);
  }
  return `https://mail.google.com/mail/?${params.toString()}`;
}

/** Opens a WhatsApp chat with `phoneNumber` (any format, e.g. "+57 324 576 9762"), optionally pre-filled. */
export function buildWhatsAppUrl(phoneNumber: string, message?: string): string {
  const digits = phoneNumber.replace(/\D/g, '');
  const query = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${digits}${query}`;
}
