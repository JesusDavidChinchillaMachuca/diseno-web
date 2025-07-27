import React, { useState } from 'react';

const AdminEditPortfolioModal = ({ onClose, onUpdatePortfolio }) => {
  const initialProjects = [
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

  const [projects, setProjects] = useState(initialProjects);

  const handleProjectChange = (index, field, value) => {
    const newProjects = [...projects];
    newProjects[index][field] = value;
    setProjects(newProjects);
  };

  const handleAddProject = () => {
    setProjects([...projects, { title: '', description: '', image: '' }]);
  };

  const handleRemoveProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdatePortfolio(projects);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto py-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 w-full max-w-4xl border border-gray-200 relative my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Actualizar Portafolio
        </h3>
        <form onSubmit={handleSubmit}>
          {projects.map((project, index) => (
            <div key={index} className="mb-8 p-6 border border-gray-200 rounded-xl bg-gray-50">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Proyecto {index + 1}</h4>
              <div className="mb-4">
                <label htmlFor={`project-title-${index}`} className="block text-gray-700 text-lg font-semibold mb-2">
                  Título
                </label>
                <input
                  type="text"
                  id={`project-title-${index}`}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg"
                  value={project.title}
                  onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor={`project-description-${index}`} className="block text-gray-700 text-lg font-semibold mb-2">
                  Descripción
                </label>
                <textarea
                  id={`project-description-${index}`}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg resize-y"
                  rows="3"
                  value={project.description}
                  onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor={`project-image-${index}`} className="block text-gray-700 text-lg font-semibold mb-2">
                  URL de Imagen
                </label>
                <input
                  type="text"
                  id={`project-image-${index}`}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg"
                  value={project.image}
                  onChange={(e) => handleProjectChange(index, 'image', e.target.value)}
                  required
                />
                {project.image && <img src={project.image} alt="Preview" className="mt-4 w-32 h-auto rounded-lg shadow-md" />}
              </div>
              <button
                type="button"
                onClick={() => handleRemoveProject(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-md font-semibold"
              >
                Eliminar Proyecto
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddProject}
            className="w-full bg-[#FFBA00] text-gray-900 px-6 py-3 rounded-xl shadow-lg hover:bg-[#E0A000] transition-all duration-300 transform hover:scale-105 text-lg font-semibold mb-6"
          >
            Agregar Nuevo Proyecto
          </button>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-800 px-6 py-3 rounded-xl shadow-lg hover:bg-gray-400 transition-all duration-300 text-lg font-semibold"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-[#7800A3] text-white px-6 py-3 rounded-xl shadow-lg hover:bg-[#5A007A] transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminEditPortfolioModal;