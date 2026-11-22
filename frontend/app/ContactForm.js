"use client";
import { useState } from "react";

// Builds a WhatsApp message from the form and opens WhatsApp with it.
export default function ContactForm({ services, softeners, whatsapp, business, initialService }) {
  const [service, setService] = useState(services.includes(initialService) ? initialService : "");
  const [softener, setSoftener] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!service) return setError("Please choose a service.");
    if (phone.replace(/\D/g, "").length < 9) return setError("Please enter a valid phone number.");
    setError("");

    const lines = [`Hello ${business}, I would like to inquire about: ${service}.`];
    if (softener) lines.push(`Preferred fabric softener: ${softener}`);
    lines.push(`My phone number: ${phone.trim()}`);
    if (message.trim()) lines.push("", message.trim());

    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="form-card">
      <h3>Send us an inquiry</h3>
      <p className="hint">Choose your service, add your number and we will continue on WhatsApp.</p>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="service">Service</label>
          <select id="service" value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
            <option value="Other / General inquiry">Other / General inquiry</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="softener">Fabric softener <span>(optional)</span></label>
          <select id="softener" value={softener} onChange={(e) => setSoftener(e.target.value)}>
            <option value="">No preference</option>
            {softeners.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="phone">Phone number</label>
          <input id="phone" type="tel" placeholder="e.g. 0700 000 000" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>

        <div className="field">
          <label htmlFor="message">Message <span>(optional)</span></label>
          <textarea
            id="message"
            placeholder="Hello, my name is Kai. I was inquiring about cleaning, do you clean umbrellas?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {error && <p className="form-error">{error}</p>}
        <button type="submit" className="btn">Send to WhatsApp</button>
      </form>
    </div>
  );
}