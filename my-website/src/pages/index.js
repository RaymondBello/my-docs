import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import HomepageExp from "../components/HomepageExp";
import HomepageProjects from "../components/HomepageProjects";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">About Me</h1>
        <p className="hero__subtitle">
          <b>{siteConfig.tagline}</b>
        </p>
        <p>
          <h2>Engineer 🔩 • Designer 🖌️ • Developer 💻 </h2>
          <b>BASc Electrical Engineering & Computer Technology</b>
          I have a strong passion for hardware design, particularly in the context of creating real-time embedded systems. <br />
          Additionally, I thoroughly enjoy delving into the world of web development.<br />
          That being said, my primary area of interest is centered around the intricate processes involved in designing and constructing flight control systems. <br />
          With years of experience, I am proud to have refined my skills in this field and look forward to continuing to push the boundaries of what is possible.
        </p>
        <div className={styles.buttons}>
          {/* <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Projects
          </Link>
          &nbsp;
          <Link
            className="button button--secondary button--lg"
            to="https://www.linkedin.com/in/raymond-b-488916189/"
          >
            Contact
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`About Me`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />

      <main>
        <HomepageFeatures />
      </main>

      <HomepageExp />

      <HomepageProjects/>
    </Layout>
  );
}
