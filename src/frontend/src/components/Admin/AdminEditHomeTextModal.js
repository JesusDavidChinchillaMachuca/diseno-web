import React, { useState } from 'react';

const AdminEditHomeTextModal = ({ onClose, onUpdateHomeText }) => {
  const [mainText, setMainText] = useState("Publicidad/marketing ⚡️Manejo de redes sociales🤯✨");
  const [subText, setSubText] = useState("📸Producción de videos para redes sociales🎞️ 👨‍💻Diseño para piezas publicitarias 🖥️");

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateHomeText({ mainText, subText });
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 w-full max-w-lg border border-gray-200 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Editar Texto de Inicio
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="mainText" className="block text-gray-700 text-lg font-semibold mb-2">
              Texto Principal
            </label>
            <textarea
              id="mainText"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg resize-y"
              rows="3"
              value={mainText}
              onChange={(e) => setMainText(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-8">
            <label htmlFor="subText" className="block text-gray-700 text-lg font-semibold mb-2">
              Texto Secundario
            </label>
            <textarea
              id="subText"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg resize-y"
              rows="3"
              value={subText}
              onChange={(e) => setSubText(e.target.value)}
              required
            ></textarea>
          </div>
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

export default AdminEditHomeTextModal;