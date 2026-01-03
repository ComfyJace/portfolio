import SkillsCard from "./SkillsCard";

function Skills() {
  const skills: Record<string, string[]> = {
    Languages: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "C",
      "C++",
      "Ruby",
    ],
    Frameworks: ["React", "Next.js", "Express", "Django", "Flask"],
    Tools: [
      "Node.js",
      "Git / GitHub",
      "Docker",
      "Jest",
      "Postman",
      "Firebase",
      "AWS (EC2, S3)",
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
    <div>
      <h1>Skills</h1>
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="mb-4">
          <h2 className="text-xl font-semibold mb-2">{category}</h2>
          <div className="flex flex-wrap gap-2">
            {skillList.map((skill) => (
              <SkillsCard key={skill} label={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
