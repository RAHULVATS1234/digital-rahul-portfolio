import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

const skills = [
  "Technical SEO",
  "On-Page SEO",
  "React",
  "JavaScript",
  "Tailwind CSS",
  "WordPress",
  "Google Analytics 4",
  "Google Search Console",
  "Microsoft Clarity",
  "Google Ads",
  "Meta Ads",
  "Git",
  "GitHub",
  "Vercel",
];

const AboutContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Small Heading */}

      <span className="text-blue-500 uppercase tracking-[5px] font-semibold">
        About Me
      </span>

      {/* Main Heading */}

      <h2 className="text-4xl lg:text-5xl font-bold leading-tight mt-5">
        SEO Executive &
        <span className="text-blue-500">
          {" "}React Developer
        </span>
      </h2>

      {/* Description */}

      <p className="mt-8 text-gray-400 leading-8 text-lg">
        Hi, I'm <strong className="text-white">Rahul Sharma</strong>, an
        SEO Executive and React Developer passionate about building
        fast, SEO-friendly websites that deliver measurable business
        results.
      </p>

      <p className="mt-6 text-gray-400 leading-8 text-lg">
        I specialize in Technical SEO, WordPress Development,
        React, Google Analytics 4, Microsoft Clarity,
        website optimization and performance marketing.
        My goal is to combine search optimization with
        modern web development to create high-performing
        digital experiences.
      </p>

      {/* Skills */}

      <div className="flex flex-wrap gap-3 mt-10">

        {skills.map((skill) => (

          <motion.span
            key={skill}
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            className="px-5 py-2 rounded-full bg-zinc-900 border border-zinc-700 hover:border-blue-500 hover:text-blue-400 transition duration-300 text-gray-300"
          >
            {skill}
          </motion.span>

        ))}

      </div>

      {/* Buttons */}

      <div className="flex flex-wrap gap-4 mt-10">

        <motion.a
          href="/Rahul-Sharma-Resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl text-white font-semibold"
        >
          <Download size={18} />
          Download Resume
        </motion.a>

        <motion.a
          href="mailto:rsav964@gmail.com"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 border border-zinc-700 hover:border-blue-500 px-8 py-3 rounded-xl text-white"
        >
          <Mail size={18} />
          Contact Me
        </motion.a>

      </div>
    </motion.div>
  );
};

export default AboutContent;