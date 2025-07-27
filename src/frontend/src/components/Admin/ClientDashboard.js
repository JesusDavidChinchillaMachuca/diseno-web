import React from 'react';

const ClientDashboard = ({ setCurrentPage }) => {
  const clientProjects = [
    { id: 1, name: 'Campaña de Verano 2024', status: 'En Progreso', lastUpdate: '2024-07-20' },
    { id: 2, name: 'Rediseño de Logo', status: 'Completado', lastUpdate: '2024-06-15' },
    { id: 3, name: 'Materiales para Redes Sociales', status: 'Pendiente de Revisión', lastUpdate: '2024-07-25' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Panel de Cliente
        </h2>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Mis Proyectos
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Nombre del Proyecto</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Última Actualización</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {clientProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{project.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{project.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Completado' ? 'bg-green-100 text-green-800' :
                        project.status === 'En Progreso' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{project.lastUpdate}</td>
                  </tr>
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
    </section>
  );
};

export default ClientDashboard;