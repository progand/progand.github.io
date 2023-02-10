import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import { getSortedProjectsData } from "../lib/projects";
import { getAllTechnologiesStatsFromProjectsData } from "../lib/technologies";
import Link from "next/link";
import Date from "../components/date";
import Technologies from "../components/technologies";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Home({ allProjectsData }) {
  const allStats = getAllTechnologiesStatsFromProjectsData(allProjectsData);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
        <div className={"grid gap-8 lg:gap-10 sm:grid-cols-2 md:grid-cols-3"}>
          {Object.keys(allStats).map((technology, technologyIndex) => (
            <div
              className="cursor-pointer group border p-4 rounded"
              key={technologyIndex}
            >
              <div className="text-lg font-semibold leading-snug tracking-tight dark:text-white ">
                <Link
                  href={`/technologies/${technology}`}
                  className="no-underline text-inherit flex justify-center items-center"
                >
                  <span className="bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                    {technology}
                  </span>
                  <span
                    className="ml-2 font-medium text-blue-600 text-sm inline-block px-2 border rounded-xl"
                    title={`${allStats[technology]} projects`}
                  >
                    {allStats[technology]}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
