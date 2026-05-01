import { motion } from "framer-motion";
import { Plus, Star } from "lucide-react";
import { menuItems } from "../data/menu";

export function Menu() {
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
            Our Menu
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
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
                <button className="absolute bottom-4 right-4 p-3 bg-primary-600 text-white rounded-2xl shadow-xl transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Plus size={20} />
                </button>
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
                  <button className="text-sm font-semibold text-gray-900 dark:text-white hover:text-primary-600 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
