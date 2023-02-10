import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import { getSortedProjectsData } from "../../lib/projects";
import { getAllTechnologiesFromProjectsData } from "../../lib/technologies";
import Date from "../../components/date";
import Technologies from "../../components/technologies";
import ProjectsList from "../../components/projects-list";

export async function getStaticProps({ params }) {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      technology: params.id,
      allProjectsData: allProjectsData.filter(
        ({ technologies }) =>
          Array.isArray(technologies) && technologies.includes(params.id)
      ),
    },
  };
}
export async function getStaticPaths() {
  const paths = getAllTechnologiesFromProjectsData(getSortedProjectsData()).map(
    (id) => ({
      params: {
        id,
      },
    })
  );
  return {
    paths,
    fallback: false,
  };
}

export default function Project({ technology, allProjectsData }) {
  return (
    <Layout home>
      <Head>
        <title>{technology}</title>
      </Head>

      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
        <div className="flex justify-center flex-wrap mb-12">
          <span
            className={
              "inline-block text-xl font-medium tracking-wider uppercase mt-5 text-emerald-700"
            }
          >
            {technology}
          </span>
        </div>
        <ProjectsList projects={allProjectsData} />
      </div>
    </Layout>
  );
}
