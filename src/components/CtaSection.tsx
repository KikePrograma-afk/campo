import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-12 bg-green-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          ¡No pierda esta oportunidad única en Catamarca!
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          16 hectáreas con casa, piscina, frutales y cultivos. 
          Una propiedad con gran potencial por solo U$D 150.000.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#contacto" 
            className="bg-white text-green-800 hover:bg-green-100 py-3 px-8 rounded-full font-bold text-lg transition-colors duration-300 shadow-lg"
          >
            Consultar Ahora
          </a>
          <a 
            href="https://wa.me/123456789" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-800 hover:bg-green-900 text-white py-3 px-8 rounded-full font-bold text-lg transition-colors duration-300 shadow-lg border border-white"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;