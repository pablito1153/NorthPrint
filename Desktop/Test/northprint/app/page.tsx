'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  colors: string[];
  images: string[];
  inStock: boolean;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Minimal Type',
    description: 'Tipografía limpia sobre algodón premium',
    price: 25990,
    category: 'Minimalista',
    colors: ['Blanco', 'Negro', 'Gris'],
    images: ['https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop'],
    inStock: true,
  },
  {
    id: '2',
    name: 'Street Icon',
    description: 'Diseño urbano para los que se animan',
    price: 29990,
    category: 'Urbano',
    colors: ['Negro', 'Blanco'],
    images: ['https://images.unsplash.com/photo-1503341733017-1901578f9f1e?w=600&h=600&fit=crop'],
    inStock: true,
  },
  {
    id: '3',
    name: 'Clásica',
    description: 'Un estampado atemporal que nunca falla',
    price: 22990,
    category: 'Clásico',
    colors: ['Blanco', 'Negro', 'Gris', 'Marino'],
    images: ['https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=600&fit=crop'],
    inStock: false,
  },
  {
    id: '4',
    name: 'Geometric',
    description: 'Formas precisas con mucha personalidad',
    price: 26990,
    category: 'Moderno',
    colors: ['Negro', 'Gris'],
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop'],
    inStock: true,
  },
  {
    id: '5',
    name: 'Bold Letter',
    description: 'Letras que hablan por sí solas',
    price: 24990,
    category: 'Minimalista',
    colors: ['Blanco', 'Negro'],
    images: ['https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=600&fit=crop'],
    inStock: true,
  },
  {
    id: '6',
    name: 'Abstract',
    description: 'Arte contemporáneo en tu remera',
    price: 27990,
    category: 'Moderno',
    colors: ['Negro', 'Blanco', 'Gris'],
    images: ['https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&h=600&fit=crop'],
    inStock: true,
  },
];

const CATEGORIES = Array.from(new Set(mockProducts.map((p) => p.category)));
const COLORS = Array.from(new Set(mockProducts.flatMap((p) => p.colors)));

export default function Home() {
  const [filtered, setFiltered] = useState(mockProducts);
  const [cat, setCat] = useState('');
  const [col, setCol] = useState('');

  useEffect(() => {
    let f = mockProducts;
    if (cat) f = f.filter((p) => p.category === cat);
    if (col) f = f.filter((p) => p.colors.includes(col));
    setFiltered(f);
  }, [cat, col]);

  const clear = () => { setCat(''); setCol(''); };

  return (
    <>
      <Header />
      <main>

        {/* ── HERO ── */}
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-20">
          <div className="flex flex-col gap-6">

            {/* Tag */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8F135]" />
              <span className="text-xs font-semibold text-[#8A8A8A] uppercase tracking-widest">
                Estampado DTF · Hecho a pedido
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.92] tracking-tight text-[#0D0D0D]">
              Tu estilo,<br />
              <span className="italic font-light">a tu manera.</span>
            </h1>

            {/* Sub + CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-2">
              <p className="text-[#8A8A8A] text-base max-w-sm leading-relaxed">
                Remeras y buzos de algodón con estampado DTF premium. Elegí del catálogo o subí tu propio diseño.
              </p>
              <div className="flex gap-3 flex-shrink-0">
                <a
                  href="#catalogo"
                  className="bg-[#0D0D0D] text-[#F5F2ED] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#2D2D2D] transition-colors"
                >
                  Ver catálogo
                </a>
                <a
                  href="/custom-design"
                  className="bg-transparent text-[#0D0D0D] text-sm font-semibold px-5 py-2.5 rounded-full border border-[#C8C5BF] hover:border-[#0D0D0D] transition-colors"
                >
                  Mi diseño →
                </a>
              </div>
            </div>

            {/* Stats strip */}
            <div className="flex items-center gap-8 pt-4 border-t border-[#E2DDD6] mt-2">
              {[
                { n: '100%', label: 'Algodón' },
                { n: 'DTF', label: 'Tecnología' },
                { n: '5–7d', label: 'Entrega' },
                { n: '∞', label: 'Colores' },
              ].map(({ n, label }) => (
                <div key={label}>
                  <p className="text-lg font-bold text-[#0D0D0D]">{n}</p>
                  <p className="text-xs text-[#8A8A8A] font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CATALOG ── */}
        <section id="catalogo" className="max-w-6xl mx-auto px-6 pb-24">

          {/* Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-xl font-bold text-[#0D0D0D]">
              Colección
              <span className="text-[#8A8A8A] font-normal text-base ml-2">({filtered.length})</span>
            </h2>

            <div className="flex items-center flex-wrap gap-2">
              <button
                onClick={clear}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all ${
                  !cat && !col
                    ? 'bg-[#0D0D0D] text-[#F5F2ED] border-[#0D0D0D]'
                    : 'bg-transparent text-[#8A8A8A] border-[#E2DDD6] hover:border-[#8A8A8A]'
                }`}
              >
                Todo
              </button>
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(cat === c ? '' : c)}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all ${
                    cat === c
                      ? 'bg-[#0D0D0D] text-[#F5F2ED] border-[#0D0D0D]'
                      : 'bg-transparent text-[#8A8A8A] border-[#E2DDD6] hover:border-[#8A8A8A]'
                  }`}
                >
                  {c}
                </button>
              ))}
              <div className="w-px h-4 bg-[#E2DDD6]" />
              {COLORS.map((c) => (
                <button
                  key={c}
                  onClick={() => setCol(col === c ? '' : c)}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all ${
                    col === c
                      ? 'bg-[#C8F135] text-[#0D0D0D] border-[#C8F135]'
                      : 'bg-transparent text-[#8A8A8A] border-[#E2DDD6] hover:border-[#8A8A8A]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filtered.map((p) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  description={p.description}
                  price={p.price}
                  image={p.images[0]}
                  colors={p.colors}
                  inStock={p.inStock}
                  category={p.category}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-[#8A8A8A] mb-3">Nada con esos filtros.</p>
              <button onClick={clear} className="text-sm font-semibold underline underline-offset-2 hover:text-[#8A8A8A] transition-colors">
                Limpiar
              </button>
            </div>
          )}
        </section>

        {/* ── CTA BANNER ── */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="bg-[#0D0D0D] rounded-3xl px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#C8F135] text-xs font-semibold uppercase tracking-widest mb-3">
                Diseño personalizado
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                ¿Tenés tu propio<br />diseño?
              </h3>
              <p className="text-[#8A8A8A] mt-3 max-w-xs text-sm leading-relaxed">
                Subí tu arte y lo estampamos en pecho, espalda o los dos. Resultado profesional garantizado.
              </p>
            </div>
            <a
              href="/custom-design"
              className="flex-shrink-0 bg-[#C8F135] text-[#0D0D0D] font-bold text-sm px-8 py-4 rounded-full hover:bg-[#D4F84A] transition-colors whitespace-nowrap"
            >
              Cargar mi diseño →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
