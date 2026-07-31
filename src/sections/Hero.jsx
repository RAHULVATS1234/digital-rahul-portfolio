import { Download } from "lucide-react";


const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black flex items-center justify-center pt-24"
    >
      <div className="text-center px-4">
        <p className="text-blue-500 uppercase tracking-[8px] mb-4">
          Digital Marketing Expert
        </p>

        <h1 className="text-6xl md:text-8xl font-bold text-white">
          Digital Rahul 🚀
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          Helping businesses grow with SEO, Google Ads, Meta Ads,
          Website Development and Performance Marketing.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-white font-semibold transition"
          >
            Hire Me
          </a>

          <a
            href="#portfolio"
            className="border border-white px-8 py-3 rounded-lg text-white hover:bg-white hover:text-black transition"
          >
            View Portfolio
          </a>

          <a
  href="/Rahul-Sharma-Resume.pdf"
  download
  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg text-white font-semibold transition"
>
  <Download size={20} />
  Download Resume
</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;