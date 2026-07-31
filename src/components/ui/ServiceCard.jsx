import { motion } from "framer-motion";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className="group bg-zinc-900 border border-zinc-800 hover:border-blue-500 rounded-2xl p-8 transition-all duration-300 overflow-hidden relative"
    >

      {/* Background Glow */}

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-600/10 to-transparent"></div>

      {/* Icon */}

      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.1,
        }}
        className="relative w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8"
      >
        {icon}
      </motion.div>

      {/* Title */}

      <h3 className="relative text-2xl font-bold text-white mb-5">
        {title}
      </h3>

      {/* Description */}

      <p className="relative text-gray-400 leading-8 mb-8">
        {description}
      </p>
            {/* Learn More Button */}

      <motion.button
        whileHover={{ x: 5 }}
        className="relative flex items-center gap-2 text-blue-500 font-semibold group/button"
      >
        Learn More

        <motion.span
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          →
        </motion.span>

      </motion.button>

    </motion.div>
  );
};

export default ServiceCard;