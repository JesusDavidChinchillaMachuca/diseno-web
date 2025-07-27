import React, { useState } from 'react';

const NosotrosSection = () => {
  const [nosotrosContent, setNosotrosContent] = useState({
    mainText: "En Gio_publicidad, somos un equipo apasionado por el diseño gráfico y la comunicación visual. Creemos que cada marca tiene una historia única que contar, y nuestro propósito es ayudar a nuestros clientes a narrarla de la manera más impactante y efectiva posible. Combinamos creatividad, estrategia y tecnología para ofrecer soluciones de diseño que no solo se ven bien, sino que también generan resultados tangibles. Desde la creación de identidades de marca memorables hasta el desarrollo de experiencias digitales inmersivas, nuestro enfoque se centra en entender a fondo las necesidades de cada cliente para superar sus expectativas. Nos enorgullece construir relaciones duraderas basadas en la confianza, la transparencia y la excelencia.",
    phone: "+52 55 1234 5678",
    email: "info@giopublicidad.com"
  });

  const [teamMembers, setTeamMembers] = useState([
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
  ]);

  return (
    <section className="py-16 bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Sobre Nosotros
        </h2>
        <div className="max-w-4xl mx-auto text-center text-lg text-gray-700 leading-relaxed">
          <p className="mb-6">
            En <span className="font-semibold text-[#7800A3]">Gio_publicidad</span>, {nosotrosContent.mainText}
          </p>
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contáctanos</h3>
            <p className="mb-2">
              <span className="font-semibold">Teléfono:</span> {nosotrosContent.phone}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span> {nosotrosContent.email}
            </p>
            <div className="flex justify-center space-x-6 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#7800A3] transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#7800A3] transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.792.01 3.249.064.427.054.647.174.886.336.262.197.439.39.655.607.216.216.418.393.607.655.162.239.282.459.336.886.054.457.064.819.064 3.25 0 .004 0 .008 0 .013V19.68c0 .005 0 .009 0 .013 0 2.43-.01 2.792-.064 3.249-.054.427-.174.647-.336.886-.197.262-.39.439-.607.655-.216.216-.393.418-.655.607-.162-.239-.282-.459-.336-.886C2.386 2.01 2.748 2 5.18 2h6.635zM12 11.807c1.624 0 2.943 1.319 2.943 2.943s-1.319 2.943-2.943 2.943-2.943-1.319-2.943-2.943 1.319-2.943 2.943-2.943zm0-7.106c3.84 0 6.953 3.113 6.953 6.953S15.84 18.807 12 18.807 5.047 15.694 5.047 11.807 8.16 4.854 12 4.854z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#7800A3] transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M19 0H5c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-11 19H5V8h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 12.27h-3V13.5c0-1.48-.67-1.98-1.48-1.98-.81 0-1.48.5-1.48 1.98v5.5h-3V8h3v2.38c.4-.67 1.2-1.38 2.72-1.38 2.01 0 3.5 1.32 3.5 4.17v6.83z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Nuestro Equipo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto justify-items-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center border border-gray-200 transform hover:scale-105 transition-transform duration-300 w-full max-w-xs">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md" />
                <h4 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h4>
                <p className="text-lg text-gray-700 mb-1">{member.role}</p>
                <p className="text-md text-gray-600 mb-4">{member.age} años</p>
                <p className="italic text-gray-600">"{member.motto}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosotrosSection;