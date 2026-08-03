import { motion } from "framer-motion";

const cards = [
  {
    emoji: "🚀",
    title: "Performance Driven",
    description:
      "I build fast, SEO-friendly websites focused on rankings, user experience and business growth.",
  },
  {
    emoji: "💡",
    title: "Creative Problem Solver",
    description:
      "I enjoy solving technical SEO and frontend challenges with practical and scalable solutions.",
  },
  {
    emoji: "🤝",
    title: "Professional Approach",
    description:
      "I believe in clear communication, timely delivery and building long-term client relationships.",
  },
];

const WhyWork = () => {
  return (
    <section className="mt-28">

      <div className="text-center">

        <p className="text-blue-500 uppercase tracking-[6px]">
          Why Choose Me
        </p>

        <h2 className="text-5xl font-bold text-white mt-4">
          Why Work With Me?
        </h2>

      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">

        {cards.map((card) => (

          <motion.div
            key={card.title}
            whileHover={{
              y: -10,
            }}
            className="bg-zinc-900 border border-zinc-800 hover:border-blue-500 rounded-2xl p-8 transition duration-300"
          >

            <div className="text-5xl">
              {card.emoji}
            </div>

            <h3 className="text-2xl font-bold mt-6">
              {card.title}
            </h3>

            <p className="text-gray-400 leading-8 mt-4">
              {card.description}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default WhyWork;