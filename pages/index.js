import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import { getSortedPostsData } from "../lib/posts";

import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData, 
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        関西大学商学部4年次在学中。
        2019年4月からHTML/CSSを独学で始め、その後Rubyやノーコードツールなど多様な技術を学び、 2021年8月からFlutterの学習を始めました。
        現在はモバイルだけでなくWeb開発の知見を得るためにRuby on RailsとNext.jsをそれぞれ勉強しています。
        ラーメンが好きなのでおすすめのラーメン屋さんなら無限に紹介できます。
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Works</h2>

        <div className={`${styles.grid}`}>
          {allPostsData.map(({ id, date, title, thumbnail, githubUrl }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img
                  src={`${thumbnail}`}
                  className={`${styles.thumbnailImage}`}
                />
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utilStyles.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <br/>
              <div>
              <Link href={githubUrl}>GitHub</Link>
        </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
