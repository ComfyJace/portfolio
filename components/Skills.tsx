import SkillsCard from "./SkillsCard";

function Skills() {
  const skills: Record<string, string[]> = {
    Languages: [
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "TypeScript",
      "C",
      "Ruby",
      "Kotlin",
      "HTML5",
      "CSS3",
      "XML",
    ],

    Frameworks: [
      "React",
      "Next.js",
      "Express",
      "Node.js",
      "PyTorch",
      "Scikit-learn",
    ],

    Tools: [
      "Node.js",
      "Git / GitHub",
      "Jest",
      "Sinon",
      "Postman",
      "Firebase",
      "AWS (EC2, S3)",
      "MongoDB",
      "MongoDB Realm",
      "MySQL",
      "Android Studio",
      "REST APIs",
      "JWT",
      "Session/Cookie Management",
      "Gradle",
      "OpenCV",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Jupyter",
      "Weights & Biases (WandB)",
    ],

    ML: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Deep Learning",
      "Computer Vision",
      "Image Classification",
      "Image Segmentation",
      "Data Preprocessing",
      "Model Evaluation",
      "Hyperparameter Tuning",
    ],
    QA: [
      "Automated Testing",
      "Manual Testing",
      "Exploratory Testing",
      "CI-ready Test Suites",
      "Bug Reproduction & Tracking",
      "Agile QA Practices",
    ],

    SoftSkills: [
      "Effective Communication",
      "Team Collaboration",
      "Problem Solving",
      "Adaptability",
      "Time Management",
    ],
  };

  return (
    <div className="skills-section p-6 max-w-3xl mx-auto space-y-8" id="skills">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">Skills</h1>

      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="mb-6">
          {/* Category Heading */}
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            {category}
          </h2>

          {/* Skills list */}
          <div className="flex flex-wrap gap-3">
            {skillList.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-800 font-medium hover:bg-blue-500 hover:text-white transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
