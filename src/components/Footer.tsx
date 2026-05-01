import { Globe, Camera, Share2, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Nasgor<span className="text-gray-900 dark:text-white">Santuy</span>
          </span>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Nasi goreng Indonesia asli yang dibuat dengan bahan-bahan segar dan
            cinta. Nikmati cita rasa asli Nusantara.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6">Tautan Cepat</h4>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <a
                href="#beranda"
                className="hover:text-primary-600 transition-colors"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="hover:text-primary-600 transition-colors"
              >
                Menu Kami
              </a>
            </li>
            <li>
              <a
                href="#location"
                className="hover:text-primary-600 transition-colors"
              >
                Lokasi
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-primary-600 transition-colors"
              >
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Jam Buka - Jam Tutup</h4>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex justify-between">
              <span>Senin - Kamis</span> <span>17:00 - 22:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sabtu - Minggu</span> <span>18:00 - 23:00</span>
            </li>
            <li className="flex justify-between">
              <span>Jumat</span> <span>tutup</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Hubungi Kami</h4>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-primary-600" />
              <span>+62 812-3456-7890</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-primary-600" />
              <span>hello@nasigorengpro.id</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={30} className="text-primary-600" />
              <span>
                Jl. Raya Sukorejo, Glatik Wetan, Kec. Sukorejo, Pasuruan, Jawa
                Tim
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} NasgorSantuy.</p>
      </div>
    </footer>
  );
}
