import React from 'react';
import { Home, Droplets, Trees, Sun, Zap, Ruler } from 'lucide-react';

const features = [
  {
    icon: <Ruler size={32} />,
    title: '16 Hectáreas',
    description: 'Amplio terreno con múltiples posibilidades'
  },
  {
    icon: <Home size={32} />,
    title: 'Casa Completa',
    description: '2 dormitorios, baño, cocina, comedor y 3 galerías'
  },
  {
    icon: <Droplets size={32} />,
    title: 'Piscina',
    description: '8 x 3.80 metros con profundidad de 1.60 a 1.80 metros'
  },
  {
    icon: <Trees size={32} />,
    title: 'Frutales',
    description: 'Naranjas, limones, duraznos y mandarinas'
  },
  {
    icon: <Sun size={32} />,
    title: 'Cultivos',
    description: '2 hectáreas de alfalfa en producción'
  },
  {
    icon: <Zap size={32} />,
    title: 'Infraestructura',
    description: 'Transformador propio de 5kVA y cisterna de agua'
  }
];

const PropertyHighlights: React.FC = () => {
  return (
    <section id="caracteristicas" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-green-800">
          Características Destacadas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-green-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-green-700 text-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0 lg:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Oportunidad Única en Catamarca</h3>
              <p className="text-lg">
                Ideal para vivienda, emprendimiento turístico o proyecto agrícola. 
                El precio es inmejorable para una propiedad con todas estas características.
              </p>
            </div>
            <a 
              href="#contacto" 
              className="bg-white text-green-800 hover:bg-green-100 py-3 px-8 rounded-full font-bold text-lg transition-colors duration-300"
            >
              Solicitar Información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyHighlights;