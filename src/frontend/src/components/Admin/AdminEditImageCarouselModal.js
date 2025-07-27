import React, { useState } from 'react';

const AdminEditImageCarouselModal = ({ onClose, onUpdateImages }) => {
  const initialImages = [
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

  const [images, setImages] = useState(initialImages);

  const handleImageChange = (index, value) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  const handleAddImage = () => {
    setImages([...images, '']);
  };

  const handleRemoveImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateImages(images);
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
          Editar Imágenes del Collage
        </h3>
        <form onSubmit={handleSubmit}>
          {images.map((image, index) => (
            <div key={index} className="mb-8 p-6 border border-gray-200 rounded-xl bg-gray-50">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Imagen {index + 1}</h4>
              <div className="mb-4">
                <label htmlFor={`image-url-${index}`} className="block text-gray-700 text-lg font-semibold mb-2">
                  URL de la Imagen
                </label>
                <input
                  type="text"
                  id={`image-url-${index}`}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg"
                  value={image}
                  onChange={(e) => handleImageChange(index, e.target.value)}
                  required
                />
                {image && <img src={image} alt="Preview" className="mt-4 w-32 h-auto rounded-lg shadow-md" />}
              </div>
              <button
                type="button"
                onClick={() => handleRemoveImage(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-md font-semibold"
              >
                Eliminar Imagen
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddImage}
            className="w-full bg-[#FFBA00] text-gray-900 px-6 py-3 rounded-xl shadow-lg hover:bg-[#E0A000] transition-all duration-300 transform hover:scale-105 text-lg font-semibold mb-6"
          >
            Agregar Nueva Imagen
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

export default AdminEditImageCarouselModal;