function ContactMe() {
  return (
    <section id="contact-me" className="scroll-mt-20 py-12 bg-gray-50">
      <div className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-lg space-y-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Get in Touch
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600">
          Open to opportunities, collaborations, or project feedback. I’d love
          to hear from you!
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-gray-700">
          <img
            src="/Flag_of_the_Philippines.svg"
            alt="Philippine Flag"
            className="h-5 w-5 object-contain"
          />
          <span>Philippines</span>
        </div>

        {/* Email & Phone */}
        <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-6 gap-4">
          <a
            href="mailto:dimalanta.jace@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
          >
            <img
              src="/email-1573-svgrepo-com.svg"
              alt="Email Icon"
              className="h-5 w-5 object-contain"
            />
            dimalanta.jace@gmail.com
          </a>

          <a
            href="tel:+639993179713"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
          >
            <img
              src="/phone-outgoing-svgrepo-com.svg"
              alt="Phone Icon"
              className="h-5 w-5 object-contain"
            />
            +63 999-317-9713
          </a>
        </div>

        {/* Social & Resume Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/ComfyJace"
            target="_blank"
            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jason-erwin-clyde-dimalanta"
            target="_blank"
            className="px-4 py-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
          >
            LinkedIn
          </a>
          <a
            href="/Jason-Dimalanta-Resume.pdf"
            download
            className="px-4 py-2 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 transition"
          >
            Resume
          </a>
        </div>

        {/* Status / Note */}
        <p className="text-center text-sm text-gray-500">
          Based in the Philippines · Open to remote work
        </p>
      </div>
    </section>
  );
}

export default ContactMe;
