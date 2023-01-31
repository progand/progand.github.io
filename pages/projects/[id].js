import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import { getAllProjectIds, getProjectData } from "../../lib/projects";
import Date from "../../components/date";
import Badge from "../../components/badge";
import Technologies from "../../components/technologies";

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}
export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Project({ projectData }) {
  const { start, end, title, image, technologies, contentHtml } = projectData;
  const images = projectData.images
    ? projectData.images
    : image
    ? [image]
    : null;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 !pt-0">
          <div className="max-w-screen-md mx-auto ">
            <div className="flex justify-center">
              <Technologies technologies={technologies} />
            </div>
            <h1 class="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
              {title}
            </h1>
            <div className="flex justify-center items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
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
        <div className="relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg aspect-video">
          {images &&
            images.map((image, imageIndex) => (
              <Image
                key={imageIndex}
                src={image}
                fill
                objectFit="cover"
                alt=""
              />
            ))}
        </div>
        <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
          <article
            className="max-w-screen-md mx-auto"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </div>
    </Layout>
  );
}