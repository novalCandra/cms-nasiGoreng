import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary-200/30 dark:bg-primary-900/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-orange-200/30 dark:bg-orange-900/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
            <Star size={16} className="fill-primary-500 text-primary-500" />
            <span>Best Fried Rice in Town</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Nasi Goreng{" "}
            <span className="text-primary-600">Yang Gurih dan Nagih</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
            Nikmati perpaduan sempurna antara rempah-rempah tradisional dan
            sentuhan modern. Baru disiapkan, sangat lezat, dan disajikan dengan
            penuh semangat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#menu"
              className="btn-primary flex items-center justify-center gap-2"
            >
              Lihat Menu Kami <ArrowRight size={18} />
            </a>
            <a
              href="#location"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              Lokasi Kami
            </a>
          </div>

          <div className="flex items-center gap-6 pt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-4 border-white dark:border-gray-950 bg-gray-200 overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-yellow-500 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="fill-current" />
                ))}
              </div>
              <p className="font-semibold">500+ Pelanggan Setia</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 w-full aspect-square max-w-lg mx-auto overflow-hidden rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=1000"
              alt="Fried Rice Special"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 z-20 glass p-4 rounded-2xl shadow-xl flex items-center gap-3"
          >
            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-xl">
              🔥
            </div>
            <div>
              <p className="text-xs text-gray-500">Popular</p>
              <p className="font-bold text-sm">Special Spicy</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-6 -left-6 z-20 glass p-4 rounded-2xl shadow-xl flex items-center gap-3"
          >
            <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-xl">
              🥗
            </div>
            <div>
              <p className="text-xs text-gray-500">Fresh</p>
              <p className="font-bold text-sm">100% Organic</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
