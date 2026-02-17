import { motion } from "framer-motion";
// Import semua ikon yang dibutuhkan
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiFlutter, 
  SiPhp, SiMysql, SiFigma, 
  SiGit, SiTailwindcss, SiCoreldraw, SiCodeigniter 
} from "react-icons/si";
import { FaDatabase, FaBootstrap } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <SiHtml5 />,
      color: "text-orange-500",
      description: "Markup Language",
    },
    {
      name: "CSS",
      icon: <SiCss3 />,
      color: "text-blue-500",
      description: "Styling Language",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "text-yellow-400",
      description: "Programming Language",
    },
    {
      name: "React JS",
      icon: <SiReact />,
      color: "text-cyan-400",
      description: "JavaScript Library",
    },
    {
      name: "Flutter",
      icon: <SiFlutter />,
      color: "text-blue-400",
      description: "Mobile Framework",
    },
    {
      name: "PHP",
      icon: <SiPhp />,
      color: "text-indigo-400",
      description: "Server Language",
    },
    {
      name: "CodeIgniter",
      icon: <SiCodeigniter />,
      color: "text-red-500",
      description: "PHP Framework",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      color: "text-blue-600",
      description: "Database Management",
    },
    {
      name: "SQL Server",
      icon: <FaDatabase />,
      color: "text-red-500",
      description: "Database System",
    },
    {
      name: "REST API",
      icon: <TbApi />, // Postman sering digunakan mewakili API
      color: "text-orange-500",
      description: "API Architecture",
    },
    {
      name: "Figma",
      icon: <SiFigma />,
      color: "text-pink-500",
      description: "Design Tool",
    },
    {
      name: "CorelDRAW",
      icon: <SiCoreldraw />,
      color: "text-green-500",
      description: "Vector Graphics Editor",
    },
    {
      name: "Git",
      icon: <SiGit />,
      color: "text-orange-600",
      description: "Version Control",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "text-cyan-500",
      description: "CSS Framework",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      color: "text-cyan-500",
      description: "CSS Framework",
    }
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
    <section id="skills" className="py-24 bg-slate-950 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-slate-400 mt-4 text-lg">
            Teknologi dan alat yang saya gunakan
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-4 rounded-2xl hover:bg-slate-800/80 hover:border-blue-500/50 transition-all duration-300 cursor-default flex items-center gap-5 group"
              variants={cardVariants}
            >
              {/* Icon Section */}
              <div className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>

              {/* Text Section */}
              <div className="flex-1">
                <h3 className="font-bold text-lg text-slate-100 group-hover:text-blue-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                <p className="text-sm text-slate-400">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;