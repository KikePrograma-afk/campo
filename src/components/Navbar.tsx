import React from 'react';
import { Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="font-serif text-2xl font-bold text-green-800">Finca Catamarca</h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#caracteristicas" className="text-gray-700 hover:text-green-700 transition">Características</a>
          <a href="#galeria" className="text-gray-700 hover:text-green-700 transition">Galería</a>
          <a href="#detalles" className="text-gray-700 hover:text-green-700 transition">Detalles</a>
          <a href="#contacto" className="text-gray-700 hover:text-green-700 transition">Contacto</a>
        </div>
        <div className="flex items-center">
          <a href="#contacto" className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-full flex items-center transition duration-300">
            <Phone size={18} className="mr-2" />
            <span className="hidden sm:inline">Consultar</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;