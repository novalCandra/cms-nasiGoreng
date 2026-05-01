import { motion } from "framer-motion";
import { MapPin, Navigation, Clock } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">
                Find Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Lokasi <span className="text-primary-600">Nasgor</span>Santuy
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Located in the heart of Jakarta, our kitchen is designed for
                comfort and great taste. Come by and enjoy the best fried rice
                in a relaxing atmosphere.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-xl h-fit">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Lokasi Kami</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Jl. Raya Sukorejo, Glatik Wetan, Kec. Sukorejo, Pasuruan,
                    Jawa Tim
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-xl h-fit">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    JAM BUKA - JAM TUTUP
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    17:00 - 22:00
                  </p>
                </div>
              </div>
            </div>

            <button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
              <Navigation size={18} />
              Get Directions
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800"
          >
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDECzu4NWsweiSQIy1WYG6dybOjPUTlbzU&q=Jl. Raya Sukorejo"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
