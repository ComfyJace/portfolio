function AboutMe() {
  return (
    <section id="about-me" className="scroll-mt-20 py-10 bg-gray-50">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-10">About Me</h1>

      {/* Content container */}
      <div className="md:flex md:items-start gap-8 max-w-5xl mx-auto px-6">
        {/* Image column */}
        <div className="md:w-1/4 flex flex-col items-center mb-6 md:mb-0">
          <img
            src="2x2.jpg"
            alt="Jason Dimalanta"
            className="rounded-full border-4 border-primary shadow-lg mb-4 w-40 h-40 object-cover"
          />
          <p className="text-sm text-gray-600 text-center">Yes, this is me</p>
        </div>

        {/* Text column */}
        <div className="md:w-3/4 space-y-5 text-gray-800 text-justify">
          <p>
            Hi, I’m <strong>Jason Erwin Clyde V. Dimalanta</strong> — a
            developer driven by curiosity, problem-solving, and building things
            that actually work. I have always been drawn to understanding how
            systems function under the hood and how thoughtful engineering
            decisions can turn ideas into reliable, real-world solutions.
          </p>

          <p>
            I specialize in{" "}
            <strong>software, web, and machine learning development</strong>,
            with a strong focus on transforming ideas into clean, functional,
            and scalable systems. I enjoy working across the stack, learning new
            technologies quickly, and refining implementations until they are
            efficient and intuitive. Whether it’s architecting backend
            workflows, polishing frontend interactions, or training machine
            learning models, I approach development with both technical depth
            and practical usability.
          </p>

          <p>
            I am a <strong>graduate of De La Salle University</strong>, earning
            a degree in{" "}
            <strong>Computer Science Major in Software Technology</strong>,
            graduating with a <strong>GPA of 3.0</strong>. My academic
            background strengthened my foundation in problem-solving, systems
            thinking, and analytical reasoning, while project-based coursework
            and my undergraduate thesis allowed me to apply theory to complex,
            real-world problems.
          </p>

          <p>
            What sets me apart is my willingness to{" "}
            <strong>dive deep into challenges</strong>, adapt quickly, and
            continuously improve both my skills and work. I don’t just write
            code — I think critically about usability, performance, edge cases,
            and long-term maintainability. I value clear communication,
            thoughtful design, and software that remains reliable as it grows.
          </p>

          <p>
            Whether I’m developing a web application, automating a workflow, or
            experimenting with machine learning models, I take full ownership of
            my projects and remain intentional about quality at every stage. I’m
            currently looking to grow with a team where I can contribute
            meaningfully, learn from real-world challenges, and create lasting
            impact through technology.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
