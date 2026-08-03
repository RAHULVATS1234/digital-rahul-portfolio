import { motion } from "framer-motion";

const stats = [
  {
    value: "15+",
    title: "Projects Completed",
  },
  {
    value: "12+",
    title: "Technologies",
  },
  {
    value: "8+",
    title: "SEO Tools",
  },
  {
    value: "100%",
    title: "Dedication",
  },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

      {stats.map((item) => (

        <motion.div
          key={item.title}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          className="bg-zinc-900 border border-zinc-800 hover:border-blue-500 rounded-2xl p-8 text-center transition duration-300"
        >

          <h2 className="text-4xl font-bold text-blue-500">
            {item.value}
          </h2>

          <p className="text-gray-400 mt-3">
            {item.title}
          </p>

        </motion.div>

      ))}

    </div>
  );
};

export default Stats;