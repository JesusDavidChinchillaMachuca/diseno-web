import React from 'react';

const VisionSection = () => {
  return (
    <section className="py-16 bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Visión, Misión y Objetivos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center border border-gray-200">
            <h3 className="text-3xl font-bold text-[#7800A3] mb-4">Visión</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ser el estudio de diseño gráfico líder en Latinoamérica, reconocido por nuestra innovación,
              creatividad y el impacto positivo que generamos en las marcas de nuestros clientes.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center border border-gray-200">
            <h3 className="text-3xl font-bold text-[#7800A3] mb-4">Misión</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Transformar ideas en soluciones visuales excepcionales,
              ayudando a nuestros clientes a comunicar su esencia y alcanzar sus metas de negocio
              a través de un diseño estratégico y de alta calidad.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center border border-gray-200">
            <h3 className="text-3xl font-bold text-[#7800A3] mb-4">Objetivos</h3>
            <ul className="text-lg text-gray-700 leading-relaxed list-disc list-inside text-left">
              <li className="mb-2">Superar las expectativas de nuestros clientes en cada proyecto.</li>
              <li className="mb-2">Fomentar un ambiente de creatividad y aprendizaje continuo.</li>
              <li className="mb-2">Expandir nuestra presencia en nuevos mercados.</li>
              <li className="mb-2">Mantenernos a la vanguardia de las tendencias de diseño y tecnología.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;