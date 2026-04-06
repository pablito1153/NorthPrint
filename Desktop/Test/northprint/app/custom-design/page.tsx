'use client';

import { useState, useRef } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function CustomDesignPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [prenda, setPrenda] = useState('Remera');
  const [posicion, setPosicion] = useState('pecho');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile && droppedFile.type.startsWith('image/')) {
      setFile(droppedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(droppedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert('Por favor sube una imagen');
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('prenda', prenda);
      formData.append('posicion', posicion);
      formData.append('description', description);

      // Simular envío
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert('¡Diseño cargado correctamente! Nos contactaremos pronto.');
      setFile(null);
      setPreview(null);
      setDescription('');
      setPrenda('Remera');
      setPosicion('pecho');
    } catch (error) {
      alert('Error al cargar el diseño');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Sube tu Diseño
            </h2>
            <p className="text-gray-600 text-lg">
              Personaliza tu prenda con tu propio diseño. Nos encargaremos de estamparlo.
            </p>
          </div>
        </section>

        {/* Form */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Image Upload */}
            <div>
              <label className="block text-lg font-semibold text-black mb-4">
                Sube tu Imagen
              </label>
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-gray-500 transition cursor-pointer"
              >
                {preview ? (
                  <div className="space-y-4">
                    <img
                      src={preview}
                      alt="Preview"
                      className="mx-auto max-h-64 rounded-lg"
                    />
                    <p className="text-gray-600 text-sm">{file?.name}</p>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-black font-semibold hover:underline"
                    >
                      Cambiar imagen
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="space-y-2"
                  >
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20a4 4 0 004 4h24a4 4 0 004-4V20"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 20l10-10 10 10M24 30V10"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-gray-600">
                      Arrastra tu imagen aquí o haz clic para seleccionar
                    </p>
                    <p className="text-gray-500 text-sm">
                      Soporta: PNG, JPG, GIF (máx 10MB)
                    </p>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>

            {/* Prenda */}
            <div>
              <label htmlFor="prenda" className="block text-sm font-medium text-gray-900 mb-2">
                Tipo de Prenda
              </label>
              <select
                id="prenda"
                value={prenda}
                onChange={(e) => setPrenda(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option>Remera</option>
                <option>Buzo</option>
                <option>Camiseta</option>
              </select>
            </div>

            {/* Posición */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                Posición del Estampado
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="posicion"
                    value="pecho"
                    checked={posicion === 'pecho'}
                    onChange={(e) => setPosicion(e.target.value)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <span className="ml-2 text-gray-700">Pecho</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="posicion"
                    value="espalda"
                    checked={posicion === 'espalda'}
                    onChange={(e) => setPosicion(e.target.value)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <span className="ml-2 text-gray-700">Espalda</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="posicion"
                    value="ambos"
                    checked={posicion === 'ambos'}
                    onChange={(e) => setPosicion(e.target.value)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <span className="ml-2 text-gray-700">Ambos lados</span>
                </label>
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-900 mb-2">
                Descripción (opcional)
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Cuéntanos sobre tu diseño..."
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!file || loading}
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Cargando...' : 'Enviar Diseño'}
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
