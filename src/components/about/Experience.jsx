import { motion } from "framer-motion";

const skills = [
  "Technical SEO",
  "On-Page SEO",
  "Keyword Research",
  "Website Optimization",
  "WordPress",
  "React Development",
  "Google Analytics 4",
  "Microsoft Clarity",
];

const Experience = () => {
  return (
    <section className="mt-28">

      <div className="text-center">

        <p className="text-blue-500 uppercase tracking-[6px]">
          Experience
        </p>

        <h2 className="text-5xl font-bold text-white mt-4">
          My Professional Journey
        </h2>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-16 bg-zinc-900 border border-zinc-800 hover:border-blue-500 rounded-3xl p-10 transition duration-300"
      >

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          <div>

            <h3 className="text-3xl font-bold text-white">
              SEO Executive
            </h3>

            <p className="text-blue-500 text-lg mt-2">
              W3Era Web Technology Pvt. Ltd.
            </p>

          </div>

          <div>

            <span className="inline-flex bg-blue-600/20 text-blue-400 border border-blue-500 px-5 py-2 rounded-full">
              2026 – Present
            </span>

          </div>

        </div>

        {/* Description */}

        <p className="text-gray-400 leading-8 mt-8 text-lg">

          Working on live client projects focused on
          Technical SEO, On-Page SEO, website optimization,
          WordPress development and analytics. I collaborate
          with cross-functional teams to improve website
          visibility, performance and user experience.

        </p>

        {/* Skills */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

          {skills.map((skill) => (

            <motion.div
              key={skill}
              whileHover={{
                scale: 1.04,
              }}
              className="bg-black border border-zinc-700 hover:border-blue-500 rounded-xl px-4 py-4 text-center text-gray-300 transition duration-300"
            >
              {skill}
            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  );
};

export default Experience;