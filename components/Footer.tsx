import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-[#E2DDD6] bg-[#F5F2ED]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">

          {/* Brand */}
          <div>
            <p className="font-bold text-lg tracking-tight text-[#0D0D0D] mb-2">NORTHPRINT</p>
            <p className="text-[#8A8A8A] text-sm max-w-[220px] leading-relaxed">
              Estampado DTF sobre algodón premium. Tu diseño o el nuestro.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <p className="text-[10px] font-bold text-[#8A8A8A] uppercase tracking-widest mb-4">Tienda</p>
              <div className="flex flex-col gap-2.5">
                {[
                  { href: '/', label: 'Catálogo' },
                  { href: '/custom-design', label: 'Mi Diseño' },
                ].map(({ href, label }) => (
                  <Link key={href} href={href} className="text-sm text-[#0D0D0D] hover:text-[#8A8A8A] transition-colors font-medium">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#8A8A8A] uppercase tracking-widest mb-4">Legal</p>
              <div className="flex flex-col gap-2.5">
                {[
                  { href: '/policies#privacy', label: 'Privacidad' },
                  { href: '/policies#terms', label: 'Términos' },
                  { href: '/policies#shipping', label: 'Envíos' },
                  { href: '/policies#returns', label: 'Devoluciones' },
                ].map(({ href, label }) => (
                  <Link key={href} href={href} className="text-sm text-[#0D0D0D] hover:text-[#8A8A8A] transition-colors font-medium">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-12 pt-6 border-t border-[#E2DDD6]">
          <p className="text-[#8A8A8A] text-xs">© 2024 NorthPrint</p>
          <p className="text-[#8A8A8A] text-xs">info@northprint.com</p>
        </div>
      </div>
    </footer>
  );
}
