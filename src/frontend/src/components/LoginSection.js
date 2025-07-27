import React, { useState } from 'react';

const LoginSection = ({ setCurrentPage }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); // Limpiar errores previos

    if (username === 'admin' && password === '1234') {
      setCurrentPage('adminDashboard');
    } else {
      // Simulación de login de cliente
      // En un caso real, buscarías el usuario en una base de datos
      const clients = [
        { user: 'innovatech', password: 'password1' },
        { user: 'elgrano', password: 'password2' },
        { user: 'urbanthreads', password: 'password3' },
        { user: 'naturaleza', password: 'password4' },
        { user: 'ecosoluciones', password: 'password5' },
      ];
      const foundClient = clients.find(client => client.user === username && client.password === password);

      if (foundClient) {
        setCurrentPage('clientDashboard'); // Redirigir al dashboard del cliente
      } else {
        setError('Usuario o contraseña incorrectos. Intenta con "admin" y "1234" o un usuario de cliente.');
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-16">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 w-full max-w-md border border-gray-200">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Inicio de Sesión
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-gray-700 text-lg font-semibold mb-2">
              Usuario
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
          <div className="mb-8">
            <label htmlFor="password" className="block text-gray-700 text-lg font-semibold mb-2">
              Contraseña
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
          {error && (
            <p className="text-red-500 text-center mb-4">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-[#7800A3] text-white px-6 py-3 rounded-xl shadow-lg hover:bg-[#5A007A] transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginSection;