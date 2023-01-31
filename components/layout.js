import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "progand";
export const siteTitle = "Frontend Developer's Portfolio";

export default function Layout({ children, home }) {
  return (
    <div className="container mx-auto px-4 py-10">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://progand.github.io/im'profile.jpg'`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="">
        {home ? (
          <>
            <div className="h1">{name}</div>
          </>
        ) : (
          <>
            <div className="">
              <Link href="/" className="">
                {name}
              </Link>
            </div>
          </>
        )}
      </header>
      {!home && (
        <div className="">
          <Link href="/">← Back to home</Link>
        </div>
      )}
      <main>{children}</main>
    </div>
  );
}
