import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-black mb-4">NorthPrint</h3>
            <p className="text-gray-600 text-sm">
              Remeras estampadas con DTF de alta calidad.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-black text-sm transition">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/custom-design" className="text-gray-600 hover:text-black text-sm transition">
                  Cargar Diseño
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/policies#privacy"
                  className="text-gray-600 hover:text-black text-sm transition"
                >
                  Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/policies#terms"
                  className="text-gray-600 hover:text-black text-sm transition"
                >
                  Términos
                </Link>
              </li>
              <li>
                <Link
                  href="/policies#shipping"
                  className="text-gray-600 hover:text-black text-sm transition"
                >
                  Envíos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Contacto</h4>
            <p className="text-gray-600 text-sm">
              info@northprint.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; 2024 NorthPrint. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
