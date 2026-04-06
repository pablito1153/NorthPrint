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

// Mock products - en producción vendrían de la API
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Remera Minimalista Blanca',
    description: 'Diseño limpio y moderno',
    price: 25.99,
    category: 'Minimalista',
    colors: ['Blanco', 'Negro', 'Gris'],
    images: ['https://via.placeholder.com/400x400?text=Diseño+1'],
    inStock: true,
  },
  {
    id: '2',
    name: 'Remera Urbana Negra',
    description: 'Estilo streetwear urbano',
    price: 29.99,
    category: 'Urbano',
    colors: ['Negro', 'Blanco'],
    images: ['https://via.placeholder.com/400x400?text=Diseño+2'],
    inStock: true,
  },
  {
    id: '3',
    name: 'Remera Clásica',
    description: 'Diseño atemporal',
    price: 22.99,
    category: 'Clasico',
    colors: ['Blanco', 'Negro', 'Gris', 'Marino'],
    images: ['https://via.placeholder.com/400x400?text=Diseño+3'],
    inStock: false,
  },
  {
    id: '4',
    name: 'Remera Geométrica',
    description: 'Formas y líneas precisas',
    price: 26.99,
    category: 'Moderno',
    colors: ['Negro', 'Gris'],
    images: ['https://via.placeholder.com/400x400?text=Diseño+4'],
    inStock: true,
  },
  {
    id: '5',
    name: 'Remera Tipografía',
    description: 'Letras y texto artístico',
    price: 24.99,
    category: 'Minimalista',
    colors: ['Blanco', 'Negro'],
    images: ['https://via.placeholder.com/400x400?text=Diseño+5'],
    inStock: true,
  },
  {
    id: '6',
    name: 'Remera Abstracta',
    description: 'Diseño abstracto contemporáneo',
    price: 27.99,
    category: 'Moderno',
    colors: ['Negro', 'Blanco', 'Gris'],
    images: ['https://via.placeholder.com/400x400?text=Diseño+6'],
    inStock: true,
  },
];

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

  useEffect(() => {
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedColor) {
      filtered = filtered.filter((p) => p.colors.includes(selectedColor));
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedColor, products]);

  const categories = Array.from(new Set(products.map((p) => p.category)));
  const colors = Array.from(new Set(products.flatMap((p) => p.colors)));

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Nuestros Diseños
            </h2>
            <p className="text-gray-600 text-lg">
              Elige entre nuestros exclusivos diseños estampados con DTF de alta calidad.
            </p>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-4">Filtros</h3>
                </div>

                {/* Category Filter */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Categoría
                  </h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory('')}
                      className={`block text-sm ${
                        selectedCategory === ''
                          ? 'text-black font-semibold'
                          : 'text-gray-600 hover:text-black'
                      } transition`}
                    >
                      Todos
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`block text-sm ${
                          selectedCategory === cat
                            ? 'text-black font-semibold'
                            : 'text-gray-600 hover:text-black'
                        } transition`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Filter */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Color
                  </h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedColor('')}
                      className={`block text-sm ${
                        selectedColor === ''
                          ? 'text-black font-semibold'
                          : 'text-gray-600 hover:text-black'
                      } transition`}
                    >
                      Todos
                    </button>
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`block text-sm ${
                          selectedColor === color
                            ? 'text-black font-semibold'
                            : 'text-gray-600 hover:text-black'
                        } transition`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      description={product.description}
                      price={product.price}
                      image={product.images[0]}
                      colors={product.colors}
                      inStock={product.inStock}
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-600 text-lg">
                      No hay productos que coincidan con los filtros.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
