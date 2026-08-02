import { Download, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}

        <div className="inline-flex items-center border border-blue-500/40 bg-blue-500/10 px-5 py-2 rounded-full mb-8">
          <span className="text-blue-400 text-sm font-medium tracking-wide">
            SEO Executive • WordPress Developer • React Developer
          </span>
        </div>

        {/* Heading */}

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Hi, I'm
          <span className="text-blue-500"> Rahul Sharma</span>
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold text-white mt-5">
          I Build SEO-Friendly Websites
          <br />
          That Drive Real Results.
        </h2>

        {/* Description */}

        <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-400 leading-8">
          I'm an SEO Executive and React Developer specializing in Technical SEO, WordPress, React, Google Analytics 4, Microsoft Clarity, and responsive website development. I help businesses improve their online visibility through SEO-driven strategies and high-performance websites.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <a
            href="#contact"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-white font-semibold transition duration-300"
          >
            Hire Me
            <ArrowRight size={18} />
          </a>

          <a
            href="#portfolio"
            className="border border-white px-8 py-3 rounded-lg text-white hover:bg-white hover:text-black transition duration-300"
          >
            View Projects
          </a>

          <a
            href="/Rahul-Sharma-Resume.pdf"
            download
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg text-white font-semibold transition duration-300"
          >
            <Download size={18} />
            Download Resume
          </a>

        </div>

        {/* Tech Stack */}

        <div className="mt-16 flex flex-wrap justify-center gap-3">

          {[
            "React",
            "WordPress",
            "SEO",
            "GA4",
            "Clarity",
            "Tailwind CSS",
            "Git",
            "Vercel",
          ].map((tech) => (
            <span
              key={tech}
              className="border border-gray-700 px-4 py-2 rounded-full text-sm text-gray-300 hover:border-blue-500 hover:text-blue-400 transition"
            >
              {tech}
            </span>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Hero;