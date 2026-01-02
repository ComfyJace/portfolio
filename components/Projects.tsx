import { ProjectList } from "@/constants/ProjectList";
import ProjectCard from "./ProjectCard";
function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className="projects-list grid grid-cols-3 gap-4">
        {ProjectList.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Projects;
