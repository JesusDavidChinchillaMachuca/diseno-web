import React, { useState } from 'react';

const AdminEditFaqModal = ({ onClose, onUpdateFaq }) => {
  const initialFaqs = [
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

  const [faqs, setFaqs] = useState(initialFaqs);

  const handleQuestionChange = (index, value) => {
    const newFaqs = [...faqs];
    newFaqs[index].question = value;
    setFaqs(newFaqs);
  };

  const handleAnswerChange = (index, value) => {
    const newFaqs = [...faqs];
    newFaqs[index].answer = value;
    setFaqs(newFaqs);
  };

  const handleAddFaq = () => {
    setFaqs([...faqs, { question: '', answer: '' }]);
  };

  const handleRemoveFaq = (index) => {
    const newFaqs = faqs.filter((_, i) => i !== index);
    setFaqs(newFaqs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateFaq(faqs);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto py-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 w-full max-w-3xl border border-gray-200 relative my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Modificar Preguntas Frecuentes
        </h3>
        <form onSubmit={handleSubmit}>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 p-6 border border-gray-200 rounded-xl bg-gray-50">
              <div className="mb-4">
                <label htmlFor={`question-${index}`} className="block text-gray-700 text-lg font-semibold mb-2">
                  Pregunta {index + 1}
                </label>
                <input
                  type="text"
                  id={`question-${index}`}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg"
                  value={faq.question}
                  onChange={(e) => handleQuestionChange(index, e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor={`answer-${index}`} className="block text-gray-700 text-lg font-semibold mb-2">
                  Respuesta {index + 1}
                </label>
                <textarea
                  id={`answer-${index}`}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7800A3] transition-all text-lg resize-y"
                  rows="4"
                  value={faq.answer}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveFaq(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-md font-semibold"
              >
                Eliminar Pregunta
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddFaq}
            className="w-full bg-[#FFBA00] text-gray-900 px-6 py-3 rounded-xl shadow-lg hover:bg-[#E0A000] transition-all duration-300 transform hover:scale-105 text-lg font-semibold mb-6"
          >
            Agregar Nueva Pregunta
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

export default AdminEditFaqModal;