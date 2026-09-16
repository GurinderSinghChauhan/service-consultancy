type ContactPayload = {
  company?: unknown;
  email?: unknown;
  message?: unknown;
  name?: unknown;
  phone?: unknown;
  website?: unknown;
};

type RuntimeEnvironment = {
  BREVO_API_KEY?: string;
  CONTACT_FROM_EMAIL?: string;
  CONTACT_FROM_NAME?: string;
  CONTACT_TO_EMAIL?: string;
};

const json = (body: Record<string, string>, status: number) =>
  Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });

const clean = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);

export default {
  async fetch(request: Request) {
    if (request.method !== "POST") {
      return json({ error: "Method not allowed." }, 405);
    }

    const requestOrigin = new URL(request.url).origin;
    const origin = request.headers.get("origin");
    if (origin && origin !== requestOrigin) {
      return json({ error: "Invalid request origin." }, 403);
    }

    const contentLength = Number(request.headers.get("content-length") ?? 0);
    if (contentLength > 12_000) {
      return json({ error: "Request is too large." }, 413);
    }

    let payload: ContactPayload;
    try {
      payload = await request.json() as ContactPayload;
    } catch {
      return json({ error: "Invalid request." }, 400);
    }

    if (clean(payload.website, 200)) {
      return json({ message: "Message sent." }, 200);
    }

    const name = clean(payload.name, 100);
    const email = clean(payload.email, 254).toLowerCase();
    const company = clean(payload.company, 150);
    const phone = clean(payload.phone, 30);
    const message = clean(payload.message, 4_000);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneDigits = phone.replace(/\D/g, "");

    if (!name || !emailPattern.test(email) || !company || phoneDigits.length < 7 || phoneDigits.length > 15 || message.length < 20) {
      return json({ error: "Please provide valid contact details and a message." }, 400);
    }

    const environment = (globalThis as typeof globalThis & {
      process?: { env?: RuntimeEnvironment };
    }).process?.env;
    const apiKey = environment?.BREVO_API_KEY;
    const fromEmail = environment?.CONTACT_FROM_EMAIL;
    const fromName = environment?.CONTACT_FROM_NAME || "The Software Consulting";
    const to = environment?.CONTACT_TO_EMAIL;

    if (!apiKey || !fromEmail || !to) {
      return json({ error: "Email delivery is not configured." }, 503);
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeCompany = escapeHtml(company);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    try {
      const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "api-key": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: { email: fromEmail, name: fromName },
          to: [{ email: to }],
          replyTo: { email, name },
          subject: `Website inquiry from ${name}`,
          htmlContent: `<h2>New website inquiry</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Phone:</strong> ${safePhone}</p><p><strong>Company:</strong> ${safeCompany}</p><p><strong>Message:</strong><br />${safeMessage}</p>`,
          textContent: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\n\n${message}`,
          headers: { "Idempotency-Key": crypto.randomUUID() },
        }),
      });

      if (!brevoResponse.ok) {
        console.error("Brevo rejected contact email", brevoResponse.status);
        return json({ error: "We could not send your message. Please try again." }, 502);
      }

      return json({ message: "Message sent successfully." }, 200);
    } catch (error) {
      console.error("Contact email delivery failed", error instanceof Error ? error.message : "Unknown error");
      return json({ error: "We could not send your message. Please try again." }, 502);
    }
  },
};
