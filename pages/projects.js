import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedProjectsData } from "../lib/projects";
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
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
        <ProjectsList projects={allProjectsData} />
      </div>
    </Layout>
  );
}
