import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Finca Catamarca</h3>
            <p className="text-gray-400">Oportunidad única - 16 hectáreas con casa y más</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">© {new Date().getFullYear()} - Todos los derechos reservados</p>
            <p className="text-sm text-gray-500">
              Las imágenes son representativas. Se recomienda visitar la propiedad.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;