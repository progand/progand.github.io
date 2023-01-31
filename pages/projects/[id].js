import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import { getAllProjectIds, getProjectData } from "../../lib/projects";
import Date from "../../components/date";
import Badge from "../../components/badge";

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
      <article>
        <h1 className="">{title}</h1>
        <small className="text-slate-400 text-sm">
          {start && <Date dateString={start} />}
          {start && end && " - "}
          {end && <Date dateString={end} />}
        </small>
        {technologies && (
          <div>
            <h6>Tecnologies</h6>
            {technologies.map((t) => (
              <Badge className="mr-1" key={t}>
                {t}
              </Badge>
            ))}
          </div>
        )}
        {images && (
          <div>
            <h6>Images</h6>
            {images.map((image) => (
              <Image src={image} height={400} width={400} alt="" />
            ))}
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  );
}
