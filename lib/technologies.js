export function getAllTechnologiesFromProjectsData(allProjectsData) {
  return Object.keys(getAllTechnologiesStatsFromProjectsData(allProjectsData));
}

export function getAllTechnologiesStatsFromProjectsData(allProjectsData) {
  return allProjectsData.reduce((all, { technologies }) => {
    technologies.forEach((tech) => {
      if (!all[tech]) {
        all[tech] = 0;
      }
      all[tech]++;
    });
    return all;
  }, {});
}

export function getFeaturedTechnologies() {
  return ["React", "Vue", "Ember.js", "jQuery", "JavaScript"];
}
