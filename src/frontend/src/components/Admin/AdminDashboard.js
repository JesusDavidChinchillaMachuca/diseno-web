import React, { useState } from 'react';
import AdminCreateUserModal from './AdminCreateUserModal';
import AdminEditFaqModal from './AdminEditFaqModal';
import AdminEditPortfolioModal from './AdminEditPortfolioModal';
import AdminEditPlansModal from './AdminEditPlansModal';
import AdminEditBannerModal from './AdminEditBannerModal';
import AdminEditHomeTextModal from './AdminEditHomeTextModal';
import AdminEditTeamModal from './AdminEditTeamModal';
import AdminEditNosotrosModal from './AdminEditNosotrosModal';
import AdminEditImageCarouselModal from './AdminEditImageCarouselModal'; // Nuevo modal para el carrusel de imágenes

const AdminDashboard = ({ setCurrentPage }) => {
  const [clients, setClients] = useState([
    { id: 1, name: 'Innovatech Solutions', user: 'innovatech', email: 'contacto@innovatech.com', status: 'Activo', password: 'password1' },
    { id: 2, name: 'Cafetería El Grano', user: 'elgrano', email: 'elgrano@cafe.com', status: 'Activo', password: 'password2' },
    { id: 3, name: 'Urban Threads Co.', user: 'urbanthreads', email: 'info@urbanthreads.com', status: 'Pendiente', password: 'password3' },
    { id: 4, name: 'Revista Naturaleza Viva', user: 'naturaleza', email: 'editor@naturalezaviva.com', status: 'Activo', password: 'password4' },
    { id: 5, name: 'EcoSoluciones MX', user: 'ecosoluciones', email: 'ventas@ecosoluciones.com', status: 'Inactivo', password: 'password5' },
  ]);

  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);
  const [isEditFaqModalOpen, setIsEditFaqModalOpen] = useState(false);
  const [isEditPortfolioModalOpen, setIsEditPortfolioModalOpen] = useState(false);
  const [isEditPlansModalOpen, setIsEditPlansModalOpen] = useState(false);
  const [isEditBannerModalOpen, setIsEditBannerModalOpen] = useState(false);
  const [isEditHomeTextModalOpen, setIsEditHomeTextModalOpen] = useState(false);
  const [isEditTeamModalOpen, setIsEditTeamModalOpen] = useState(false);
  const [isEditNosotrosModalOpen, setIsEditNosotrosModalOpen] = useState(false);
  const [isEditImageCarouselModalOpen, setIsEditImageCarouselModalOpen] = useState(false); // Estado para el modal del carrusel

  const handleCreateUser = (newUser) => {
    setClients([...clients, { id: clients.length + 1, ...newUser, status: 'Activo' }]);
    setIsCreateUserModalOpen(false);
  };

  const handleDeleteUser = (id) => {
    setClients(clients.filter(client => client.id !== id));
  };

  const handleChangePassword = (id, newPassword) => {
    setClients(clients.map(client =>
      client.id === id ? { ...client, password: newPassword } : client
    ));
    alert(`Contraseña de ${clients.find(c => c.id === id).name} cambiada a: ${newPassword}`);
  };

  const handleUpdateFaq = (updatedFaqs) => {
    console.log("FAQs actualizadas:", updatedFaqs);
    setIsEditFaqModalOpen(false);
  };

  const handleUpdatePortfolio = (updatedPortfolio) => {
    console.log("Portafolio actualizado:", updatedPortfolio);
    setIsEditPortfolioModalOpen(false);
  };

  const handleUpdatePlans = (updatedPlans) => {
    console.log("Planes actualizados:", updatedPlans);
    setIsEditPlansModalOpen(false);
  };

  const handleUpdateBanner = (newBannerText) => {
    console.log("Banner actualizado:", newBannerText);
    setIsEditBannerModalOpen(false);
  };

  const handleUpdateHomeText = (newText) => {
    console.log("Texto de inicio actualizado:", newText);
    setIsEditHomeTextModalOpen(false);
  };

  const handleUpdateTeam = (updatedTeam) => {
    console.log("Equipo actualizado:", updatedTeam);
    setIsEditTeamModalOpen(false);
  };

  const handleUpdateNosotros = (updatedNosotros) => {
    console.log("Nosotros actualizado:", updatedNosotros);
    setIsEditNosotrosModalOpen(false);
  };

  const handleUpdateImageCarousel = (updatedImages) => {
    console.log("Imágenes del carrusel actualizadas:", updatedImages);
    setIsEditImageCarouselModalOpen(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Panel de Administración
        </h2>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setIsCreateUserModalOpen(true)}
              className="bg-[#7800A3] text-white px-6 py-3 rounded-xl shadow-lg hover:bg-[#5A007A] transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
            >
              Crear Nuevo Usuario
            </button>
            <button
              onClick={() => setIsEditFaqModalOpen(true)}
              className="bg-[#FFBA00] text-gray-900 px-6 py-3 rounded-xl shadow-lg hover:bg-[#E0A000] transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
            >
              Modificar Preguntas Frecuentes
            </button>
            <button
              onClick={() => setIsEditPortfolioModalOpen(true)}
              className="bg-[#7800A3] text-white px-6 py-3 rounded-xl shadow-lg hover:bg-[#5A007A] transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
            >
              Actualizar Portafolio
            </button>
            <button
              onClick={() => setIsEditPlansModalOpen(true)}
              className="bg-[#FFBA00] text-gray-900 px-6 py-3 rounded-xl shadow-lg hover:bg-[#E0A000] transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
            >
              Modificar Planes
            </button>
            <button
              onClick={() => setIsEditBannerModalOpen(true)}
              className="bg-[#7800A3] text-white px-6 py-3 rounded-xl shadow-lg hover:bg-[#5A007A] transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
            >
              Editar Banner
            </button>
            <button
              onClick={() => setIsEditHomeTextModalOpen(true)}
              className="bg-[#FFBA00] text-gray-900 px-6 py-3 rounded-xl shadow-lg hover:bg-[#E0A000] transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
            >
              Editar Texto de Inicio
            </button>
            <button
              onClick={() => setIsEditTeamModalOpen(true)}
              className="bg-[#7800A3] text-white px-6 py-3 rounded-xl shadow-lg hover:bg-[#5A007A] transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
            >
              Editar Equipo
            </button>
            <button
              onClick={() => setIsEditNosotrosModalOpen(true)}
              className="bg-[#FFBA00] text-gray-900 px-6 py-3 rounded-xl shadow-lg hover:bg-[#E0A000] transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
            >
              Editar Sección Nosotros
            </button>
            <button
              onClick={() => setIsEditImageCarouselModalOpen(true)}
              className="bg-[#7800A3] text-white px-6 py-3 rounded-xl shadow-lg hover:bg-[#5A007A] transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
            >
              Editar Imágenes del Collage
            </button>
          </div>

          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Clientes Registrados
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Nombre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Usuario</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Contraseña</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {clients.map((client) => (
                  <ClientRow
                    key={client.id}
                    client={client}
                    onDelete={handleDeleteUser}
                    onChangePassword={handleChangePassword}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={() => setCurrentPage('home')}
              className="bg-[#7800A3] text-white px-6 py-3 rounded-xl shadow-lg hover:bg-[#5A007A] transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      </div>

      {isCreateUserModalOpen && (
        <AdminCreateUserModal
          onClose={() => setIsCreateUserModalOpen(false)}
          onCreateUser={handleCreateUser}
        />
      )}
      {isEditFaqModalOpen && (
        <AdminEditFaqModal
          onClose={() => setIsEditFaqModalOpen(false)}
          onUpdateFaq={handleUpdateFaq}
        />
      )}
      {isEditPortfolioModalOpen && (
        <AdminEditPortfolioModal
          onClose={() => setIsEditPortfolioModalOpen(false)}
          onUpdatePortfolio={handleUpdatePortfolio}
        />
      )}
      {isEditPlansModalOpen && (
        <AdminEditPlansModal
          onClose={() => setIsEditPlansModalOpen(false)}
          onUpdatePlans={handleUpdatePlans}
        />
      )}
      {isEditBannerModalOpen && (
        <AdminEditBannerModal
          onClose={() => setIsEditBannerModalOpen(false)}
          onUpdateBanner={handleUpdateBanner}
        />
      )}
      {isEditHomeTextModalOpen && (
        <AdminEditHomeTextModal
          onClose={() => setIsEditHomeTextModalOpen(false)}
          onUpdateHomeText={handleUpdateHomeText}
        />
      )}
      {isEditTeamModalOpen && (
        <AdminEditTeamModal
          onClose={() => setIsEditTeamModalOpen(false)}
          onUpdateTeam={handleUpdateTeam}
        />
      )}
      {isEditNosotrosModalOpen && (
        <AdminEditNosotrosModal
          onClose={() => setIsEditNosotrosModalOpen(false)}
          onUpdateNosotros={handleUpdateNosotros}
        />
      )}
      {isEditImageCarouselModalOpen && (
        <AdminEditImageCarouselModal
          onClose={() => setIsEditImageCarouselModalOpen(false)}
          onUpdateImages={handleUpdateImageCarousel}
        />
      )}
    </section>
  );
};

const ClientRow = ({ client, onDelete, onChangePassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{client.id}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{client.name}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{client.user}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{client.email}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 flex items-center">
        {showPassword ? client.password : ''}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="ml-2 text-gray-500 hover:text-gray-800"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {showPassword ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
            ) : (
              <>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </>
            )}
          </svg>
        </button>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          client.status === 'Activo' ? 'bg-green-100 text-green-800' :
          client.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {client.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button
          onClick={() => onChangePassword(client.id, prompt('Nueva contraseña:'))}
          className="text-[#7800A3] hover:text-[#5A007A] mr-4"
        >
          Cambiar Contraseña
        </button>
        <button
          onClick={() => onDelete(client.id)}
          className="text-red-600 hover:text-red-800"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default AdminDashboard;