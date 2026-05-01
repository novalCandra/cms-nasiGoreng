import { motion } from 'framer-motion';
import { Send, Phone, MessageCircle, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative glass p-8 md:p-16 rounded-[3rem] border border-primary-100 dark:border-primary-900/30 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-200/50 dark:bg-primary-900/20 blur-[80px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-200/50 dark:bg-orange-900/20 blur-[80px] rounded-full" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">Get in Touch</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Have questions or want to order? Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-8">
                <a href="tel:+6281234567890" className="flex items-center gap-6 group">
                  <div className="p-4 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-2xl group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Call Us</p>
                    <p className="text-xl font-bold">+62 812-3456-7890</p>
                  </div>
                </a>

                <a href="https://wa.me/6281234567890" className="flex items-center gap-6 group">
                  <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-2xl group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">WhatsApp</p>
                    <p className="text-xl font-bold">Chat with us</p>
                  </div>
                </a>

                <a href="mailto:hello@nasigorengpro.id" className="flex items-center gap-6 group">
                  <div className="p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Email</p>
                    <p className="text-xl font-bold">hello@nasigorengpro.id</p>
                  </div>
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800/50 p-8 md:p-12 rounded-[2rem] shadow-2xl border border-white dark:border-gray-700"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us something..." 
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                  ></textarea>
                </div>
                <button className="btn-primary w-full flex items-center justify-center gap-2 py-4">
                  Send Message <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
