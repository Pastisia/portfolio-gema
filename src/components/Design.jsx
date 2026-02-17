import { motion } from "framer-motion";
import GlareHover from "./GlareHover";

function Design() {
  const designWorks = [
    {
      title: "Web Design Carwash ",
      description:
        "Modern & responsive web design untuk platform e-commerce dengan fokus pada user experience.",
      category: "UI/UX Design",
      image:
        "./assets/Projects/Design-WebCarwash.png",
      tools: ["Figma"],
    },
    {
      title: "Mobile App HunianID",
      description:
        "Comprehensive UI kit untuk mobile application dengan consistent design system dan component library.",
      category: "UI/UX Design",
      image:
        "./assets/Projects/Design-HunianID.png",
      tools: ["Figma"],
    },
    {
      title: "Web Payroll Design",
      description:
        "Complete brand identity termasuk logo, color palette, dan typography guidelines untuk startup.",
      category: "UI/UX Design",
      image:
        "./assets/Projects/Design-WebSirojul.png",
      tools: ["Figma"],
    },
    {
      title: "Design ID Card",
      description:
        "High-converting landing page design dengan modern aesthetic dan clear call-to-action.",
      category: "Graphic Design",
      image:
        "./assets/Projects/Design-Idcard1.png",
      tools: ["CorelDraw"],
    },
    {
      title: "Design Poster Makanan",
      description:
        "High-converting landing page design dengan modern aesthetic dan clear call-to-action.",
      category: "Graphic Design",
      image:
        "./assets/Projects/Design-PosterMakanan.png",
      tools: ["CorelDraw"],
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
    <section id="design" className="py-24 bg-slate-950 text-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header - Narrated Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Karya Visual & Antarmuka
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            Eksplorasi estetika dalam Web Design, UI/UX, dan Identitas Visual yang berpusat pada kenyamanan pengguna.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {designWorks.map((work, index) => (
            <motion.div
              key={index}
              className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              variants={cardVariants}
            >
              <div className="relative overflow-hidden h-80 bg-slate-800">
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
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </GlareHover>

                {/* Category Badge - Blue/Cyan Theme */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-600/20 backdrop-blur-md text-blue-700 rounded-full text-xs font-semibold border border-blue-700/30">
                    {work.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-blue-400 transition">
                  {work.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {work.description}
                </p>

                {/* Tools Used - Monochromatic Blue */}
                <div className="flex flex-wrap gap-2">
                  {work.tools.map((tool, i) => (
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

        {/* Call to Action - Blue Style */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <p className="text-slate-400 mb-6">
            Ingin berkolaborasi atau melihat portofolio desain lengkap?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20"
          >
            Mulai Diskusi Projek
            <span className="text-xl">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Design;