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
      className="py-32 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white px-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background decoration - Blue Theme */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header - More Narrative */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Dibalik Kode dan Desain
          </h2>
          <p className="text-blue-300/80 text-lg">Mengenal lebih dekat perjalanan kreatif saya</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mt-4"></div>
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
            <div className="bg-slate-800/40 backdrop-blur-xl p-6 rounded-xl border border-slate-700 hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-400 mb-3">
                Siapa Saya?
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Saya adalah mahasiswa{" "}
                <span className="text-cyan-400 font-semibold">
                  Manajemen Informatika
                </span>{" "}
                yang berdedikasi dalam menciptakan solusi digital yang inovatif. 
                Dengan landasan teori yang kuat dan praktik langsung di pengembangan Web dan Mobile, 
                saya telah membangun berbagai proyek yang berfokus pada efisiensi.
              </p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-xl p-6 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                Filosofi Kerja
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Bagi saya, teknologi adalah alat untuk mempermudah hidup. Saya membangun sistem yang{" "}
                <span className="text-blue-400 font-semibold">tangguh</span>{" "}
                dan{" "}
                <span className="text-blue-300 font-semibold">scalable</span>,
                namun tetap mempertahankan estetika yang{" "}
                <span className="text-cyan-400 font-semibold">bersih</span> dan{" "}
                <span className="text-cyan-300 font-semibold">intuitif</span>.
              </p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-xl p-6 rounded-xl border border-slate-700 hover:border-blue-400/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-300 mb-3">
                Eksplorasi Saat Ini
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Saat ini saya sedang mendalami{" "}
                <span className="text-blue-400 font-semibold">Arsitektur Frontend</span>
                , integrasi sistem yang kompleks, serta metodologi{" "}
                <span className="text-cyan-400 font-semibold">User Experience</span>{" "}
                untuk menghadirkan produk yang mampu bersaing di industri global.
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
                className="group bg-slate-800/60 backdrop-blur-xl p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 text-center"
              >
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition">
                  {highlight.title}
                </h4>
                <p className="text-sm text-slate-400 group-hover:text-slate-300 transition">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats / Skills Overview - Blue Focused */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                8+
              </div>
              <p className="text-slate-300">Project Selesai</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                10+
              </div>
              <p className="text-slate-300">Teknologi Dikuasai</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                2+
              </div>
              <p className="text-slate-300">Tahun Belajar</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;