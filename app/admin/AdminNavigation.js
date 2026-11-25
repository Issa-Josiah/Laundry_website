"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const adminLinks = [
  { label: "Home", href: "/admin/home" },
  { label: "About", href: "/admin/about" },
  { label: "Services", href: "/admin/services" },
  { label: "Gallery", href: "/admin/gallery" },
  { label: "Find Us", href: "/admin/find-us" },
  { label: "Contact", href: "/admin/contact" },
  

];

export default function AdminNavigation() {
  const pathname = usePathname();

  // Do not show admin navigation on the login page
  if (pathname === "/admin/login") return null;

  return (
    <nav className="admin-navigation">
      <div className="admin-navigation-inner">
        <Link href="/admin" className="admin-nav-brand">
          Admin Dashboard
        </Link>

        <div className="admin-nav-links">
          {adminLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? "admin-nav-link active"
                  : "admin-nav-link"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}