import { motion } from "framer-motion";
import profile from "../../assets/images/profile.png";

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <div className="relative group">

        {/* Blue Glow */}

        <div className="absolute -inset-3 rounded-3xl bg-blue-600/20 blur-3xl group-hover:bg-blue-600/30 transition duration-500"></div>

        {/* Profile Image */}

        <img
          src={profile}
          alt="Rahul Sharma"
          className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl border-4 border-blue-500 shadow-2xl transition duration-500 group-hover:scale-105"
        />

        {/* Floating Badge */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="absolute -bottom-5 -right-5 bg-zinc-900 border border-blue-500 rounded-2xl px-6 py-4 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-blue-500">
            15+
          </h3>

          <p className="text-gray-300 text-sm">
            Projects Completed
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default ProfileCard;