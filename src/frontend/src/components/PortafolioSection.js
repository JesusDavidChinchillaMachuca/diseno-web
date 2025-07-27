import React from 'react';

const PortafolioSection = () => {
  const projects = [
    {
      title: "Identidad Visual para Cafetería 'El Grano'",
      description: "Creación de logo, paleta de colores, tipografía y aplicaciones en empaques y señalética.",
      image: "https://via.placeholder.com/400x300/FFBA00/000000?text=Cafetería+El+Grano"
    },
    {
      title: "Diseño Web para Startup Tecnológica 'Innovatech'",
      description: "Desarrollo de interfaz de usuario (UI/UX) y diseño de landing page responsiva.",
      image: "https://via.placeholder.com/400x300/7800A3/FFFFFF?text=Innovatech+Web"
    },
    {
      title: "Campaña Publicitaria para Marca de Ropa 'Urban Threads'",
      description: "Diseño de gráficos para redes sociales, banners digitales y material impreso.",
      image: "https://via.placeholder.com/400x300/FFBA00/000000?text=Urban+Threads"
    },
    {
      title: "Ilustración Editorial para Revista 'Naturaleza Viva'",
      description: "Creación de ilustraciones personalizadas para artículos y portada de revista.",
      image: "https://via.placeholder.com/400x300/7800A3/FFFFFF?text=Naturaleza+Viva"
    },
    {
      title: "Animación 2D para Video Explicativo 'EcoSoluciones'",
      description: "Diseño de personajes, escenarios y animación para video corporativo.",
      image: "https://via.placeholder.com/400x300/FFBA00/000000?text=EcoSoluciones+Animación"
    },
    {
      title: "Rediseño de Empaque para Productos Orgánicos 'BioVida'",
      description: "Desarrollo de concepto de empaque, diseño gráfico y mockups 3D.",
      image: "https://via.placeholder.com/400x300/7800A3/FFFFFF?text=BioVida+Empaque"
    }
  ];

  return (
    <section className="py-16 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Nuestro Portafolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 transform hover:scale-105 transition-transform duration-300">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-lg">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortafolioSection;