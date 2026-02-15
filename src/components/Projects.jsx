import { motion } from "framer-motion";
import GlareHover from "./GlareHover";

function Projects() {
  const projects = [
    {
      title: "RGistro E-Commerce",
      description:
        "Website e-commerce yang menjual t-shirt dengan fitur search, cart, dan manajemen produk menggunakan PHP & MySQL.",
      tech: ["PHP", "MySQL", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=300&fit=crop",
    },
    {
      title: "Booking Lapangan Futsal",
      description:
        "Aplikasi Flutter untuk booking lapangan futsal dengan sistem login, booking, dan riwayat booking terintegrasi API.",
      tech: ["Flutter", "REST API", "MySQL"],
      image:
        "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=300&fit=crop",
    },
    {
      title: "Sistem Informasi Akademik",
      description:
        "Website akademik dengan fitur login mahasiswa, absensi per pertemuan, dan manajemen nilai.",
      tech: ["PHP", "SQL Server"],
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=300&fit=crop",
    },
    {
      title: "Website SPMB Sekolah",
      description:
        "Website penerimaan siswa baru dengan fitur berita dan pendaftaran online.",
      tech: ["HTML", "CSS", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ac7b67?w=500&h=300&fit=crop",
    },
  ];

  // Animation variants
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
    <section id="projects" className="py-24 bg-gray-800 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Programming Projects
          </h2>
          <p className="text-gray-400 mt-2">
            Web & Mobile Applications I've Developed
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 overflow-hidden hover:scale-105 transition duration-300 shadow-lg group p-4 rounded-xl"
              variants={cardVariants}
            >
              <div className="mb-4 rounded-lg overflow-hidden">
                <GlareHover
                  className="w-full h-40 md:h-40"
                  glareColor="#ffffff"
                  glareOpacity={0.3}
                  glareAngle={-45}
                  glareSize={220}
                  transitionDuration={700}
                  style={{ width: "100%", height: "160px", borderRadius: "0" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </GlareHover>
              </div>

              {/* Content Section */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-xs leading-relaxed">
                  {project.description}
                </p>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-400/30 hover:border-blue-400/60 hover:bg-blue-500/30 transition duration-300"
                    >
                      {tech}
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
