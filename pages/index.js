import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedProjectsData } from "../lib/projects";
import Link from "next/link";
import Date from "../components/date";
import Badge from "../components/badge";
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
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
        <div className={"grid gap-10 lg:gap-10 md:grid-cols-2 "}>
          {allProjectsData.map(
            ({ id, start, end, title, image, technologies }, projectIndex) => (
              <div className="cursor-pointer group" key={projectIndex}>
                <div className="overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 hover:scale-105">
                  <Link
                    href={`/projects/${id}`}
                    className="relative block aspect-video"
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      className="transition-all object-cover"
                    />
                  </Link>
                </div>
                <div>
                  <Technologies technologies={technologies.slice(0, 3)} />
                  <div className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
                    <Link
                      href={`/projects/${id}`}
                      className="no-underline text-inherit"
                    >
                      <span className="bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                        {title}
                      </span>
                    </Link>
                  </div>
                  <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
                    {start && <Date className="text-sm" dateString={start} />}
                    {start && end && (
                      <span className="text-xs text-gray-300 dark:text-gray-600">
                        —
                      </span>
                    )}
                    {end && <Date className="text-sm" dateString={end} />}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Layout>
  );
}
