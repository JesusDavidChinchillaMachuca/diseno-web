import React, { useState } from 'react';

const ImageCarousel = () => {
  const images = [
    'https://via.placeholder.com/800x600/FFBA00/000000?text=Diseño+Web',
    'https://via.placeholder.com/800x600/7800A3/FFFFFF?text=Branding',
    'https://via.placeholder.com/800x600/FFBA00/000000?text=Ilustración',
    'https://via.placeholder.com/800x600/7800A3/FFFFFF?text=Marketing+Digital',
    'https://via.placeholder.com/800x600/FFBA00/000000?text=UX/UI',
    'https://via.placeholder.com/800x600/7800A3/FFFFFF?text=Animación',
    'https://via.placeholder.com/800x600/FFBA00/000000?text=Fotografía',
    'https://via.placeholder.com/800x600/7800A3/FFFFFF?text=Editorial',
    'https://via.placeholder.com/800x600/FFBA00/000000?text=Diseño+Gráfico'
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Conócenos
          </h2>
          <p className="text-lg text-gray-700">
            Explora algunos de nuestros trabajos y descubre cómo podemos transformar tu visión en realidad.
            Cada proyecto es una oportunidad para innovar y crear algo único.
          </p>
        </div>
        <div className="lg:w-2/3 relative w-full max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-white rounded-2xl shadow-xl border border-gray-200">
            {images.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg group">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center text-sm font-semibold">Proyecto {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;