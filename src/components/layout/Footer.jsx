import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-14">

          {/* Brand */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <h2 className="text-4xl font-bold mb-5">
              Digital Rahul
            </h2>

            <p className="text-gray-400 leading-8">
              Helping businesses grow online through SEO,
              Google Ads, Meta Ads and Modern React Websites.
            </p>

          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              <a href="#home" className="text-gray-400 hover:text-blue-500 transition">
                Home
              </a>

              <a href="#about" className="text-gray-400 hover:text-blue-500 transition">
                About
              </a>

              <a href="#services" className="text-gray-400 hover:text-blue-500 transition">
                Services
              </a>

              <a href="#portfolio" className="text-gray-400 hover:text-blue-500 transition">
                Portfolio
              </a>

              <a href="#contact" className="text-gray-400 hover:text-blue-500 transition">
                Contact
              </a>

            </div>

          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h3 className="text-2xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <span>+91 8607142468</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <span>rsav964@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-500" />
                <span>Jaipur, Rajasthan</span>
              </div>

            </div>

          </motion.div>

        </div>

        {/* Bottom Bar */}

        <div className="border-t border-zinc-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-500 text-center md:text-left">
            © 2026 Digital Rahul. Built with React & Tailwind CSS.
          </p>

          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl flex items-center gap-2 transition-all duration-300"
          >
            <ArrowUp size={18} />
            <span>Back To Top</span>
          </motion.a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;