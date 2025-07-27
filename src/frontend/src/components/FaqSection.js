import React, { useState } from 'react';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Qué es la digitalización y por qué mi empresa la necesita?",
      answer: "La digitalización es el proceso de transformar información y procesos analógicos a formatos digitales. Tu empresa la necesita para mejorar la eficiencia, alcanzar a más clientes, optimizar la toma de decisiones y mantenerse competitiva en el mercado actual."
    },
    {
      question: "¿Cómo puede el diseño gráfico ayudar a mi negocio en la era digital?",
      answer: "El diseño gráfico es crucial para crear una identidad de marca sólida, atractiva y coherente. Ayuda a comunicar tu mensaje de forma efectiva, captar la atención de tu audiencia, generar confianza y diferenciarte de la competencia en plataformas digitales."
    },
    {
      question: "¿Es muy caro digitalizar mi negocio o invertir en diseño gráfico?",
      answer: "La inversión en digitalización y diseño gráfico es una inversión a largo plazo que genera un retorno significativo. Ofrecemos planes adaptados a diferentes presupuestos y necesidades, asegurando que obtengas el máximo valor por tu dinero."
    },
    {
      question: "¿Cuánto tiempo toma ver resultados de la digitalización o un nuevo diseño?",
      answer: "El tiempo para ver resultados varía según el proyecto y los objetivos. Algunos cambios, como una nueva identidad visual, pueden generar impacto inmediato en la percepción de tu marca. Otros, como estrategias de marketing digital, requieren un seguimiento continuo para optimizar y ver resultados a mediano y largo plazo."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Preguntas Frecuentes sobre Digitalización
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6 border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 text-left text-xl font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-6 text-gray-700 text-lg bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;