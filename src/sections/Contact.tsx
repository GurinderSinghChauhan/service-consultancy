import { useState, type FormEvent } from "react";

type SubmissionState = "idle" | "sending" | "sent" | "error";

const countryCodes = [
  { country: "United States", code: "+1", short: "US" },
  { country: "Canada", code: "+1", short: "CA" },
  { country: "India", code: "+91", short: "IN" },
  { country: "United Kingdom", code: "+44", short: "GB" },
  { country: "Australia", code: "+61", short: "AU" },
  { country: "Germany", code: "+49", short: "DE" },
  { country: "France", code: "+33", short: "FR" },
  { country: "Ireland", code: "+353", short: "IE" },
  { country: "Italy", code: "+39", short: "IT" },
  { country: "Netherlands", code: "+31", short: "NL" },
  { country: "New Zealand", code: "+64", short: "NZ" },
  { country: "Singapore", code: "+65", short: "SG" },
  { country: "United Arab Emirates", code: "+971", short: "AE" },
];

const Contact = () => {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const countryCode = String(formData.get("countryCode") || "+1");
    const localPhone = String(formData.get("phone") || "").trim();
    const payload = Object.fromEntries(formData.entries());
    payload.phone = `${countryCode} ${localPhone}`;
    delete payload.countryCode;

    setSubmissionState("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json() as { error?: string };

      if (!response.ok) throw new Error(result.error || "Unable to send your message.");

      form.reset();
      setSubmissionState("sent");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to send your message.");
      setSubmissionState("error");
    }
  };

  return (
      <section className="section container contact-grid contact-page">
        <div className="contact-intro">
          <span className="eyebrow">Contact us</span>
          <h1>Tell us what you’re working on.</h1>
          <p>Replies within 1–2 business days.</p>
        </div>
        <div className="contact-details">
          <div className="contact-detail"><span>Email</span><a href="mailto:info@thesoftwareconsulting.com">info@thesoftwareconsulting.com</a></div>
          <div className="contact-detail"><span>Phone</span><a href="tel:+13102591394">+1 310 259 1394</a></div>
          <div className="contact-detail"><span>Best for</span><strong>New products, modernization, AI, and technical strategy</strong></div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field contact-honeypot" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="form-row">
            <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" maxLength={100} required /></div>
            <div className="field"><label htmlFor="email">Work email</label><input id="email" name="email" type="email" autoComplete="email" inputMode="email" maxLength={254} required /></div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <div className="phone-field">
                <select name="countryCode" aria-label="Country calling code" defaultValue="+1">
                  {countryCodes.map(({ country, code, short }) => (
                    <option key={`${short}-${code}`} value={code} title={country}>{short} {code}</option>
                  ))}
                </select>
                <input id="phone" name="phone" type="tel" autoComplete="tel-national" inputMode="tel" minLength={7} maxLength={24} placeholder="Phone number" aria-label="Phone number" required />
              </div>
            </div>
            <div className="field"><label htmlFor="company">Company name</label><input id="company" name="company" autoComplete="organization" maxLength={150} required /></div>
          </div>
          <div className="field"><label htmlFor="message">Message</label><textarea id="message" name="message" minLength={20} maxLength={4000} required /></div>
          <button className="button button-primary" type="submit" disabled={submissionState === "sending"}>
            {submissionState === "sending" ? "Sending…" : "Send message"} <span aria-hidden="true">↗</span>
          </button>
          <p className={`form-note ${submissionState}`} role="status" aria-live="polite">
            {submissionState === "sent" && "Thanks — your message has been sent."}
            {submissionState === "error" && errorMessage}
            {(submissionState === "idle" || submissionState === "sending") && "Your message will be emailed directly to our team."}
          </p>
        </form>
      </section>
  );
};

export default Contact;
