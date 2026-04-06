'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cart';
import type { CartItem } from '@/lib/cart';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  colors: string[];
  inStock: boolean;
  category: string;
}

const COLOR_MAP: Record<string, string> = {
  Blanco: '#F5F5F5',
  Negro: '#1A1A1A',
  Gris: '#9CA3AF',
  Marino: '#1E3A5F',
};

export function ProductCard({ id, name, description, price, image, colors, inStock, category }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0] || 'Negro');
  const [added, setAdded] = useState(false);
  const addItem = useCart((state) => state.addItem);

  const handleAdd = () => {
    addItem({ productId: id, name, price, color: selectedColor, quantity: 1, image });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden flex flex-col" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)' }}>
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-[#F0EDE8]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-[#0D0D0D] text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
            {category}
          </span>
        </div>
        {!inStock && (
          <div className="absolute inset-0 bg-[#F5F2ED]/80 backdrop-blur-sm flex items-center justify-center">
            <span className="text-[#0D0D0D] font-semibold text-sm border border-[#0D0D0D] px-4 py-1.5 rounded-full">
              Sin stock
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-[#0D0D0D] text-sm leading-snug">{name}</h3>
          <span className="text-sm font-bold text-[#0D0D0D] whitespace-nowrap">
            ${(price / 1000).toFixed(0)}k
          </span>
        </div>
        <p className="text-[#8A8A8A] text-xs mb-4 leading-relaxed">{description}</p>

        {/* Colors */}
        <div className="flex items-center gap-1.5 mb-4">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              title={color}
              style={{ backgroundColor: COLOR_MAP[color] || '#ccc' }}
              className={`w-5 h-5 rounded-full border transition-all ${
                selectedColor === color
                  ? 'ring-2 ring-offset-1 ring-[#0D0D0D] scale-110'
                  : 'hover:scale-110 border-[#E2DDD6]'
              }`}
            />
          ))}
        </div>

        {/* Button */}
        <button
          onClick={handleAdd}
          disabled={!inStock}
          className={`mt-auto w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
            added
              ? 'bg-[#C8F135] text-[#0D0D0D]'
              : inStock
              ? 'bg-[#0D0D0D] text-[#F5F2ED] hover:bg-[#2D2D2D] active:scale-[0.98]'
              : 'bg-[#E2DDD6] text-[#8A8A8A] cursor-not-allowed'
          }`}
        >
          {added ? '✓ Listo!' : inStock ? 'Agregar' : 'Sin stock'}
        </button>
      </div>
    </div>
  );
}
