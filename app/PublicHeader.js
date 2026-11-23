"use client";

import { usePathname } from "next/navigation";
import Nav from "./Nav";

export default function PublicHeader({ data }) {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return null;

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="logo">
          {data.header.logo.show && (
            <img
              className="logo-img"
              src={data.header.logo.src}
              alt={data.header.logo.alt}
              style={{
                width: data.header.logo.width,
                height: data.header.logo.height,
              }}
            />
          )}

          <span className="logo-text">
            <strong>{data.header.brandName}</strong>
            <small>{data.header.tagline}</small>
          </span>
        </a>

        <Nav
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Gallery", href: "/gallery" },
            { label: "Find Us", href: "/find-us" },
            { label: "Contact", href: "/contact" },
          ]}
        />
      </div>
    </header>
  );
}
