interface SkillsInfoProps {
  label: string;
}

function SkillsCard({ label }: Readonly<SkillsInfoProps>) {
  return (
    <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-800">
      {label}
    </span>
  );
}

export default SkillsCard;
