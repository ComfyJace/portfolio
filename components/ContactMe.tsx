function ContactMe() {
  return (
    <section id="contact-me" className="scroll-mt-20">
      <div className="contact-me p-6 border rounded-lg space-y-4">
        <h2 className="text-xl font-semibold">Contact</h2>

        <p className="text-sm text-gray-700">
          Open to opportunities, collaborations, or project feedback.
        </p>

        <div className="space-y-3">
          <div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">Located in the Philippines</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">Email:</span>
              <a
                href="mailto:dimalanta.jace@gmail.com"
                className="text-gray-800"
              >
                dimalanta.jace@gmail.com
              </a>
              <span className="text-sm text-gray-600">Phone</span>
              <span className="text-blue-600 underline">+63 999-317-9713</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4 text-sm pt-2">
          <a href="https://github.com/yourusername" target="_blank">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">
            LinkedIn
          </a>
          <a href="/Jason-Dimalanta-Resume.pdf" download>
            Resume
          </a>
        </div>

        <p className="text-xs text-gray-500">
          Based in the Philippines · Open to remote work
        </p>
      </div>
    </section>
  );
}

export default ContactMe;
