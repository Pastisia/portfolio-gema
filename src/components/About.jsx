import { motion } from "framer-motion";

function About() {
  const highlights = [
    {
      icon: "🎓",
      title: "Education",
      description: "Mahasiswa Manajemen Informatika",
    },
    {
      icon: "💻",
      title: "Expertise",
      description: "Web & Mobile Development",
    },
    {
      icon: "🎨",
      title: "Design",
      description: "UI/UX & Graphic Design",
    },
    {
      icon: "🚀",
      title: "Focus",
      description: "User-Centric Solutions",
    },
  ];

  return (
    <motion.section
      id="about"
      className="py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-400 mb-3">
                Siapa Saya?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Saya adalah mahasiswa{" "}
                <span className="text-purple-400 font-semibold">
                  Manajemen Informatika
                </span>{" "}
                yang passionate dalam menciptakan solusi digital yang inovatif.
                Dengan pengalaman dalam pengembangan Web dan Mobile Application,
                saya telah berhasil membangun beberapa proyek profesional.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-purple-400 mb-3">
                What I Do
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Saya membangun sistem yang tidak hanya{" "}
                <span className="text-pink-400 font-semibold">powerful</span>{" "}
                dan{" "}
                <span className="text-blue-400 font-semibold">scalable</span>,
                tetapi juga memiliki tampilan yang{" "}
                <span className="text-purple-400 font-semibold">clean</span> dan{" "}
                <span className="text-pink-400 font-semibold">
                  user-friendly
                </span>
                . Fokus saya adalah menciptakan pengalaman pengguna yang luar
                biasa.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-xl border border-gray-700 hover:border-pink-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-pink-400 mb-3">
                Current Focus
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Saat ini saya terus mengembangkan kemampuan di{" "}
                <span className="text-blue-400 font-semibold">
                  Frontend Development
                </span>
                ,{" "}
                <span className="text-purple-400 font-semibold">
                  Backend Integration
                </span>
                , dan{" "}
                <span className="text-pink-400 font-semibold">
                  UI/UX Design
                </span>{" "}
                untuk menciptakan produk yang kompetitif dan berkualitas tinggi.
              </p>
            </div>
          </motion.div>

          {/* Right side - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 text-center"
              >
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition">
                  {highlight.title}
                </h4>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats / Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                5+
              </div>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                10+
              </div>
              <p className="text-gray-300">Technologies Mastered</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                2+
              </div>
              <p className="text-gray-300">Years Learning</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
