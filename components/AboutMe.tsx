function AboutMe() {
  return (
    <section id="about-me" className="scroll-mt-20">
      <h1 className="text-2xl text-center">About Me</h1>
      <div className="md:flex gap-6 mt-4">
        <div className="w-1/4">
          <img src={"2x2.jpg"}></img>
          <p> Yes this is me</p>
        </div>
        <div className="space-y-2 w-3/4 text-justify">
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
            both efficient and intuitive to use. Whether it’s architecting
            backend workflows, polishing frontend interactions, or training and
            evaluating machine learning models, I approach development with a
            balance of technical depth and practical usability.
          </p>

          <p>
            I am a <strong>graduate of De La Salle University</strong>, where I
            earned my degree in{" "}
            <strong>Computer Science Major in Software Technology</strong>,
            graduating with a <strong>GPA of 3.0</strong>. My academic
            background strengthened my foundation in problem-solving, systems
            thinking, and analytical reasoning, while project-based coursework
            and my undergraduate thesis allowed me to apply theory to real,
            complex problems.
          </p>

          <p>
            What sets me apart is my willingness to{" "}
            <strong>dive deep into challenges</strong>, adapt quickly, and
            continuously improve both my skills and my work. I don’t just write
            code — I think critically about usability, performance, edge cases,
            and long-term maintainability. I value clear communication,
            thoughtful design, and building software that remains reliable as it
            grows.
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
