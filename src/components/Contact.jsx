import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send email");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus(""), 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(""), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-b from-slate-900 via-slate-900 to-black text-white px-6 relative overflow-hidden"
    >
      {/* Background decoration - Updated to Blue/Cyan */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Mari Berkolaborasi
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Punya ide menarik atau ingin mendiskusikan proyek? Hubungi saya dan
            mari kita wujudkan sesuatu yang luar biasa bersama.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards - Updated Colors */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📧</div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a
              href="mailto:nugrohogemasatya@gmail.com"
              className="text-blue-400 hover:text-cyan-300 transition break-all text-sm"
            >
              nugrohogemasatya@gmail.com
            </a>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">💼</div>
            <h3 className="text-lg font-semibold mb-2">GitHub</h3>
            <a
              href="https://github.com/Pastisia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-blue-300 transition"
            >
              github.com/Pastisia
            </a>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20 group">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">⏱️</div>
            <h3 className="text-lg font-semibold mb-2">Response Time</h3>
            <p className="text-slate-300">Biasanya 11 jam</p>
          </div>
        </div>

        {/* Contact Form - Updated Input Focus Colors */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-slate-700 shadow-2xl">
          <h3 className="text-2xl font-bold mb-8 text-slate-100">Kirim Pesan</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-slate-300 group-hover:text-blue-400 transition"
                >
                  Nama Lengkap
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-slate-800/50 focus:shadow-lg focus:shadow-blue-500/20 transition-all duration-300"
                    placeholder="Siapa nama Anda?"
                  />
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                    👤
                  </div>
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-slate-300 group-hover:text-cyan-400 transition"
                >
                  Email Anda
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:bg-slate-800/50 focus:shadow-lg focus:shadow-cyan-500/20 transition-all duration-300"
                    placeholder="email@contoh.com"
                  />
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                    📧
                  </div>
                </div>
              </div>
            </div>

            {/* Subject */}
            <div className="group">
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2 text-slate-300 group-hover:text-blue-400 transition"
              >
                Subjek
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-slate-800/50 focus:shadow-lg focus:shadow-blue-500/20 transition-all duration-300"
                  placeholder="Apa topik pembicaraan Anda?"
                />
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                  💬
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="group">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-slate-300 group-hover:text-cyan-400 transition"
              >
                Pesan Anda
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:bg-slate-800/50 focus:shadow-lg focus:shadow-cyan-500/20 transition-all duration-300 resize-none"
                  placeholder="Ceritakan tentang ide atau pertanyaan Anda..."
                ></textarea>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Maksimal 5000 karakter
              </p>
            </div>

            {/* Submit Button - Updated to Blue/Cyan */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 disabled:from-slate-700 disabled:to-slate-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin text-xl">⚙️</span>
                  Mengirim...
                </>
              ) : (
                <>✈️ Kirim Pesan</>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 bg-emerald-900/30 border border-emerald-500/50 text-emerald-200 rounded-lg animate-fade-in flex items-center gap-2 backdrop-blur-md">
                <span className="text-xl">✓</span>
                <div>
                  <p className="font-semibold">Pesan berhasil dikirim!</p>
                  <p className="text-sm text-emerald-300/80">
                    Terima kasih. Saya akan merespon dalam 24 jam.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-rose-900/30 border border-rose-500/50 text-rose-200 rounded-lg animate-fade-in flex items-center gap-2 backdrop-blur-md">
                <span className="text-xl">✗</span>
                <div>
                  <p className="font-semibold">Gagal mengirim pesan</p>
                  <p className="text-sm text-rose-300/80">
                    Silakan coba lagi atau hubungi langsung via email.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
}

export default Contact;