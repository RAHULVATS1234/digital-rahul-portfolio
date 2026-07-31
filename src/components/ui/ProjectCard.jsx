import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  category,
  image,
  demo,
  github,
  tech,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className="group bg-zinc-900 border border-zinc-800 hover:border-blue-500 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
    >
      {/* Image Section */}

      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.4,
          }}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>

        {/* Category */}

        <div className="absolute top-4 right-4 bg-blue-600 px-4 py-2 rounded-full text-xs font-semibold text-white">
          {category}
        </div>
      </div>

      {/* Content */}

      <div className="p-7">
        <h3 className="text-2xl font-bold text-white mb-4">
          {title}
        </h3>

        <p className="text-gray-400 leading-8 mb-6">
          {description}
        </p>

        {/* Technology */}

        <div className="flex flex-wrap gap-2 mb-8">
          {tech.map((item) => (
            <span
              key={item}
              className="bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-full text-sm text-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="flex gap-4">
          <motion.a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300"
          >
            <ExternalLink size={18} />
            Live Demo
          </motion.a>

          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 border border-zinc-700 hover:border-white hover:bg-white hover:text-black py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300"
          >
            <Code2 size={18} />
            GitHub
          </motion.a>

        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;