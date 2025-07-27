import React, { useState } from 'react';

const AdminCreateUserModal = ({ onClose, onCreateUser }) => {
  const [companyName, setCompanyName] = useState('');
  const [username, setUsername] = useState(''); // Nuevo campo para el usuario
  const [contactEmail, setContactEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateUser({
      name: companyName,
      user: username, // Incluir el nuevo campo
      email: contactEmail,
      password: password,
    });
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
          Crear Nuevo Usuario
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="companyName" className="block text-gray-700 text-lg font-semibold mb-2">
              Nombre de la Empresa
            </label>
            <input
              type="text"
              id="companyName"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="username" className="block text-gray-700 text-lg font-semibold mb-2">
              Usuario (para login)
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="contactEmail" className="block text-gray-700 text-lg font-semibold mb-2">
              Email de Contacto
            </label>
            <input
              type="email"
              id="contactEmail"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="password" className="block text-gray-700 text-lg font-semibold mb-2">
              Contraseña Provisional
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              Crear Usuario
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminCreateUserModal;