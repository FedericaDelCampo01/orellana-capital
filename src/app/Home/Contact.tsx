"use client"

import { FormEvent, useState } from 'react';
import OptimizedImage from './OptimizedImage';
import contact from '../../../public/images/contact.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
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
    if (!formData.type) newErrors.type = 'Type of project is required';
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
      setSuccessMessage('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', type: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Error:', error);
      alert(`Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`);
    }
  };


  return (
    <section id='contact' className="bg-dark-blue font-sans overflow-hidden w-full">
      <div className="flex md:flex-row flex-col items-center justify-center">
        <div className="lg:w-1/2 hidden md:block">
          <OptimizedImage
            src={contact.src}
            alt="Contact"
            width={627}
            height={570}
            className="relative w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 md:p-12 lg:mr-[15%]">
          <h1 className="text-white text-3xl font-medium mb-16">Let&apos;s work together!</h1>

          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className={`appearance-none block w-full bg-transparent text-white border ${errors.name ? 'border-red-500' : 'border-white/30'} rounded-lg py-4 px-6 mb-3 leading-tight focus:outline-none focus:bg-white/20`}
                  type="text"
                  placeholder="Name *"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input
                  className={`appearance-none block w-full bg-transparent text-white border ${errors.email ? 'border-red-500' : 'border-white/30'} rounded-lg py-4 px-6 leading-tight focus:outline-none focus:bg-white/20`}
                  type="email"
                  placeholder="Email *"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3">
                <input
                  className="appearance-none block w-full bg-transparent text-white border border-white/30 rounded-lg py-4 px-6 mb-3 leading-tight focus:outline-none focus:bg-white/20"
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <select
                  className={`appearance-none block w-full bg-transparent text-white border ${errors.type ? 'border-red-500' : 'border-white/30'} rounded-lg py-4 px-6 mb-3 leading-tight focus:outline-none focus:bg-white/20`}
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Type of project *</option>
                  <option value="End-to-end Product Development">End-to-end Product Development</option>
                  <option value="Product Design">Product Discovery</option>
                  <option value="Product Design">Product Design</option>
                  <option value="Product Design">Web Design</option>
                  <option value="Custom Software Development">Custom Software Development</option>
                  <option value="AI Development">AI Development</option>
                  <option value="App Development">App Development</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Staff Augmentation">Staff Augmentation</option>
                  <option value="Other">Other</option>
                </select>
                {errors.type && <p className="text-red-500 text-xs italic">{errors.type}</p>}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <textarea
                  className={`no-resize appearance-none block w-full bg-transparent text-white border ${errors.message ? 'border-red-500' : 'border-white/30'} rounded-lg py-4 px-6 mb-3 leading-tight focus:outline-none focus:bg-white/20 h-48 resize-none`}
                  placeholder="Project details *"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
              </div>
            </div>
            {successMessage && (
              <div className="bg-lime-green text-dark-blue p-2 pl-4 rounded-lg text-center mb-4">{successMessage}</div>
            )}
            <button
              className="w-full py-4 custom-gradient hover:bg-white text-dark-blue duration-300 rounded-full font-medium"
              type="submit"
            >
              Send message!
            </button>
          </form>
        </div>
        <div className="block md:hidden w-full my-20">
          <OptimizedImage
            src={contact.src}
            alt="Contact"
            width={627}
            height={570}
            className="relative w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact;