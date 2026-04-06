'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/lib/cart';

export function Header() {
  const items = useCart((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F5F2ED]/95 backdrop-blur-sm border-b border-[#E2DDD6]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="font-bold text-xl tracking-tight text-[#0D0D0D]">
          NORTH<span className="text-[#0D0D0D]">PRINT</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: '/', label: 'Catálogo' },
            { href: '/custom-design', label: 'Mi Diseño' },
            { href: '/policies', label: 'Info' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-[#8A8A8A] hover:text-[#0D0D0D] transition-colors font-medium"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 bg-[#0D0D0D] text-[#F5F2ED] text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#2D2D2D] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {itemCount > 0 ? `(${itemCount})` : 'Bolsa'}
          </Link>

          <button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className={`w-5 h-0.5 bg-[#0D0D0D] transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 bg-[#0D0D0D] transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-[#0D0D0D] transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#E2DDD6] bg-[#F5F2ED] px-6 py-4 flex flex-col gap-3">
          {[
            { href: '/', label: 'Catálogo' },
            { href: '/custom-design', label: 'Mi Diseño' },
            { href: '/policies', label: 'Info' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-[#0D0D0D] py-1"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
