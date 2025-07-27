import React from 'react';

const PlanesSection = () => {
  const plans = [
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

  const handleWhatsAppClick = (planName) => {
    const phoneNumber = "71"; // Número de WhatsApp de la empresa
    const message = `Hola, me interesa el plan ${planName} que ofrecen.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Nuestros Planes de Diseño
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-200 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-[#7800A3] mb-4">{plan.name}</h3>
              <p className="text-4xl font-extrabold text-gray-900 mb-6">{plan.price}</p>
              <ul className="text-gray-700 text-lg space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#FFBA00] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 mb-8 flex-grow">{plan.description}</p>
              <button
                onClick={() => handleWhatsAppClick(plan.name)}
                className="bg-[#7800A3] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#5A007A] transition-colors text-lg font-semibold w-full"
              >
                Elegir Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanesSection;