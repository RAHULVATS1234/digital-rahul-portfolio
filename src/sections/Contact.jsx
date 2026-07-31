import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import SectionTitle from "../components/ui/SectionTitle";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
      

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message!");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Contact Me"
          subtitle="Let's Build Something Amazing"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Let's Talk 👋
            </h2>

            <p className="text-gray-400 leading-8 mb-10">
              Whether you need SEO, Website Development,
              Google Ads or Meta Ads, I'm always happy
              to discuss new opportunities and exciting
              projects.
            </p>

            <div className="space-y-6">

              <motion.a
                href="tel:+918607142468"
                whileHover={{ x: 10 }}
                className="flex items-center gap-5 bg-zinc-900 border border-zinc-800 hover:border-blue-500 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-2xl">
                  📞
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    Phone
                  </h3>

                  <p className="text-gray-400">
                    +91 8607142468
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:rsav964@gmail.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-5 bg-zinc-900 border border-zinc-800 hover:border-blue-500 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-2xl">
                  📧
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    Email
                  </h3>

                  <p className="text-gray-400">
                    rsav964@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-5 bg-zinc-900 border border-zinc-800 hover:border-blue-500 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-2xl">
                  📍
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    Location
                  </h3>

                  <p className="text-gray-400">
                    Jaipur, Rajasthan, India
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Side */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 space-y-6"
          >

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition-all"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition-all"
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500 transition-all"
            />

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500 resize-none transition-all"
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl text-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </motion.button>

          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;