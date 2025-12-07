import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { contactInfo, faqData } from '../data';

interface ContactProps {
  isTeaser?: boolean;
}

const Contact: React.FC<ContactProps> = ({ isTeaser = false }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado! Entraremos em contato em breve.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info & FAQ */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Fale com um Especialista</h2>
              <p className="text-slate-400 text-lg mb-8">
                Tem dúvidas sobre qual filtro é o ideal para sua casa? Nossa equipe de engenheiros está pronta para ajudar.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center space-x-4 p-4 bg-slate-800 rounded-xl">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Telefone</p>
                    <p className="font-semibold text-lg">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-slate-800 rounded-xl">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <p className="font-semibold text-lg">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-slate-800 rounded-xl">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Showroom</p>
                    <p className="font-semibold text-lg">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Perguntas Frequentes</h3>
                <div className="space-y-3">
                  {faqData.map((faq, idx) => (
                    <div key={idx} className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700">
                      <button 
                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        className="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-slate-800 transition-colors"
                      >
                        {faq.q}
                        {activeFaq === idx ? <ChevronUp className="w-4 h-4 text-blue-400"/> : <ChevronDown className="w-4 h-4 text-slate-400"/>}
                      </button>
                      <AnimatePresence>
                        {activeFaq === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                          >
                            <div className="p-4 pt-0 text-slate-400 text-sm">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>

          {/* Form */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 lg:p-10 text-slate-800 shadow-2xl sticky top-28">
              <h3 className="text-2xl font-bold mb-6">Solicite um Orçamento</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Seu nome"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="seu@email.com"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Telefone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="(11) 99999-9999"
                      value={formState.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Como podemos ajudar?</label>
                  <textarea 
                    rows={4}
                    name="message"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Tenho interesse no modelo Pro UV..."
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-4 rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>Enviar Solicitação</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;