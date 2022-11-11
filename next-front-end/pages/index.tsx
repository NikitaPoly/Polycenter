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
          <p>
            This website is the home page of polycenter.space. In addition to hosting online services I also
            use this website as a coding sandbox to showcase and practice development skills. Part of the
            learning process is to collaborate with others. Don’t hesitate to send a message in the{" "}
            <Link href="/contact">Contact Page</Link> or use it as a tool to report a bug you find.
          </p>
        </section>
      </main>
    </Layout>
  );
}
