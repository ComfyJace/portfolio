function Experience() {
  return (
    <section
      className="experience-section p-6 max-w-3xl mx-auto space-y-8"
      id="experience"
    >
      {/* Section heading */}
      <h1 className="text-3xl font-bold text-center mb-6">Experience</h1>

      {/* Experience Card */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm space-y-4">
        {/* Job title + company + dates */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
          <h2 className="text-xl font-semibold text-gray-800">
            QA Tester — Ardent World Inc.
          </h2>
          <span className="text-sm text-gray-500 italic">
            September 1, 2025 – December 4, 2025
          </span>
        </div>

        {/* Summary paragraph */}
        <p className="text-gray-700">
          At Ardent World Inc., I worked as a Quality Assurance Tester,
          contributing to the delivery of reliable and user-focused software
          products. I was responsible for testing web-based systems, identifying
          bugs, and validating features against functional and business
          requirements prior to release.
        </p>

        {/* Responsibilities */}
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Conducted manual exploratory, regression, and functional testing
            across multiple user flows to ensure system stability and usability.
          </li>
          <li>
            Created and maintained test cases, documented defects with clear
            reproduction steps, and collaborated with developers to verify fixes
            and prevent regressions.
          </li>
          <li>
            Assisted in improving bug tracking and issue workflows using{" "}
            <strong>JIRA</strong>, clarifying requirements and ensuring proper
            prioritization throughout the development cycle.
          </li>
        </ul>

        {/* Achievements / Reflection */}
        <p className="text-gray-700">
          Through this role, I gained hands-on exposure to{" "}
          <strong>project management practices</strong> and developed a strong
          appreciation for the full software development lifecycle—from planning
          and implementation to testing and delivery—while continuously
          improving both product quality and team efficiency.
        </p>
      </div>
    </section>
  );
}

export default Experience;
