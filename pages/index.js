import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedProjectsData } from "../lib/projects";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Home({ allProjectsData }) {
  console.log(allProjectsData);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allProjectsData.map(
            ({ id, start, end, title, image, technologies }) => (
              <li className={utilStyles.listItem} key={id}>
                {!!image && (
                  <Image priority src={image} height={200} width={200} alt="" />
                )}
                <Link href={`/projects/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  {start && <Date dateString={start} />}
                  {start && end && " - "}
                  {end && <Date dateString={end} />}
                </small>
                {technologies && (
                  <div>
                    {technologies.map((t) => (
                      <small>{t}</small>
                    ))}
                  </div>
                )}
              </li>
            )
          )}
        </ul>
      </section>
    </Layout>
  );
}
