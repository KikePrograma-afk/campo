import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Define la referencia de la propiedad fuera para fácil acceso
  const propertyReference = 'Finca Catamarca - 16 Hectáreas';

  useEffect(() => {
    // Inicializa EmailJS con tu Public Key
    // Asegúrate de que 'AHpTc2fRqOkQbIdjF' es tu Public Key correcta
    emailjs.init("AHpTc2fRqOkQbIdjF");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Construye el mensaje completo con todos los datos del formulario
    const fullMessage = `
      Consulta sobre la propiedad: ${propertyReference}

      Nombre: ${formData.name}
      Teléfono: ${formData.phone}
      Email: ${formData.email}

      Mensaje:
      ${formData.message}
    `;

    try {
      // Prepara los parámetros para EmailJS
      // Ahora solo usamos 'message' para el contenido principal
      // 'reply_to' es útil para poder responder directamente al email del remitente
      // 'from_name' puede ser útil si tu template lo muestra como remitente
      const templateParams = {
        to_email: 'superkikekokero@gmail.com', // Destinatario (puede estar configurado en EmailJS también)
        from_name: formData.name, // Nombre del remitente (opcional, depende del template)
        reply_to: formData.email, // Email para el botón "Responder"
        message: fullMessage, // El mensaje completo que construimos
      };

      // Envía el email usando tu Service ID y Template ID
      // Asegúrate de que 'service_l77ea09' y 'template_vibdxrv' son correctos
      await emailjs.send(
        'service_l77ea09',
        'template_vibdxrv',
        templateParams
      );

      setSubmitStatus('success');
      setFormData({ // Resetea el formulario
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-green-800">
          ¿Interesado en esta propiedad?
        </h2>
        <p className="text-lg text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          No deje pasar esta oportunidad única. Contáctenos ahora mismo para obtener más información o coordinar una visita.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Formulario */}
          <div className="lg:w-1/2 bg-gray-50 p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campos del formulario (sin cambios aquí) */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Su nombre"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Su número de teléfono"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Correo electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Su email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Me interesa esta propiedad, quisiera obtener más información..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-md font-medium transition-colors duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-700 hover:bg-green-800 text-white'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
              </button>

              {/* Mensajes de estado (sin cambios aquí) */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                  Mensaje enviado correctamente. Nos pondremos en contacto pronto.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
                  Hubo un error al enviar el mensaje. Por favor, intente nuevamente o contáctenos directamente.
                </div>
              )}
            </form>
          </div>

          {/* Información de Contacto Directo (sin cambios aquí) */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="bg-green-700 text-white p-8 rounded-lg shadow-md flex-grow">
              <h3 className="text-2xl font-bold mb-6">Contáctenos directamente</h3>
              <div className="space-y-6">
                <a href="tel:+5493834997640" className="flex items-center hover:text-green-200 transition-colors duration-300">
                  <div className="mr-4 bg-white text-green-700 p-3 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-lg">+54 9 383 499-7640</p>
                  </div>
                </a>
                <a href="https://wa.me/5493834997640?text=Hola,%20estoy%20interesado%20en%20comprar%20el%20campo"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center hover:text-green-200 transition-colors duration-300">
                  <div className="mr-4 bg-white text-green-700 p-3 rounded-full">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-lg">+54 9 383 499-7640</p>
                  </div>
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-green-600">
                <h4 className="font-bold text-xl mb-4">¿Por qué contactarnos?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-1 flex-shrink-0" />
                    <span>Atención personalizada</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-1 flex-shrink-0" />
                    <span>Podemos coordinar visitas a la propiedad</span>
                  </li>
                   <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-1 flex-shrink-0" />
                    <span>Documentación completa y en regla</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-1 flex-shrink-0" />
                    <span>Asesoramiento durante todo el proceso</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;