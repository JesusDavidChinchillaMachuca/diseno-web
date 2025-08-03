import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HomeSection from './components/HomeSection';
import FaqSection from './components/FaqSection';
import ImageCarousel from './components/ImageCarousel';
import PlanesSection from './components/PlanesSection';
import NosotrosSection from './components/NosotrosSection';
import PortafolioSection from './components/PortafolioSection';
import VisionSection from './components/VisionSection';
import LoginSection from './components/LoginSection';
import AdminDashboard from './components/Admin/AdminDashboard';
import ClientDashboard from './components/Admin/ClientDashboard';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HomeSection setCurrentPage={setCurrentPage} />
            <FaqSection />
            <ImageCarousel />
          </>
        );
      case 'planes':
        return <PlanesSection />;
      case 'nosotros':
        return <NosotrosSection />;
      case 'portafolio':
        return <PortafolioSection />;
      case 'vision':
        return <VisionSection />;
      case 'login':
        return <LoginSection setCurrentPage={setCurrentPage} />;
      case 'adminDashboard':
        return <AdminDashboard setCurrentPage={setCurrentPage} />;
      case 'clientDashboard':
        return <ClientDashboard setCurrentPage={setCurrentPage} />;
      default:
        return (
          <>
            <HomeSection setCurrentPage={setCurrentPage} />
            <FaqSection />
            <ImageCarousel />
          </>
        );
    }
  };

  return (
    <div className="font-sans antialiased text-gray-900">
      <LayoutHeader setCurrentPage={setCurrentPage} />
      <main className="pt-20"> {/* Ajuste para el header fijo */}
        {renderPage()}
      </main>
    </div>
  );
};

export default App;


// DONE