'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function PoliciesPage() {
  const [openSections, setOpenSections] = useState<string[]>(['privacy']);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  const sections = [
    {
      id: 'privacy',
      title: 'Política de Privacidad',
      content: `
        <h4 class="font-semibold text-black mb-3">Recopilación de Información</h4>
        <p class="text-gray-700 mb-4">
          En NorthPrint recopilamos información personal que nos proporcionas de manera voluntaria
          cuando realizas una compra o cargas un diseño. Esta información incluye tu nombre,
          dirección de correo electrónico, dirección postal y datos de pago.
        </p>

        <h4 class="font-semibold text-black mb-3 mt-4">Uso de la Información</h4>
        <p class="text-gray-700 mb-4">
          Utilizamos tu información personal para:
        </p>
        <ul class="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Procesar tus pedidos</li>
          <li>Comunicarnos contigo sobre tu compra</li>
          <li>Enviar actualizaciones sobre tus diseños</li>
          <li>Mejorar nuestros servicios</li>
        </ul>

        <h4 class="font-semibold text-black mb-3 mt-4">Protección de Datos</h4>
        <p class="text-gray-700 mb-4">
          Nos comprometemos a proteger tu información personal. Implementamos medidas de seguridad
          estándar de la industria para salvaguardar tus datos contra acceso no autorizado.
        </p>
      `,
    },
    {
      id: 'terms',
      title: 'Términos de Uso',
      content: `
        <h4 class="font-semibold text-black mb-3">Aceptación de Términos</h4>
        <p class="text-gray-700 mb-4">
          Al utilizar este sitio web, aceptas estos términos y condiciones en su totalidad.
          Si no estás de acuerdo con alguno de estos términos, por favor no utilices este sitio.
        </p>

        <h4 class="font-semibold text-black mb-3 mt-4">Derechos de Propiedad Intelectual</h4>
        <p class="text-gray-700 mb-4">
          El contenido de este sitio, incluyendo diseños, texto e imágenes, es propiedad de NorthPrint
          o sus proveedores de contenido y está protegido por leyes internacionales de derechos de autor.
        </p>

        <h4 class="font-semibold text-black mb-3 mt-4">Responsabilidad del Usuario</h4>
        <p class="text-gray-700 mb-4">
          Eres responsable de que el contenido que cargues (incluyendo diseños) sea de tu propiedad
          o cuentes con los derechos necesarios para utilizarlo. NorthPrint no se responsabiliza
          por infracciones de derechos de autor.
        </p>
      `,
    },
    {
      id: 'shipping',
      title: 'Envíos y Entregas',
      content: `
        <h4 class="font-semibold text-black mb-3">Tiempos de Envío</h4>
        <p class="text-gray-700 mb-4">
          Los tiempos de entrega estimados son:
        </p>
        <ul class="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li><strong>Diseños del Catálogo:</strong> 5-7 días hábiles</li>
          <li><strong>Diseños Personalizados:</strong> 7-10 días hábiles</li>
          <li><strong>Buzos:</strong> 7-10 días hábiles</li>
        </ul>

        <h4 class="font-semibold text-black mb-3 mt-4">Costo de Envío</h4>
        <p class="text-gray-700 mb-4">
          El costo de envío varía según tu ubicación geográfica. Te mostraremos el costo exacto
          antes de confirmar tu pedido.
        </p>

        <h4 class="font-semibold text-black mb-3 mt-4">Entregas Internacionales</h4>
        <p class="text-gray-700 mb-4">
          Realizamos entregas internacionales. Los tiempos de entrega pueden variar según el país
          de destino (usualmente 15-30 días hábiles).
        </p>
      `,
    },
    {
      id: 'returns',
      title: 'Cambios y Devoluciones',
      content: `
        <h4 class="font-semibold text-black mb-3">Política de Devoluciones</h4>
        <p class="text-gray-700 mb-4">
          Aceptamos devoluciones dentro de 14 días desde la recepción del producto, siempre que:
        </p>
        <ul class="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>El artículo no haya sido usado</li>
          <li>La prenda esté en condiciones originales</li>
          <li>Incluya la etiqueta original</li>
        </ul>

        <h4 class="font-semibold text-black mb-3 mt-4">Proceso de Devolución</h4>
        <p class="text-gray-700 mb-4">
          Para iniciar una devolución, contacta a nuestro equipo de atención al cliente.
          Te proporcionaremos una etiqueta de envío y instrucciones detalladas.
        </p>

        <h4 class="font-semibold text-black mb-3 mt-4">Reembolsos</h4>
        <p class="text-gray-700 mb-4">
          Los reembolsos se procesarán dentro de 7-10 días hábiles desde que recibimos tu devolución.
          El costo de envío no es reembolsable.
        </p>
      `,
    },
    {
      id: 'faq',
      title: 'Preguntas Frecuentes',
      content: `
        <h4 class="font-semibold text-black mb-3">¿Cuál es la calidad del estampado DTF?</h4>
        <p class="text-gray-700 mb-4">
          Nuestro proceso DTF garantiza una calidad excepcional. Los diseños son duraderos,
          resistentes al lavado y mantienen sus colores vibrantes después de múltiples lavadas.
        </p>

        <h4 class="font-semibold text-black mb-3 mt-4">¿Puedo modificar mi pedido después de realizarlo?</h4>
        <p class="text-gray-700 mb-4">
          Si el pedido aún no ha sido procesado, podemos modificarlo. Contacta rápidamente a nuestro equipo.
        </p>

        <h4 class="font-semibold text-black mb-3 mt-4">¿Cómo cuido mi prenda estampada?</h4>
        <p class="text-gray-700 mb-4">
          Recomendamos: Lavar con agua fría, usar jabón suave, no usar blanqueador y secar al aire.
          Evita el contacto directo con planchas calientes sobre el estampado.
        </p>

        <h4 class="font-semibold text-black mb-3 mt-4">¿Aceptan pagos internacionales?</h4>
        <p class="text-gray-700 mb-4">
          Sí, aceptamos tarjetas de crédito internacionales y otros métodos de pago según tu país.
        </p>
      `,
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Información y Políticas
            </h2>
            <p className="text-gray-600 text-lg">
              Encuentra respuestas a tus preguntas sobre nuestros productos y servicios.
            </p>
          </div>
        </section>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-black">{section.title}</h3>
                  <svg
                    className={`w-5 h-5 text-gray-700 transition transform ${
                      openSections.includes(section.id) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
                {openSections.includes(section.id) && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <div
                      dangerouslySetInnerHTML={{ __html: section.content }}
                      className="prose prose-sm max-w-none"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-black mb-2">¿Tienes más preguntas?</h3>
            <p className="text-gray-600 mb-4">
              Contáctanos en info@northprint.com o llámanos
            </p>
            <a
              href="mailto:info@northprint.com"
              className="inline-block bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Enviar Email
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
