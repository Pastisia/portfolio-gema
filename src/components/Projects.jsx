import { motion } from "framer-motion";
import GlareHover from "./GlareHover";

function Projects() {
  const projects = [
    {
      title: "RGistro E-Commerce",
      description:
        "Platform belanja online khusus t-shirt dengan integrasi sistem pencarian, keranjang belanja, dan manajemen inventaris.",
      category: "Web Development", // Menambahkan kategori agar sama dengan kartu Design
      tech: ["PHP", "MySQL", "Bootstrap"],
      image:
        "./assets/Projects/Project-Rgistro.png",
    },
    {
      title: "Booking Lapangan Futsal",
      description:
        "Aplikasi mobile berbasis Flutter untuk reservasi lapangan secara real-time dengan manajemen riwayat booking.",
      category: "Mobile Apps",
      tech: ["Flutter", "REST API", "MySQL"],
      image:
        "./assets/Projects/Project-Sportygo.jpg",
    },
    {
      title: "Sistem Informasi Akademik",
      description:
        "Dashboard manajemen pendidikan untuk absensi mahasiswa dan pengolahan nilai yang terstruktur.",
      category: "Web System",
      tech: ["PHP", "CodeIgniter", "MySql"],
      image:
        "./assets/Projects/Project-Akademik.png",
    },
    {
      title: "Website Profile Sekolah",
      description:
        "Portal pendaftaran siswa baru yang informatif dengan fitur publikasi berita dan formulir pendaftaran digital.",
      category: "Web Development",
      tech: ["PHP", "Bootstrap", "MySQL", "CodeIgniter"],
      image:
        "./assets/Projects/Project-ProfileSekolah.png",
    },
    {
      title: "Website Pemesanan Tiket Kereta",
      description:
        "Portal pendaftaran siswa baru yang informatif dengan fitur publikasi berita dan formulir pendaftaran digital.",
      category: "Frontend",
      tech: ["PHP", "Bootstrap", "MySQL"],
      image:
        "./assets/Projects/Project-Tiketku.png",
    },
  ];

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-24 bg-slate-950 text-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Implementasi Kode & Solusi
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            Kumpulan aplikasi web dan mobile yang dibangun dengan fokus pada fungsionalitas dan skalabilitas.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Projects Grid - Menggunakan layout yang sama dengan Design.jsx */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              variants={cardVariants}
            >
              {/* Image Container - Identik dengan Design Card */}
              <div className="relative overflow-hidden h-96 bg-slate-800">
                <GlareHover
                  className="w-full h-full"
                  glareColor="#3b82f6"
                  glareOpacity={0.15}
                  glareAngle={-45}
                  glareSize={250}
                  transitionDuration={700}
                  style={{ width: "100%", height: "100%" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </GlareHover>

                {/* Category Badge - Sekarang muncul juga di Programming Projects */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-600/20 backdrop-blur-md text-blue-700 rounded-full text-xs font-semibold border border-blue-700/30">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-blue-400 transition">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed min-h-[60px]">
                  {project.description}
                </p>

                {/* Tech Tags - Menggunakan gaya kotak yang sama dengan Design Card */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-800 text-slate-300 rounded-md text-xs font-medium border border-slate-700 hover:border-blue-400/60 hover:text-blue-300 transition duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;