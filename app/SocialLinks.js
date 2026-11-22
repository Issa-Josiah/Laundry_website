export default function SocialLinks({ contact }) {
  return (
    <div className="socials">
      <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="social wa" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff" aria-hidden="true">
          <path d="M12 2.5a9.4 9.4 0 0 0-8 14.3L2.700 21.500l4.800-1.300A9.400 9.400 0 1 0 12 2.500zm0 17.200a7.800 7.800 0 0 1-4-1.100l-.3-.2-2.800.8.8-2.700-.2-.3a7.800 7.800 0 1 1 6.500 3.500zm4.300-5.800c-.2-.1-1.400-.7-1.600-.8-.2-.1-.4-.1-.5.100l-.7.900c-.1.200-.3.200-.5.100a6.400 6.400 0 0 1-3.200-2.800c-.2-.4.200-.4.700-1.300.1-.2 0-.3 0-.4l-.7-1.600c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.100-.6.300-.2.300-.9.900-.9 2.100s.9 2.400 1 2.600c.1.200 1.800 2.800 4.400 3.900 1.600.7 2.200.7 3 .6.500-.1 1.400-.6 1.600-1.200.2-.6.2-1.100.1-1.200-.1-.1-.2-.2-.4-.3z" />
        </svg>
      </a>
      <a href={contact.facebook} target="_blank" rel="noreferrer" className="social fb" aria-label="Facebook">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff" aria-hidden="true">
          <path d="M13.500 21v-7.500H16l.4-3h-2.900V8.600c0-.9.300-1.500 1.500-1.500H16.500V4.400c-.3 0-1.200-.1-2.200-.1-2.200 0-3.700 1.300-3.700 3.800v2.400H8v3h2.600V21h2.900z" />
        </svg>
      </a>
      <a href={contact.tiktok} target="_blank" rel="noreferrer" className="social tt" aria-label="TikTok">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff" aria-hidden="true">
          <path d="M16.600 3c.3 2.300 1.600 3.700 3.900 3.900v3a7 7 0 0 1-3.900-1.200v6.100a5.600 5.600 0 1 1-5.600-5.600c.3 0 .6 0 .9.100v3.100a2.600 2.600 0 1 0 1.700 2.400V3h3z" />
        </svg>
      </a>
    </div>
  );
}