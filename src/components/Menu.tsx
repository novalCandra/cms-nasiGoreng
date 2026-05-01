import { motion, AnimatePresence } from "framer-motion";
import { Star, X } from "lucide-react";
import { menuItems, type MenuItem } from "../data/menu";
import { useState } from "react";

export function Menu() {
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const openModal = (item: MenuItem) => {
    setSelectedItem(item);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setTimeout(() => setSelectedItem(null), 300); // Wait for animation
  };

  return (
    <section id="menu" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold tracking-wider uppercase text-sm"
          >
            Menu Kami
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold"
          >
            Jelajahi Berbagai Menu dari{" "}
            <span className="text-primary-600">NasgorSantuy</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Nikmati perpaduan sempurna antara rempah-rempah tradisional dan
            sentuhan modern. Baru disiapkan, sangat lezat, dan disajikan dengan
            penuh semangat.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {menuItems?.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:shadow-primary-600/10 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  {item.category}
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={14} className="fill-current" />
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      4.8
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  {item.description}
                </p>
                <div className="pt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-600">
                    Rp {item.price.toLocaleString("id-ID")}
                  </span>
                  <button
                    onClick={() => openModal(item)}
                    className="text-sm font-semibold text-gray-900 dark:text-white hover:text-primary-600 transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {modal && selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl w-full max-w-2xl overflow-y-auto max-h-[90vh]"
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 dark:bg-black/10 dark:hover:bg-black/20 rounded-full backdrop-blur-md transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 h-64 md:h-auto">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-1/2 space-y-6">
                    <div>
                      <span className="text-primary-600 text-xs font-bold uppercase tracking-widest">
                        {selectedItem.category}
                      </span>
                      <h3 className="text-3xl font-bold mt-2">
                        {selectedItem.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-yellow-500">
                        <Star size={16} className="fill-current" />
                        <span className="font-bold text-gray-900 dark:text-white">
                          4.8
                        </span>
                        <span className="text-gray-400 text-sm font-normal">
                          (50+ reviews)
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {selectedItem.description}
                    </p>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center pt-6 border-t border-gray-100 dark:border-gray-800">
                        <div className="space-y-1">
                          <p className="text-gray-400 text-xs uppercase font-bold tracking-wider">
                            Harga
                          </p>
                          <p className="text-3xl font-black text-primary-600">
                            Rp {selectedItem.price.toLocaleString("id-ID")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
