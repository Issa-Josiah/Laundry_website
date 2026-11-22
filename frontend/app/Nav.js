"use client";
import { useState } from "react";

// Desktop: links in a row. Phone: a menu button that opens a dropdown.
export default function Nav({ items }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="menu-btn"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`nav${open ? " open" : ""}`}>
        {items.map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
            {n.label}
          </a>
        ))}
      </nav>
    </>
  );
}