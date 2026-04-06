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
}

export function ProductCard({
  id,
  name,
  description,
  price,
  image,
  colors,
  inStock,
}: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0] || 'Negro');
  const [quantity, setQuantity] = useState(1);
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      productId: id,
      name,
      price,
      color: selectedColor,
      quantity,
      image,
    };
    addItem(cartItem);
    alert(`${name} agregado al carrito`);
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition">
      {/* Image */}
      <div className="relative w-full h-64 bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold">Sin Stock</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-black mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Colors */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Color
          </label>
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-3 py-1 text-xs font-medium rounded border transition ${
                  selectedColor === color
                    ? 'bg-black text-white border-black'
                    : 'bg-gray-100 text-gray-700 border-gray-300 hover:border-gray-500'
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cantidad
          </label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
          >
            {[1, 2, 3, 4, 5, 10].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div className="text-2xl font-bold text-black mb-4">
          ${(price * quantity).toFixed(2)}
        </div>

        {/* Button */}
        <button
          onClick={handleAddToCart}
          disabled={!inStock}
          className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {inStock ? 'Agregar al Carrito' : 'Sin Stock'}
        </button>
      </div>
    </div>
  );
}
