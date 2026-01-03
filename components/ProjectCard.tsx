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
    <div className="project-card bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col justify-between h-full">
      {/* Content container */}
      <div className="flex flex-col flex-grow">
        {/* Project title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {item.title}
        </h2>

        {/* Short description */}
        <p className="text-gray-700 text-sm mb-3 flex-grow">
          {item.shortDescription}
        </p>

        {/* Domain / category */}
        <p className="text-gray-500 text-xs mb-3">{item.domain}</p>
      </div>

      {/* Tech stack badges */}
      <div className="flex flex-wrap gap-2">
        {item.tech.map((techItem, index) => (
          <span
            key={index}
            className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-colors"
          >
            {techItem}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
