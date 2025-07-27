import React, { useState } from 'react';

const LayoutHeader = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSocialMenu = () => {
    setIsSocialMenuOpen(!isSocialMenuOpen);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    setIsSocialMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0QYza62ohQiykWjlXTqU1cwIADob6V2r5N0P3" alt="Gio_publicidad Logo" className="w-12 h-12 rounded-full mr-3" />
          <div className="text-2xl font-bold text-[#7800A3]">
            Gio_publicidad
          </div>
        </div>
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => handleNavigation('home')} className="text-gray-600 hover:text-[#7800A3] transition-colors text-lg">Inicio</button>
          <button onClick={() => handleNavigation('planes')} className="text-gray-600 hover:text-[#7800A3] transition-colors text-lg">Planes</button>
          <button onClick={() => handleNavigation('nosotros')} className="text-gray-600 hover:text-[#7800A3] transition-colors text-lg">Nosotros</button>
          <button onClick={() => handleNavigation('portafolio')} className="text-gray-600 hover:text-[#7800A3] transition-colors text-lg">Portafolio</button>
          <button onClick={() => handleNavigation('vision')} className="text-gray-600 hover:text-[#7800A3] transition-colors text-lg">Visión, Misión y Objetivos</button>
          <button onClick={() => handleNavigation('login')} className="text-gray-600 hover:text-[#7800A3] transition-colors text-lg">Inicio de Sesión</button>
        </nav>
        <div className="relative hidden md:block">
          <button onClick={toggleSocialMenu} className="text-gray-600 hover:text-[#7800A3] focus:outline-none ml-8">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </button>
          {isSocialMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
              <a href="https://www.instagram.com/gio_publicidad?utm_source=ig_web_button_share_sheet&igsh=b291a2czenRnbHRp" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-6 h-6 mr-2" />
                Instagram
              </a>
              <a href="https://www.facebook.com/GioZpublicidad?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-6 h-6 mr-2" />
                Facebook
              </a>
              <a href="https://api.whatsapp.com/send?phone=71" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6 mr-2" />
                WhatsApp
              </a>
            </div>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-[#7800A3] focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg pb-4">
          <nav className="flex flex-col items-center space-y-4">
            <button onClick={() => handleNavigation('home')} className="text-gray-600 hover:text-[#7800A3] transition-colors text-lg w-full py-2">Inicio</button>
            <button onClick={() => handleNavigation('planes')} className="text-gray-600 hover:text-[#7800A3] transition-colors text-lg w-full py-2">Planes</button>
            <button onClick={() => handleNavigation('nosotros')} className="text-gray-600 hover:text-[#7800A3] transition-colors text-lg w-full py-2">Nosotros</button>
            <button onClick={() => handleNavigation('portafolio')} className="text-gray-600 hover:text-[#7800A3] transition-colors text-lg w-full py-2">Portafolio</button>
            <button onClick={() => handleNavigation('vision')} className="text-gray-600 hover:text-[#7800A3] transition-colors text-lg w-full py-2">Visión, Misión y Objetivos</button>
            <button onClick={() => handleNavigation('login')} className="text-gray-600 hover:text-[#7800A3] transition-colors text-lg w-full py-2">Inicio de Sesión</button>
            <div className="w-full border-t border-gray-200 my-2"></div>
            <h4 className="text-gray-600 text-lg font-semibold">Redes Sociales</h4>
            <a href="https://www.instagram.com/gio_publicidad?utm_source=ig_web_button_share_sheet&igsh=b291a2czenRnbHRp" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-6 h-6 mr-2" />
              Instagram
            </a>
            <a href="https://www.facebook.com/GioZpublicidad?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-6 h-6 mr-2" />
              Facebook
            </a>
            <a href="https://api.whatsapp.com/send?phone=71" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full justify-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6 mr-2" />
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default LayoutHeader;