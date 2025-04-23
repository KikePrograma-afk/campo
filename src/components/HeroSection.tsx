import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "/src/naturaleza.jpg",
  "/src/casa.jpg",
  "/src/terreno trabajado.jpg",
  "/src/pileta.jpg",
  "/src/entrada.jpg",
  "/src/finca.jpg",
  "/src/patio pileta.jpg"
];

const HeroSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
      ))}
      
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button 
          onClick={prevImage} 
          className="bg-white bg-opacity-30 p-2 rounded-full hover:bg-opacity-50 transition-all duration-300"
          aria-label="Previous image"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        <button 
          onClick={nextImage} 
          className="bg-white bg-opacity-30 p-2 rounded-full hover:bg-opacity-50 transition-all duration-300"
          aria-label="Next image"
        >
          <ChevronRight className="text-white" size={24} />
        </button>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">
          Finca en Catamarca
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl drop-shadow-md">
          16 hectáreas de naturaleza, con casa, piscina y plantaciones
        </p>
        <div className="bg-green-700 text-3xl md:text-4xl font-bold py-2 px-6 rounded-lg shadow-lg">
          U$D 150.000
        </div>
        <div className="mt-4 text-lg bg-white text-green-800 py-1 px-4 rounded-md font-medium shadow">
          Escritura en mano
        </div>
        <a 
          href="https://wa.me/5493834997640?text=Hola,%20estoy%20interesado%20en%20comprar%20el%20campo" 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 bg-white text-green-800 hover:bg-green-700 hover:text-white py-3 px-8 rounded-full font-bold text-lg transition-colors duration-300 shadow-lg flex items-center"
        >
          <span>Consultar por WhatsApp</span>
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-6">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentImage ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;