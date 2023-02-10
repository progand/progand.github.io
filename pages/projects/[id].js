import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
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
  const [index, setIndex] = useState(-1);
  const { start, end, title, image, technologies, contentHtml } = projectData;
  const images = projectData.images
    ? projectData.images
    : image
    ? [image]
    : null;
  const photos = images.map((src) => ({ src, width: 1905, height: 912 }));
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 !pt-0">
          <div className="max-w-screen-md mx-auto ">
            <div className="flex justify-center">
              <Technologies
                technologies={technologies}
                className="flex gap-3"
              />
            </div>
            <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
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
        {images && (
          <>
            <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
              <div className={"grid gap-10 md:grid-cols-2 "}>
                {images.slice(0, 4).map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="h-80 relative cursor-pointer overflow-hidden p-10 transition-all hover:scale-105 rounded-md shadow-md border"
                    tabIndex={-1}
                    onClick={() => setIndex(imageIndex)}
                    title="Click to Open"
                  >
                    <Image
                      priority={!imageIndex}
                      src={image}
                      fill
                      alt=""
                      className=" object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-7 mb-7">
              <a
                className="px-5 py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20 "
                href="!#"
                onClick={(evt) => {
                  evt.preventDefault();
                  setIndex(0);
                }}
              >
                View all images ({images.length})
              </a>
            </div>
          </>
        )}
        <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
          <article className="max-w-screen-md mx-auto">
            <div
              className="my-3 prose prose-base dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </article>
        </div>
      </div>
      {images && (
        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      )}
    </Layout>
  );
}
