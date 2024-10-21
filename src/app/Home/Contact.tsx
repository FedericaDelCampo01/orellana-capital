'use client'

import { FormEvent, useState } from 'react';
import { trackEvent } from '../Utility/AnalyticsHelpers';
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      console.log(data);
      setSuccessMessage('Mensaje enviado correctamente!');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Error:', error);
      alert(`Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`);
    }
  };

  const handleContactClick = () => {
    trackEvent('button_click', {
      button_name: 'Contact Form Sent',
      section: 'Contact'
    });
  };

  return (
    <section id='contact' className="bg-dark-blue/20 overflow-hidden">
      <div className="container max-w-6xl mx-auto md:py-16 flex flex-col md:flex-row items-center relative my-10 md:my-20 md:space-x-20 px-4">
        <div className="w-full lg:w-1/2 pr-10 flex flex-col px-4 md:px-0">
          <h1 className="text-dark-blue text-xl md:text-3xl font-bold mb-8 font-h1 fade-up-init">Contacto</h1>
          <p className="text-dark-blue font-light font-body fade-up-init">Nos encantaría ayudarte a alcanzar tus objetivos financieros. Escribínos para solicitar una consulta personalizada.</p>
          <div className="flex items-center mt-10 fade-up-init">
            <Image
              src="/images/email-icon.webp"
              width={32}
              height={32}
              className="mr-2" alt="Email Icon"
            />
            <a href="mailto:alejandro@orellanacapitaladvisors.com" className="text-dark-blue font-light font-body">alejandro@orellanacapitaladvisors.com</a>
          </div>
          <div className="flex items-center mt-6 fade-up-init">
            <Image
              src="/images/linkedin-icon.webp"
              width={32}
              height={32}
              className="mr-2" alt="Linkedin Icon"
            />
            <a href="https://www.linkedin.com/in/alejandro-hughes-stefani-9b501a48/" className="text-dark-blue font-light font-body">Alejandro Hughes</a>
          </div>
        </div>
        <div className="mt-10 md:mt-0 w-full lg:w-1/2 flex flex-col items-center justify-center">

          <form className="w-full font-body font-light" onSubmit={handleSubmit}>
            <div className="w-full">
              <input
                className={`appearance-none block w-full bg-white text-dark-blue border ${errors.name ? 'border-red-500' : 'border-white/30'} rounded-lg py-4 px-6 mb-3 leading-tight focus:outline-none `}
                type="text"
                placeholder="Nombre y apellido"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
            </div>

            <div className="w-full">
              <input
                className={`appearance-none block w-full bg-white text-dark-blue border ${errors.email ? 'border-red-500' : 'border-white/30'} rounded-lg py-4 px-6  mb-3  leading-tight focus:outline-none`}
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </div>

            <div className="w-full">
              <input
                className="appearance-none block w-full bg-white text-dark-blue border border-white/30 rounded-lg py-4 px-6 mb-3 leading-tight focus:outline-none "
                type="tel"
                placeholder="Numero de teléfono"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>


            <div className="w-full">
              <textarea
                className={`no-resize appearance-none block w-full bg-white text-dark-blue border ${errors.message ? 'border-red-500' : 'border-white/30'} rounded-lg py-4 px-6 mb-3 leading-tight focus:outline-none  h-36 resize-none`}
                placeholder="Mensaje"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
            </div>

            {successMessage && (
              <div className="bg-lime-green text-dark-blue p-2 pl-4 rounded-lg text-center mb-4">{successMessage}</div>
            )}
            <button
              className="w-full py-4 bg-dark-blue text-white hover:bg-blue hover:text-white duration-300 rounded-md font-semibold font-body"
              type="submit"
              onClick={handleContactClick}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;