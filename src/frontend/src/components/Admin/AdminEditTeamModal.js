import React, { useState } from 'react';

const AdminEditTeamModal = ({ onClose, onUpdateTeam }) => {
  const initialTeam = [
    {
      name: "Juan Pérez",
      role: "Jefe de Publicidad",
      age: 35,
      motto: "La creatividad es la inteligencia divirtiéndose.",
      image: "https://via.placeholder.com/150/7800A3/FFFFFF?text=JP"
    },
    {
      name: "María García",
      role: "Community Manager",
      age: 28,
      motto: "Conectando marcas con corazones, un post a la vez.",
      image: "https://via.placeholder.com/150/FFBA00/000000?text=MG"
    }
  ];

  const [team, setTeam] = useState(initialTeam);

  const handleMemberChange = (index, field, value) => {
    const newTeam = [...team];
    newTeam[index][field] = value;
    setTeam(newTeam);
  };

  const handleAddMember = () => {
    setTeam([...team, { name: '', role: '', age: '', motto: '', image: '' }]);
  };

  const handleRemoveMember = (index) => {
    const newTeam = team.filter((_, i) => i !== index);
    setTeam(newTeam);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateTeam(team);
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
          Editar Equipo
        </h3>
        <form onSubmit={handleSubmit}>
          {team.map((member, index) => (
            <div key={index} className="mb-8 p-6 border border-gray-200 rounded-xl bg-gray-50">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Miembro {index + 1}</h4>
              <div className="mb-4">
                <label htmlFor={`member-name-${index}`} className="block text-gray-700 text-lg font-semibold mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id={`member-name-${index}`}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg"
                  value={member.name}
                  onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor={`member-role-${index}`} className="block text-gray-700 text-lg font-semibold mb-2">
                  Rol
                </label>
                <input
                  type="text"
                  id={`member-role-${index}`}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg"
                  value={member.role}
                  onChange={(e) => handleMemberChange(index, 'role', e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor={`member-age-${index}`} className="block text-gray-700 text-lg font-semibold mb-2">
                  Edad
                </label>
                <input
                  type="number"
                  id={`member-age-${index}`}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg"
                  value={member.age}
                  onChange={(e) => handleMemberChange(index, 'age', e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor={`member-motto-${index}`} className="block text-gray-700 text-lg font-semibold mb-2">
                  Frase Motivacional
                </label>
                <textarea
                  id={`member-motto-${index}`}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg resize-y"
                  rows="2"
                  value={member.motto}
                  onChange={(e) => handleMemberChange(index, 'motto', e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor={`member-image-${index}`} className="block text-gray-700 text-lg font-semibold mb-2">
                  URL de Imagen
                </label>
                <input
                  type="text"
                  id={`member-image-${index}`}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg"
                  value={member.image}
                  onChange={(e) => handleMemberChange(index, 'image', e.target.value)}
                  required
                />
                {member.image && <img src={member.image} alt="Preview" className="mt-4 w-24 h-24 rounded-full object-cover shadow-md" />}
              </div>
              <button
                type="button"
                onClick={() => handleRemoveMember(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-md font-semibold"
              >
                Eliminar Miembro
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddMember}
            className="w-full bg-[#FFBA00] text-gray-900 px-6 py-3 rounded-xl shadow-lg hover:bg-[#E0A000] transition-all duration-300 transform hover:scale-105 text-lg font-semibold mb-6"
          >
            Agregar Nuevo Miembro
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

export default AdminEditTeamModal;