import React, { useState } from 'react';

const AdminEditNosotrosModal = ({ onClose, onUpdateNosotros }) => {
  const [mainText, setMainText] = useState("En Gio_publicidad, somos un equipo apasionado por el diseño gráfico y la comunicación visual. Creemos que cada marca tiene una historia única que contar, y nuestro propósito es ayudar a nuestros clientes a narrarla de la manera más impactante y efectiva posible. Combinamos creatividad, estrategia y tecnología para ofrecer soluciones de diseño que no solo se ven bien, sino que también generan resultados tangibles. Desde la creación de identidades de marca memorables hasta el desarrollo de experiencias digitales inmersivas, nuestro enfoque se centra en entender a fondo las necesidades de cada cliente para superar sus expectativas. Nos enorgullece construir relaciones duraderas basadas en la confianza, la transparencia y la excelencia.");
  const [phone, setPhone] = useState("+52 55 1234 5678");
  const [email, setEmail] = useState("info@giopublicidad.com");

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateNosotros({ mainText, phone, email });
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto py-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 w-full max-w-lg border border-gray-200 relative my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Editar Sección Nosotros
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="mainText" className="block text-gray-700 text-lg font-semibold mb-2">
              Texto Principal
            </label>
            <textarea
              id="mainText"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg resize-y"
              rows="6"
              value={mainText}
              onChange={(e) => setMainText(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-5">
            <label htmlFor="phone" className="block text-gray-700 text-lg font-semibold mb-2">
              Teléfono
            </label>
            <input
              type="text"
              id="phone"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="email" className="block text-gray-700 text-lg font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
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

export default AdminEditNosotrosModal;