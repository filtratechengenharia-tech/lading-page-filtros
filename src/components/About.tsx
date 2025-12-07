import React from 'react';
import { motion } from 'framer-motion';
import { Award, Leaf, Users, Globe, ArrowRight } from 'lucide-react';
import { PageType } from '../App';

interface AboutProps {
  isTeaser?: boolean;
  onNavigate?: (page: PageType) => void;
}

const About: React.FC<AboutProps> = ({ isTeaser = false, onNavigate }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Quem Somos</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Pioneiros em <br/> Purificação Sustentável
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Fundada em 2010, a Filtratech nasceu com uma missão clara: democratizar o acesso à água de altíssima qualidade sem gerar resíduos plásticos.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Nossa equipe de engenheiros químicos e ambientais desenvolveu a tecnologia patenteada PureFlow™, hoje presente em mais de 15.000 lares e empresas em todo o Brasil. Não vendemos apenas filtros; vendemos saúde e consciência ambiental.
            </p>

            {!isTeaser && (
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 text-3xl mb-1">10+</h4>
                  <p className="text-sm text-slate-500">Anos de Inovação</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 text-3xl mb-1">15k</h4>
                  <p className="text-sm text-slate-500">Clientes Felizes</p>
                </div>
              </div>
            )}

            {isTeaser && (
              <button 
                onClick={() => onNavigate?.('about')}
                className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors"
              >
                Conheça nossa história <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            )}
          </motion.div>

          <motion.div 
            className="lg:w-1/2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 mt-8">
              <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2670&auto=format&fit=crop" alt="Lab" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
              <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-lg">
                <Award className="w-8 h-8 mb-3" />
                <h4 className="font-bold text-lg">Certificado ISO</h4>
                <p className="text-blue-100 text-sm">Qualidade garantida em processos.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-cyan-500 p-6 rounded-2xl text-white shadow-lg">
                <Leaf className="w-8 h-8 mb-3" />
                <h4 className="font-bold text-lg">Eco Friendly</h4>
                <p className="text-cyan-100 text-sm">Zero resíduo plástico em nossos refis.</p>
              </div>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop" alt="Office" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
            </div>
          </motion.div>
        </div>

        {/* Values Section - Only shown on full page */}
        {!isTeaser && (
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Foco no Cliente", desc: "Suporte vitalício e atendimento humanizado para cada cliente." },
              { icon: Globe, title: "Sustentabilidade", desc: "Cada filtro vendido retira 2.000 garrafas plásticas do meio ambiente por ano." },
              { icon: Award, title: "Excelência", desc: "Não aceitamos nada menos que a perfeição molecular em nossa filtragem." }
            ].map((value, i) => (
              <div key={i} className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-blue-600">
                  <value.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h4>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;