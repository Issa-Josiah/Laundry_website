export default function SocialLinks({ contact }) {
  return (
    <div className="socials">
      <a
        href={`https://wa.me/${contact.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="social wa"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff" aria-hidden="true">
          <path d="M12 2.5a9.4 9.4 0 0 0-8 14.3L2.7 21.5l4.8-1.3A9.4 9.4 0 1 0 12 2.5zm0 17.2a7.8 7.8 0 0 1-4-1.1l-.3-.2-2.8.8.8-2.7-.2-.3a7.8 7.8 0 1 1 6.5 3.5zm4.3-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.4 6.4 0 0 1-3.2-2.8c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.2.7 3 .6.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3z" />
        </svg>
      </a>

      <a
        href={contact.facebook}
        target="_blank"
        rel="noreferrer"
        className="social fb"
        aria-label="Facebook"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff" aria-hidden="true">
          <path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9z" />
        </svg>
      </a>

      <a
        href={contact.tiktok}
        target="_blank"
        rel="noreferrer"
        className="social tt"
        aria-label="TikTok"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff" aria-hidden="true">
          <path d="M16.6 3c.3 2.3 1.6 3.7 3.9 3.9v3a7 7 0 0 1-3.9-1.2v6.1a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v3.1a2.6 2.6 0 1 0 1.7 2.4V3h3z" />
        </svg>
      </a>

      <a
        href="/admin/login"
        className="admin-logo-link"
        aria-label="Admin Login"
        title="Admin Login"
      >
        <img src="/images/logo.png" alt="Admin Login" />
      </a>
    </div>
  );
}
