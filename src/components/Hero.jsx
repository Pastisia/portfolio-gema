import { motion } from "framer-motion";
import GradientText from "./GradientText";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="min-h-screen pt-12 md:pt-20 flex items-center justify-center bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white px-6 relative overflow-hidden">
      {/* Background decoration - Unified Blue Theme */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Content */}
        <motion.div
          className="flex ps-8 flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-lg font-semibold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
          >
            Hi, I'm{" "}
            <GradientText
              // Blue shades: Sky Blue, Royal Blue, and Cyan
              colors={["#60A5FA", "#2563EB", "#22D3EE"]}
              animationSpeed={8}
              showBorder={false}
              className="inline-block"
            >
              Gema Satya Nugroho
            </GradientText>
          </motion.h1>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="space-y-2 mb-8">
            <p className="text-2xl md:text-3xl font-semibold text-blue-400">
              Developer × Designer
            </p>
            <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
              Mahasiswa Manajemen Informatika yang passion dalam membangun solusi digital berkualitas tinggi. Experienced dalam Web Development, Mobile Apps, dan Digital Design.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center gap-2"
            >
              🚀 View My Work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-500/50 text-blue-300 hover:text-white hover:bg-blue-500/10 rounded-lg font-bold transition-all duration-300 backdrop-blur-sm"
            >
              💬 Get in Touch
            </a>
          </motion.div>

          {/* Quick Stats - Monochromatic Blue */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-8 text-sm md:text-base"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">💼</span>
              <div>
                <p className="font-semibold text-blue-300">8+</p>
                <p className="text-slate-400">Projects</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              <div>
                <p className="font-semibold text-cyan-300">Design & Dev</p>
                <p className="text-slate-400">Full Stack</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <div>
                <p className="font-semibold text-indigo-300">Always</p>
                <p className="text-slate-400">Learning</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          className="flex justify-center items-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-80 h-96 group">
            {/* Animated border - Blue shades */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-300 animate-pulse"></div>

            {/* Image container */}
            <div className="relative w-full h-full bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 group-hover:border-blue-500/50 transition-all duration-300">
              <img
                src="./assets/Projects/ProfilePicture.png"
                alt="Profile"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-6 right-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✨ Available
              </motion.div>
            </div>

            {/* Decorative elements - Pure Blue/Cyan */}
            <motion.div
              className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-12 -left-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            ></motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-slate-400 text-sm mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-blue-400 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
        </div>
      </motion.div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

export default Hero;