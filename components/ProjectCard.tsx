interface ProjectInfoProps {
  item: {
    id: string;
    title: string;
    shortDescription: string;
    domain: string;
    tech: string[];
    highlight?: boolean;
  };
}

function ProjectCard({ item }: Readonly<ProjectInfoProps>) {
  return (
    <div className="project-card p-4 border rounded-lg mb-4">
      <h2>{item.title}</h2>
      <p>{item.shortDescription}</p>
      <p>{item.domain}</p>
      <ul>
        {item.tech.map((techItem, index) => (
          <li key={index}>{techItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;
