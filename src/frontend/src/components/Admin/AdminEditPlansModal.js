import React, { useState } from 'react';

const AdminEditPlansModal = ({ onClose, onUpdatePlans }) => {
  const initialPlans = [
    {
      name: "Básico",
      price: "$299/mes",
      features: [
        "Diseño de logo",
        "Paleta de colores",
        "Tipografía básica",
        "2 revisiones"
      ],
      description: "Ideal para emprendedores que inician y necesitan una identidad visual sólida."
    },
    {
      name: "Estándar",
      price: "$599/mes",
      features: [
        "Todo del plan Básico",
        "Manual de marca",
        "Diseño de papelería (tarjetas, hojas)",
        "Diseño para redes sociales (5 plantillas)",
        "4 revisiones"
      ],
      description: "Perfecto para negocios que buscan profesionalizar su imagen y presencia digital."
    },
    {
      name: "Premium",
      price: "$999/mes",
      features: [
        "Todo del plan Estándar",
        "Manual de marca",
        "Diseño de papelería (tarjetas, hojas)",
        "Diseño para redes sociales (5 plantillas)",
        "Diseño web (landing page)",
        "Estrategia de contenido visual",
        "Diseño de campañas publicitarias (2)",
        "Soporte prioritario",
        "Revisiones ilimitadas"
      ],
      description: "La solución completa para empresas que desean una presencia digital impactante y un crecimiento acelerado."
    }
  ];

  const [plans, setPlans] = useState(initialPlans);

  const handlePlanChange = (index, field, value) => {
    const newPlans = [...plans];
    newPlans[index][field] = value;
    setPlans(newPlans);
  };

  const handleFeatureChange = (planIndex, featureIndex, value) => {
    const newPlans = [...plans];
    newPlans[planIndex].features[featureIndex] = value;
    setPlans(newPlans);
  };

  const handleAddFeature = (planIndex) => {
    const newPlans = [...plans];
    newPlans[planIndex].features.push('');
    setPlans(newPlans);
  };

  const handleRemoveFeature = (planIndex, featureIndex) => {
    const newPlans = [...plans];
    newPlans[planIndex].features = newPlans[planIndex].features.filter((_, i) => i !== featureIndex);
    setPlans(newPlans);
  };

  const handleAddPlan = () => {
    setPlans([...plans, { name: '', price: '', features: [''], description: '' }]);
  };

  const handleRemovePlan = (index) => {
    const newPlans = plans.filter((_, i) => i !== index);
    setPlans(newPlans);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdatePlans(plans);
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
          Modificar Planes
        </h3>
        <form onSubmit={handleSubmit}>
          {plans.map((plan, planIndex) => (
            <div key={planIndex} className="mb-8 p-6 border border-gray-200 rounded-xl bg-gray-50">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Plan {planIndex + 1}</h4>
              <div className="mb-4">
                <label htmlFor={`plan-name-${planIndex}`} className="block text-gray-700 text-lg font-semibold mb-2">
                  Nombre del Plan
                </label>
                <input
                  type="text"
                  id={`plan-name-${planIndex}`}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg"
                  value={plan.name}
                  onChange={(e) => handlePlanChange(planIndex, 'name', e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor={`plan-price-${planIndex}`} className="block text-gray-700 text-lg font-semibold mb-2">
                  Precio
                </label>
                <input
                  type="text"
                  id={`plan-price-${planIndex}`}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg"
                  value={plan.price}
                  onChange={(e) => handlePlanChange(planIndex, 'price', e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-lg font-semibold mb-2">
                  Características
                </label>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center mb-2">
                    <input
                      type="text"
                      className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg mr-2"
                      value={feature}
                      onChange={(e) => handleFeatureChange(planIndex, featureIndex, e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveFeature(planIndex, featureIndex)}
                      className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => handleAddFeature(planIndex)}
                  className="bg-[#FFBA00] text-gray-900 px-4 py-2 rounded-lg hover:bg-[#E0A000] transition-colors text-md font-semibold mt-2"
                >
                  Agregar Característica
                </button>
              </div>
              <div className="mb-4">
                <label htmlFor={`plan-description-${planIndex}`} className="block text-gray-700 text-lg font-semibold mb-2">
                  Descripción
                </label>
                <textarea
                  id={`plan-description-${planIndex}`}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg resize-y"
                  rows="3"
                  value={plan.description}
                  onChange={(e) => handlePlanChange(planIndex, 'description', e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="button"
                onClick={() => handleRemovePlan(planIndex)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-md font-semibold"
              >
                Eliminar Plan
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddPlan}
            className="w-full bg-[#FFBA00] text-gray-900 px-6 py-3 rounded-xl shadow-lg hover:bg-[#E0A000] transition-all duration-300 transform hover:scale-105 text-lg font-semibold mb-6"
          >
            Agregar Nuevo Plan
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

export default AdminEditPlansModal;