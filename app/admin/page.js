"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const PAGES = [
  { key: "home", label: "Home", href: "/admin/home" },
  { key: "services", label: "Services", href: "/admin/services" },
  { key: "gallery", label: "Gallery", href: "/admin/gallery" },
  { key: "about", label: "About", href: "/admin/about" },
  { key: "find-us", label: "Find Us", href: "/admin/find-us" },
  { key: "contact", label: "Contact", href: "/admin/contact" },
];
export default function AdminDashboard() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Probe the save endpoint — if it returns 401, not logged in
    fetch("/api/admin/save", { method: "POST", body: "{}" })
      .then((r) => {
        if (r.status === 401) router.replace("/admin/login");
        else setReady(true);
      })
      .catch(() => router.replace("/admin/login"));
  }, [router]);

  if (!ready) return null;

  return (
    <div className="admin-dashboard">
      <div className="container">
        <div className="admin-dash-header">
          <div>
            <p className="eyebrow">Content editor</p>
            <h1>Admin Dashboard</h1>
            <p className="lead">Pick a page to edit its content inline.</p>
          </div>
          <div className="admin-dash-actions">
            <Link href="/" className="btn btn-outline">← Back to site</Link>
            <button
              className="btn"
              onClick={async () => {
                await fetch("/api/admin/logout", { method: "POST" });
                router.replace("/admin/login");
              }}
            >
              Log out
            </button>
          </div>
        </div>

        <div className="admin-page-grid">
          {PAGES.map((p) => (
            <Link key={p.key} href={p.href} className="admin-page-card">
             <span className="admin-page-icon"></span>
              <h3>{p.label}</h3>
              <span className="admin-page-arrow">Edit</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
