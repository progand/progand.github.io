import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedProjectsData } from "../lib/projects";
import {
  getFeaturedTechnologies,
  getAllTechnologiesFromProjectsData,
} from "../lib/technologies";
import Link from "next/link";
import Date from "../components/date";
import Badge from "../components/badge";
import Technologies from "../components/technologies";
import ProjectsList from "../components/projects-list";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Home({ allProjectsData }) {
  const allTechnologies = getAllTechnologiesFromProjectsData(allProjectsData);
  const featuredTechnologies = getFeaturedTechnologies();
  const diffTechNumber = (allTechnologies.length = featuredTechnologies.length);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
        <div className="flex justify-center flex-wrap mb-12">
          <Technologies
            technologies={featuredTechnologies}
            className="flex gap-3"
          >
            <Link href={`/technologies`} className="hover:opacity-60">
              <span className="inline-block text-xs font-medium tracking-wider uppercase mt-5 ">
                +{diffTechNumber}
              </span>
            </Link>
          </Technologies>
        </div>
        <ProjectsList projects={allProjectsData} />
        <div className="flex justify-center mt-7 mb-7">
          <Link
            href={`/projects`}
            className="px-5 py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20 "
          >
            View all projects ({allProjectsData.length})
          </Link>
        </div>
      </div>
    </Layout>
  );
}
