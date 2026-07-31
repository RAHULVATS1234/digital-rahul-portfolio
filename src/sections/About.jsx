import { motion } from "framer-motion";

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
      title: "Experience",
      value: "1+ Years",
    },
    {
      title: "Projects",
      value: "10+",
    },
    {
      title: "Services",
      value: "5+",
    },
    {
      title: "Happy Clients",
      value: "20+",
    },
  ];

  const skills = [
    "SEO",
    "Google Ads",
    "Meta Ads",
    "React",
    "Tailwind CSS",
    "Performance Marketing",
    "WordPress",
    "AI",
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
        viewport={{ once: true, amount: 0.2 }}
      >

        <SectionTitle
          title="About Me"
          subtitle="Who I Am"
        />

        {/* About Content */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">

          {/* Left Side */}

          <motion.div
            variants={fadeLeft}
            className="flex justify-center"
          >

            <div className="relative group">

              <div className="absolute -inset-2 rounded-3xl bg-blue-600/20 blur-xl group-hover:bg-blue-600/30 transition"></div>

              <img
                src={profile}
                alt="Rahul Sharma"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl border-4 border-blue-500 shadow-2xl transition duration-500 group-hover:scale-105"
              />

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div variants={fadeRight}>

            <span className="text-blue-500 uppercase tracking-[5px] font-semibold">
              About Me
            </span>

            <h2 className="text-5xl font-bold leading-tight mt-4 mb-8">
              Helping Businesses Grow Through
              <span className="text-blue-500">
                {" "}Digital Marketing
              </span>

              <br />

              & Modern Web Development.
            </h2>

            <p className="text-gray-400 leading-8 text-lg mb-6">
              I'm Rahul Sharma, a Digital Marketing Professional and
              React Developer passionate about helping businesses
              grow online. I specialize in SEO, Google Ads,
              Meta Ads and building modern responsive websites.
            </p>

            <p className="text-gray-400 leading-8 text-lg mb-10">
              My goal is to create websites and marketing strategies
              that improve visibility, generate leads and help
              businesses achieve long-term growth.
            </p>
                        {/* Skills */}

            <div className="flex flex-wrap gap-4 mb-10">

              {skills.map((skill) => (

                <motion.span
                  key={skill}
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                  }}
                  className="bg-zinc-900 border border-zinc-700 hover:border-blue-500 transition-all duration-300 px-5 py-2 rounded-full text-gray-300 cursor-pointer"
                >
                  {skill}
                </motion.span>

              ))}

            </div>

            {/* Resume Button */}

           <motion.a
  href="/Rahul-Sharma-Resume.pdf"
  download
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl text-white font-semibold"
>
  Download Resume
</motion.a>

          </motion.div>

        </div>

        {/* Stats Cards */}

        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
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
                {/* Why Work With Me */}

        <motion.div variants={fadeUp}>

          <SectionTitle
            title="Why Work With Me?"
            subtitle="My Strengths"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

            {/* Card 1 */}

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-zinc-900 border border-zinc-800 hover:border-blue-500 transition-all duration-300 rounded-2xl p-8"
            >

              <div className="text-5xl mb-6">
                🚀
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Performance Driven
              </h3>

              <p className="text-gray-400 leading-8">
                I build SEO-friendly websites and digital marketing
                strategies focused on generating real business growth,
                better visibility and higher conversions.
              </p>

            </motion.div>

            {/* Card 2 */}

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-zinc-900 border border-zinc-800 hover:border-blue-500 transition-all duration-300 rounded-2xl p-8"
            >

              <div className="text-5xl mb-6">
                💡
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Creative Problem Solver
              </h3>

              <p className="text-gray-400 leading-8">
                I combine Digital Marketing and React Development
                to create clean, modern and practical solutions
                for businesses and startups.
              </p>

            </motion.div>

            {/* Card 3 */}

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-zinc-900 border border-zinc-800 hover:border-blue-500 transition-all duration-300 rounded-2xl p-8"
            >

              <div className="text-5xl mb-6">
                🤝
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Client First
              </h3>

              <p className="text-gray-400 leading-8">
                I believe in clear communication,
                on-time delivery and building long-term
                relationships with every client.
              </p>

            </motion.div>

          </div>

        </motion.div>

      </motion.div>

    </section>
  );
};

export default About; 