"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#131028] backdrop-blur-md shadow-[0_8px_24px_-18px_rgba(4,7,32,0.95)]">
        <nav className="mx-auto max-w-6xl px-4 md:px-8">
          <ul className="flex items-center justify-center gap-3 overflow-x-auto py-4 text-sm font-semibold md:gap-10 md:text-base">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-relief relative inline-flex px-2 pb-2 text-[0.98rem] tracking-[0.01em] md:text-base ${
                      isActive
                        ? "text-white after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-8 after:-translate-x-1/2 after:rounded-full after:bg-royal-blue"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
