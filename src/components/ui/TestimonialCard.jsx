import { motion } from "framer-motion";

const TestimonialCard = ({
  name,
  role,
  review,
  rating,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
      }}
      className="group bg-zinc-900 border border-zinc-800 hover:border-blue-500 rounded-2xl p-8 relative overflow-hidden transition-all duration-300"
    >

      {/* Background Glow */}

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-600/10 to-transparent"></div>

      {/* Quote */}

      <div className="relative text-6xl text-blue-500 leading-none mb-6">
        ❝
      </div>

      {/* Rating */}

      <div className="relative flex gap-1 mb-6">

        {Array.from({ length: rating }).map((_, index) => (

          <motion.span
            key={index}
            whileHover={{
              scale: 1.25,
              rotate: 10,
            }}
            className="text-yellow-400 text-xl"
          >
            ★
          </motion.span>

        ))}

      </div>

      {/* Review */}

      <p className="relative text-gray-300 leading-8 italic mb-10">
        "{review}"
      </p>
            {/* Client Info */}

      <div className="relative flex items-center gap-4">

        {/* Avatar */}

        <motion.div
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
          className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold"
        >
          {name.charAt(0)}
        </motion.div>

        {/* Name & Role */}

        <div>

          <h3 className="text-xl font-bold text-white">
            {name}
          </h3>

          <p className="text-gray-400 text-sm">
            {role}
          </p>

        </div>

      </div>

    </motion.div>
  );
};

export default TestimonialCard;