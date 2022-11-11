import styles from "../styles/Home.module.css";
import Layout from "../layouts/home";
import Link from "next/link";

export default function Home() {
  return (
    //@ts-ignore
    <Layout>
      <main className={`${styles.home} home`}>
        <section>
          <h1>New</h1>
          <p>information about new features of website</p>
        </section>
        <section>
          <h2>Links</h2>
          <p>Links to othere "apps" on the website and projects</p>
        </section>
        <section>
          <h2>About</h2>
          <p></p>
        </section>
      </main>
    </Layout>
  );
}
