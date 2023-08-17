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
          <b>BASc Electrical Engineering & Computer Technology</b> <br />
          I'm deeply passionate about hardware design, especially crafting real-time embedded systems. <br />
          I also find joy in learning about web development frameworks and designing responsive websites. <br />
          My main interest lies in intricate flight control system design - years of experience have honed my skills, and I'm excited to push further.
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
