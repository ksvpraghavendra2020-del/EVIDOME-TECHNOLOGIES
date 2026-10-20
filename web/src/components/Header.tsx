"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/content/site";
import { Logo } from "./Logo";

/** Sticky header: transparent over dark heroes, solid after scroll. Full-screen mobile menu. */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Lock body scroll and support Escape while the menu is open (links close it via onClick).
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", esc);
    };
  }, [open]);

  const solid = scrolled || open;
  const onDark = !scrolled || open; // every page opens with a dark hero
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-md bg-white px-4 py-2 font-semibold text-ink-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          open
            ? "bg-ink-950 py-2.5"
            : solid
              ? "border-b border-mist-200 bg-white/90 py-2.5 shadow-sm backdrop-blur-md"
              : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Logo light={onDark} />
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => {
              const active = pathname === n.href || pathname.startsWith(n.href + "/");
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    onDark ? "text-mist-100 hover:bg-white/10" : "text-ink-800 hover:bg-mist-100"
                  } ${active ? (onDark ? "text-teal-300" : "text-teal-700") : ""}`}
                >
                  {n.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-3 inline-flex min-h-10 items-center rounded-full bg-teal-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-ink-900"
            >
              Contact
            </Link>
          </nav>
          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${onDark ? "text-white" : "text-ink-950"}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-40 overflow-y-auto bg-ink-950 px-6 pb-10 pt-24 lg:hidden">
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {[...nav, { label: "Careers", href: "/careers" }, { label: "Contact", href: "/contact" }].map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 py-4 font-display text-3xl text-white hover:text-teal-300"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
