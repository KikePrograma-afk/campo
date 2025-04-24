import React from 'react';
import { 
  HomeIcon, 
  Warehouse, 
  Droplets, 
  Trees, 
  Leaf, 
  Zap, 
  MapPin, 
  FileCheck 
} from 'lucide-react';

const PropertyDetails: React.FC = () => {
  return (
    <section id="detalles" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-green-800">
          Detalles de la Propiedad
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="bg-gray-50 p-6 rounded-lg shadow mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center text-green-800">
                <MapPin size={24} className="mr-2" />
                Ubicación
              </h3>
              <p className="text-gray-700 mb-4">
                San Fernando del Valle de Catamarca, provincia de Catamarca, Argentina
              </p>
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <img 
                  // Actualiza esta ruta para que apunte a la carpeta public
                  // y usa el nombre de archivo renombrado si es necesario.
                  src="/maps_terreno.png" // Nombre renombrado
                  alt="Ubicación de la propiedad"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center text-green-800">
                <FileCheck size={24} className="mr-2" />
                Documentación
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 p-1 rounded mr-2 mt-1">✓</span>
                  <span>Escritura en mano</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 p-1 rounded mr-2 mt-1">✓</span>
                  <span>Dueña única</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 p-1 rounded mr-2 mt-1">✓</span>
                  <span>Papeles al día, listos para transferir</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 p-1 rounded mr-2 mt-1">✓</span>
                  <span>Sin deudas ni gravámenes</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-gray-50 p-6 rounded-lg shadow mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center text-green-800">
                <HomeIcon size={24} className="mr-2" />
                Vivienda Principal
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>2 dormitorios amplios</li>
                <li>Baño completo</li>
                <li>Cocina equipada</li>
                <li>Comedor luminoso</li>
                <li>3 galerías para disfrutar del entorno</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center text-green-800">
                <Warehouse size={24} className="mr-2" />
                Construcción Adicional
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>Salón espacioso</li>
                <li>2 habitaciones</li>
                <li>Baño (faltan accesorios)</li>
                <li>Ideal para ampliar la vivienda o crear un espacio independiente</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center text-green-800">
                <Leaf size={24} className="mr-2" />
                Terreno e Infraestructura
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Superficie total:</strong> 16 hectáreas</li>
                <li><strong>Riego:</strong> 12 horas cada 3 días</li>
                <li><strong>Electricidad:</strong> Transformador propio de 5kVA</li>
                <li><strong>Almacenamiento de agua:</strong> Cisterna de 4x4m y 2m de alto</li>
                <li><strong>Cultivos actuales:</strong> 2 hectáreas de alfalfa</li>
                <li><strong>Frutales:</strong> 1/2 hectárea (naranjas, limones, duraznos, mandarinas)</li>
                <li><strong>Piscina:</strong> 8 x 3.80m con profundidad de 1.60 a 1.80m</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;