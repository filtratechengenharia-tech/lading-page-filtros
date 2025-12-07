import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import { PageType } from '../App';
import { techSteps } from '../data';

interface TechnologyProps {
  isTeaser?: boolean;
  onNavigate?: (page: PageType) => void;
}

const Technology: React.FC<TechnologyProps> = ({ isTeaser = false, onNavigate }) => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Engenharia Hídrica</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Como a mágica acontece</h3>
          <p className="text-slate-600 text-lg">
            Nossa tecnologia exclusiva <span className="font-bold text-blue-600">PureFlow™</span> combina quatro estágios distintos de purificação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-20">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-slate-200 -z-10" />

          {techSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-md mx-auto group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 text-center">{step.title}</h4>
                <p className="text-slate-600 text-center text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Full Page Exclusive Content: Comparison */}
        {!isTeaser && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 mb-20"
          >
            <div className="bg-slate-900 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Por que Filtratech?</h3>
              <p className="text-slate-400">Comparativo direto com alternativas comuns</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-6 text-sm font-bold text-slate-500 uppercase tracking-wider">Critério</th>
                    <th className="p-6 text-lg font-bold text-blue-600 bg-blue-50/50">Filtratech PureFlow</th>
                    <th className="p-6 text-lg font-bold text-slate-600">Filtro de Barro</th>
                    <th className="p-6 text-lg font-bold text-slate-600">Água Mineral (Galão)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-6 font-medium text-slate-900">Remoção de Bactérias</td>
                    <td className="p-6 bg-blue-50/30 text-blue-700 font-bold"><CheckCircle className="inline w-5 h-5 mr-2"/>99.9% (UV)</td>
                    <td className="p-6 text-slate-600">Parcial</td>
                    <td className="p-6 text-slate-600">Variável (risco de contaminação)</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium text-slate-900">Retenção de Cloro</td>
                    <td className="p-6 bg-blue-50/30 text-blue-700 font-bold"><CheckCircle className="inline w-5 h-5 mr-2"/>Total</td>
                    <td className="p-6 text-slate-600">Não remove</td>
                    <td className="p-6 text-slate-600">Não contém (mas tem plástico)</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium text-slate-900">Custo por Litro</td>
                    <td className="p-6 bg-blue-50/30 text-blue-700 font-bold"><CheckCircle className="inline w-5 h-5 mr-2"/>R$ 0,02</td>
                    <td className="p-6 text-slate-600">R$ 0,00</td>
                    <td className="p-6 text-slate-600 text-red-500"><XCircle className="inline w-5 h-5 mr-2"/>R$ 1,20 (médio)</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium text-slate-900">Manutenção</td>
                    <td className="p-6 bg-blue-50/30 text-blue-700 font-bold">1x ao ano (Aviso Automático)</td>
                    <td className="p-6 text-slate-600">Limpeza semanal manual</td>
                    <td className="p-6 text-slate-600">Troca de galão pesado semanal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        <div className="mt-20 bg-blue-600 rounded-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="grid md:grid-cols-2 gap-12 p-12 items-center">
             <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">O que a sua água atual pode conter?</h3>
                <ul className="space-y-3">
                  {['Microplásticos', 'Cloro e Cloraminas', 'Metais Pesados (Chumbo, Mercúrio)', 'Cistos e Bactérias'].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full" />
                      <span className="text-blue-100">{item}</span>
                    </li>
                  ))}
                </ul>
             </div>
             <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <p className="text-white text-lg italic">
                  "Desde que instalamos o Filtratech Pro, a diferença no sabor e na leveza da água é incomparável. É um investimento na saúde."
                </p>
                <div className="mt-4 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">DR</div>
                  <div>
                    <p className="text-white font-semibold text-sm">Dr. Roberto Almeida</p>
                    <p className="text-blue-200 text-xs">Biomédico</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;