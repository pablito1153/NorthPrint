import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NorthPrint - Remeras Estampadas DTF',
  description: 'Compra remeras estampadas con DTF o sube tu propio diseño',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
