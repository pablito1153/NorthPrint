import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NorthPrint — Remeras DTF',
  description: 'Remeras estampadas con DTF de alta calidad. Tu diseño o el nuestro.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={spaceGrotesk.variable}>
      <body className="bg-[#F5F2ED] text-[#0D0D0D] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
