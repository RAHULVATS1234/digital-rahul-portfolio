import { motion } from "framer-motion";
import { Download } from "lucide-react";

import {
  containerVariants,
  fadeLeft,
  fadeRight,
  fadeUp,
} from "../animations/motion";

import profile from "../assets/images/profile.png";

import InfoCard from "../components/ui/InfoCard";
import SectionTitle from "../components/ui/SectionTitle";

const About = () => {

  const stats = [
    {
      title: "Projects",
      value: "15+",
    },
    {
      title: "Technologies",
      value: "12+",
    },
    {
      title: "SEO Tools",
      value: "8+",
    },
    {
      title: "Learning",
      value: "Every Day",
    },
  ];

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

  return (

    <section
      id="about"
      className="bg-black text-white py-28 px-6"
    >

      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <SectionTitle
          title="About Me"
          subtitle="Who I Am"
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            variants={fadeLeft}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute -inset-3 rounded-3xl bg-blue-600/20 blur-3xl"></div>

              <img
                src={profile}
                alt="Rahul Sharma"
                className="relative w-80 lg:w-96 rounded-3xl border-4 border-blue-500 shadow-2xl"
              />

              <div className="absolute -bottom-6 -right-6 bg-zinc-900 border border-blue-500 rounded-2xl px-6 py-4">

                <h3 className="text-3xl font-bold text-blue-500">
                  15+
                </h3>

                <p className="text-gray-400 text-sm">
                  Projects Completed
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div variants={fadeRight}>

            <p className="uppercase tracking-[6px] text-blue-500 font-semibold">

              ABOUT RAHUL

            </p>

            <h2 className="text-5xl font-bold leading-tight mt-5">

              SEO Executive

              <span className="text-blue-500">

                {" "}& React Developer

              </span>

            </h2>

            <p className="mt-8 text-gray-400 leading-8 text-lg">

              Hi, I'm Rahul Sharma.

              I'm passionate about building modern websites
              and helping businesses grow through Technical SEO,
              React Development, WordPress, Google Analytics 4,
              and Performance Marketing.

            </p>

            <p className="mt-6 text-gray-400 leading-8 text-lg">

              I enjoy creating responsive websites,
              improving search visibility,
              optimizing performance,
              and learning modern web technologies every day.

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

                  className="px-5 py-2 rounded-full bg-zinc-900 border border-zinc-700 hover:border-blue-500 transition"

                >

                  {skill}

                </motion.span>

              ))}

            </div>

            {/* Resume */}

            <motion.a

              href="/Rahul-Sharma-Resume.pdf"

              download

              whileHover={{
                scale: 1.05,
              }}

              whileTap={{
                scale: 0.95,
              }}

              className="inline-flex items-center gap-3 mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold"

            >

              <Download size={20} />

              Download Resume

            </motion.a>

          </motion.div>

        </div>
                {/* Statistics */}

        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-24"
        >
          {stats.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{
                y: -8,
              }}
            >
              <InfoCard
                title={item.title}
                value={item.value}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Journey */}

        <motion.div
          variants={fadeUp}
          className="mt-32"
        >
          <SectionTitle
            title="My Journey"
            subtitle="Career Path"
          />

          <div className="max-w-5xl mx-auto mt-16 space-y-8">

            {/* Timeline Item */}

            <motion.div
              whileHover={{
                x: 10,
              }}
              className="bg-zinc-900 border border-zinc-800 hover:border-blue-500 rounded-2xl p-8 transition"
            >

              <p className="text-blue-500 font-semibold mb-2">
                2025 – Present
              </p>

              <h3 className="text-2xl font-bold">
                SEO Executive
              </h3>

              <p className="text-gray-400 mt-4 leading-8">
                Working on Technical SEO, On-Page SEO,
                website optimization, content optimization,
                keyword research and analytics.
              </p>

            </motion.div>

            {/* Timeline Item */}

            <motion.div
              whileHover={{
                x: 10,
              }}
              className="bg-zinc-900 border border-zinc-800 hover:border-blue-500 rounded-2xl p-8 transition"
            >

              <p className="text-blue-500 font-semibold mb-2">
                Frontend Development
              </p>

              <h3 className="text-2xl font-bold">
                React Developer
              </h3>

              <p className="text-gray-400 mt-4 leading-8">
                Building modern responsive websites using
                React, Vite, Tailwind CSS and JavaScript
                while focusing on performance and clean UI.
              </p>

            </motion.div>

            {/* Timeline Item */}

            <motion.div
              whileHover={{
                x: 10,
              }}
              className="bg-zinc-900 border border-zinc-800 hover:border-blue-500 rounded-2xl p-8 transition"
            >

              <p className="text-blue-500 font-semibold mb-2">
                Continuous Learning
              </p>

              <h3 className="text-2xl font-bold">
                Always Improving
              </h3>

              <p className="text-gray-400 mt-4 leading-8">
                Continuously learning SEO, React,
                AI tools, Google Analytics,
                Microsoft Clarity and modern
                web technologies to improve my skills.
              </p>

            </motion.div>

          </div>

        </motion.div>
                {/* Why Work With Me */}

        <motion.div
          variants={fadeUp}
          className="mt-32"
        >

          <SectionTitle
            title="Why Work With Me?"
            subtitle="My Strengths"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {/* Card 1 */}

            <motion.div
              whileHover={{
                y: -10,
              }}
              className="bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-blue-500 p-8 transition"
            >

              <div className="text-5xl mb-6">
                🚀
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Performance Focused
              </h3>

              <p className="text-gray-400 leading-8">
                Every website I build is optimized
                for speed, user experience and SEO.
                My focus is on creating solutions
                that deliver measurable business results.
              </p>

            </motion.div>

            {/* Card 2 */}

            <motion.div
              whileHover={{
                y: -10,
              }}
              className="bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-blue-500 p-8 transition"
            >

              <div className="text-5xl mb-6">
                💡
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Continuous Learning
              </h3>

              <p className="text-gray-400 leading-8">
                I regularly improve my knowledge of
                SEO, React, AI tools, analytics and
                modern frontend development to stay
                updated with industry trends.
              </p>

            </motion.div>

            {/* Card 3 */}

            <motion.div
              whileHover={{
                y: -10,
              }}
              className="bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-blue-500 p-8 transition"
            >

              <div className="text-5xl mb-6">
                🤝
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Professional Approach
              </h3>

              <p className="text-gray-400 leading-8">
                I believe in clear communication,
                timely delivery and building
                long-term relationships with
                clients through quality work.
              </p>

            </motion.div>

          </div>

        </motion.div>

      </motion.div>

    </section>

  );
};

export default About;