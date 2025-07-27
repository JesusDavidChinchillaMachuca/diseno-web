import React, { useState } from 'react';

const HomeSection = ({ setCurrentPage }) => {
  const [bannerText, setBannerText] = useState("Convierte tu emprendimiento en una marca imparable. En Gio Publicidad te damos las herramientas para destacar, atraer y vender. Desde diseño hasta estrategia, lo hacemos posible contigo. No esperes más: vende ya, vende con Gio.");
  const [mainText, setMainText] = useState("Publicidad/marketing ⚡️Manejo de redes sociales🤯✨");
  const [subText, setSubText] = useState("📸Producción de videos para redes sociales🎞️ 👨‍💻Diseño para piezas publicitarias 🖥️");

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center pt-20 md:pt-0">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
          {mainText.split('⚡️').map((part, index) => (
            index === 0 ? part : <span key={index}><span className="text-[#FFBA00]">⚡️</span>{part}</span>
          ))}
          {mainText.includes('🤯✨') && (
            <>
              <span className="text-[#FFBA00]">🤯✨</span>
            </>
          )}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
          {subText}
        </p>
        <p className="text-lg md:text-xl text-gray-800 mb-10">
          👇Adquiérelo con nosotros 👇 <a href="https://linktr.ee/GioPublicidas" target="_blank" rel="noopener noreferrer" className="text-[#7800A3] hover:underline">linktr.ee/GioPublicidas</a>
        </p>
        
        {/* Banner Section */}
        <div className="relative bg-gradient-to-r from-[#7800A3] to-[#5A007A] text-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto mt-12 overflow-hidden transform transition-all duration-500 hover:scale-105">
          <div className="absolute inset-0 bg-black opacity-10 animate-pulse"></div>
          <p className="relative z-10 text-2xl md:text-3xl font-semibold leading-relaxed">
            {bannerText}
          </p>
        </div>

        <button
          onClick={() => setCurrentPage('planes')}
          className="bg-[#7800A3] text-white px-8 py-4 rounded-xl shadow-lg hover:bg-[#5A007A] transition-all duration-300 transform hover:scale-105 text-lg font-semibold mt-12"
        >
          Explora Nuestros Planes
        </button>
      </div>
    </section>
  );
};

export default HomeSection;