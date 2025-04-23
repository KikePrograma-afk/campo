import React, { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  "/src/naturaleza.jpg",
  "/src/casa.jpg",
  "/src/terreno trabajado.jpg",
  "/src/pileta.jpg",
  "/src/entrada.jpg",
  "/src/finca.jpg",
  "/src/patio pileta.jpg"
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="galeria" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-green-800">
          Galería de Imágenes
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300"
              onClick={() => openModal(image)}
            >
              <img 
                src={image} 
                alt={`Propiedad en Catamarca ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
        
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-black hover:bg-gray-200 transition-colors duration-300"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
            <img 
              src={selectedImage} 
              alt="Imagen ampliada" 
              className="max-w-full max-h-90vh object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;