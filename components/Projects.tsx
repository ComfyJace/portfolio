import { ProjectList } from "@/constants/ProjectList";
import ProjectCard from "./ProjectCard";
function Projects() {
  return (
    <div
      className="projects-section max-w-6xl mx-auto px-6 py-10"
      id="projects"
    >
      {/* Section heading */}
      <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>

      {/* Projects grid */}
      <div className="projects-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProjectList.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
