import { motion } from "framer-motion";

function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: "fab fa-html5",
      color: "text-orange-500",
      description: "Markup Language",
    },
    {
      name: "CSS",
      icon: "fab fa-css3-alt",
      color: "text-blue-500",
      description: "Styling Language",
    },
    {
      name: "JavaScript",
      icon: "fab fa-js-square",
      color: "text-yellow-400",
      description: "Programming Language",
    },
    {
      name: "React JS",
      icon: "fab fa-react",
      color: "text-cyan-400",
      description: "JavaScript Library",
    },
    {
      name: "Flutter",
      icon: "fab fa-flutter",
      color: "text-blue-600",
      description: "Mobile Framework",
    },
    {
      name: "PHP",
      icon: "fab fa-php",
      color: "text-indigo-500",
      description: "Server Language",
    },
    {
      name: "MySQL",
      icon: "fas fa-database",
      color: "text-orange-600",
      description: "Database Management",
    },
    {
      name: "SQL Server",
      icon: "fas fa-server",
      color: "text-red-600",
      description: "Database System",
    },
    {
      name: "REST API",
      icon: "fas fa-cube",
      color: "text-purple-500",
      description: "API Architecture",
    },
    {
      name: "Figma",
      icon: "fab fa-figma",
      color: "text-pink-500",
      description: "Design Tool",
    },
    {
      name: "Git",
      icon: "fab fa-git-alt",
      color: "text-red-500",
      description: "Version Control",
    },
    {
      name: "Tailwind CSS",
      icon: "fab fa-css3",
      color: "text-cyan-500",
      description: "CSS Framework",
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
    <section id="skills" className="py-24 bg-gray-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-gray-400 mt-2">
            Skills and technologies I'm proficient in
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 px-3 py-2 rounded-xl hover:bg-gray-700 transition duration-300 cursor-pointer flex items-center gap-4 group"
              variants={cardVariants}
            >
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
              />
              {/* Icon Section */}
              <div className="flex-shrink-0 px-3 py-2 bg-gray-700 rounded-lg">
                <i
                  className={`${skill.icon} text-4xl ${skill.color} group-hover:scale-110 transition duration-300`}
                ></i>
              </div>

              {/* Text Section */}
              <div className="flex-1">
                <h3 className="font-bold text-lg text-white group-hover:text-blue-400 transition duration-300">
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-400 mt-0">
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
