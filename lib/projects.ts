import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface Project {
  id: string;
  start: string;
  end: string;
  title: string;
  image: string;
  technologies: string[];
  contentHtml: string;
  hidden: boolean;
}

const projectsDirectory = path.join(process.cwd(), "projects");

export function getSortedProjectsData(): Project[] {
  // Get file names under /projects
  const fileNames: string[] = fs.readdirSync(projectsDirectory);
  const allProjects: Project[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the project metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    } as Project;
  });
  // Sort projects by date
  return allProjects.sort((a, b) => {
    if (a.start < b.start) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getProjectData(id: string) {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the project metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  } as Project;
}
