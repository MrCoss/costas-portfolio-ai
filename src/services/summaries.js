// /src/services/summaries.js
import portfolioData from "./portfolioData";

export const summarizeSkills = () => {
  const s = portfolioData.skills;
  return `
Programming: ${s.programming.join(", ")}
Frameworks: ${s.frameworks.join(", ")}
Machine Learning: ${s.ml.join(", ")}
Artificial Intelligence: ${s.ai.join(", ")}
Cloud: ${s.cloud.join(", ")}
Robotics: ${s.robotics.join(", ")}
  `;
};

export const summarizeExperience = () => {
  return portfolioData.experience
    .map(
      (exp) =>
        `${exp.role} at ${exp.company} (${exp.period}) — ${exp.details.join(
          "; "
        )}`
    )
    .join("\n\n");
};

export const summarizeProject = (title) => {
  const p = portfolioData.majorProjects.find(
    (proj) => proj.title.toLowerCase() === title.toLowerCase()
  );
  if (!p) return "No project found with that name.";

  return `
${p.title}
Description: ${p.description}
Technologies: ${p.tech.join(", ")}
  `;
};
