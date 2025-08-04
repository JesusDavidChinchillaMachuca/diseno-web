import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

const HomePage = () => (
  <>
    <HomeSection />
    <FaqSection />
    <ImageCarousel />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900">
        <LayoutHeader />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/planes" element={<PlanesSection />} />
            <Route path="/nosotros" element={<NosotrosSection />} />
            <Route path="/portafolio" element={<PortafolioSection />} />
            <Route path="/vision" element={<VisionSection />} />
            <Route path="/login" element={<LoginSection />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/client" element={<ClientDashboard />} />
            {/* Si la ruta no existe, redirige a inicio */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;