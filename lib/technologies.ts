import { Project } from "./projects";

export function getAllTechnologiesFromProjectsData(allProjectsData: Project[]) {
  return Object.keys(getAllTechnologiesStatsFromProjectsData(allProjectsData));
}

export function getAllTechnologiesStatsFromProjectsData(
  allProjectsData: Project[]
) {
  return allProjectsData.reduce(
    (
      all: Record<string, number>,
      { technologies }: { technologies: string[] }
    ) => {
      technologies.forEach((tech) => {
        if (!all[tech]) {
          all[tech] = 0;
        }
        all[tech]++;
      });
      return all;
    },
    {}
  );
}

export function getFeaturedTechnologies() {
  return ["React", "Vue", "Ember.js", "jQuery", "JavaScript"];
}
