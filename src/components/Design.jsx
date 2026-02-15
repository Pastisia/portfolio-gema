    import { motion } from "framer-motion";
import GlareHover from "./GlareHover";

function Design() {
  const designWorks = [
    {
      title: "E-Commerce Website Design",
      description:
        "Modern & responsive web design untuk platform e-commerce dengan focus pada user experience.",
      category: "Web Design",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      tools: ["Figma", "Adobe XD", "UI/UX"],
    },
    {
      title: "Mobile App UI Kit",
      description:
        "Comprehensive UI kit untuk mobile application dengan konsisten design system dan component library.",
      category: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      tools: ["Figma", "Adobe XD"],
    },
    {
      title: "Brand Identity Design",
      description:
        "Complete brand identity termasuk logo, color palette, dan typography guidelines untuk startup.",
      category: "Graphic Design",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      tools: ["Adobe Illustrator", "Photoshop"],
    },
    {
      title: "Landing Page Design",
      description:
        "High-converting landing page design dengan modern aesthetic dan clear call-to-action.",
      category: "Web Design",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      tools: ["Figma", "Adobe XD"],
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
    <section id="design" className="py-24 bg-gray-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Design Works
          </h2>
          <p className="text-gray-400 mt-2">
            Web Design, UI/UX, & Graphic Design Projects
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {designWorks.map((work, index) => (
            <motion.div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              variants={cardVariants}
            >
              <div className="relative overflow-hidden h-64 bg-gray-700">
                <GlareHover
                  className="w-full h-full"
                  glareColor="#ffffff"
                  glareOpacity={0.2}
                  glareAngle={-45}
                  glareSize={200}
                  transitionDuration={700}
                  style={{ width: "100%", height: "100%" }}
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </GlareHover>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-purple-600/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold border border-purple-400/30">
                    {work.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-300 group-hover:text-purple-200 transition">
                  {work.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {work.description}
                </p>

                {/* Tools Used */}
                <div className="flex flex-wrap gap-2">
                  {work.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-400/30 hover:border-purple-400/60 hover:bg-purple-500/30 transition duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <p className="text-gray-400 mb-4">
            Ingin melihat lebih banyak design work?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Hubungi Saya
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Design;
