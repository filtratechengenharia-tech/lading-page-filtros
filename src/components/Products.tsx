import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { PageType } from '../App';
import { productsData, productCategories } from '../data';

interface ProductsProps {
  isTeaser?: boolean;
  onNavigate?: (page: PageType) => void;
}

const Products: React.FC<ProductsProps> = ({ isTeaser = false, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'residential' | 'corporate'>('all');

  const filteredProducts = activeCategory === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  const displayedProducts = isTeaser ? productsData.slice(0, 3) : filteredProducts;

  return (
    <section className={`bg-white ${isTeaser ? 'py-20' : 'py-12'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          {isTeaser && <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Nossa Loja</h2>}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {isTeaser ? "Escolha o Ideal para Você" : "Catálogo Completo"}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Design moderno que complementa seu ambiente enquanto protege sua saúde com tecnologia de ponta.
          </p>
        </div>

        {!isTeaser && (
          <div className="flex justify-center space-x-4 mb-12">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.icon && <cat.icon className="w-4 h-4 mr-2" />}
                {cat.label}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-3xl border ${product.popular ? 'border-blue-500 shadow-2xl z-10' : 'border-slate-200 shadow-lg'} bg-white flex flex-col overflow-hidden group hover:-translate-y-2 transition-transform duration-300`}
              >
                {product.popular && (
                  <div className="absolute top-0 inset-x-0 bg-blue-600 text-white text-center py-1 text-xs font-bold uppercase tracking-wider z-20">
                    Mais Vendido
                  </div>
                )}
                
                <div className="h-56 overflow-hidden bg-slate-100 relative">
                  <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase text-slate-600 shadow-sm">
                    {product.category === 'residential' ? 'Casa' : 'Empresa'}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-slate-500 mb-6 flex-1 leading-relaxed">{product.description}</p>
                  
                  <div className="mb-6">
                     <p className="text-3xl font-bold text-blue-600">{product.price}</p>
                     {product.price !== "Sob Consulta" && <p className="text-xs text-slate-400">em até 12x sem juros</p>}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="text-sm text-slate-700">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-xl font-bold transition-colors ${product.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}>
                    Comprar Agora
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {isTeaser && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => onNavigate?.('products')}
              className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors"
            >
              Ver todos os produtos <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;