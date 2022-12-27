import styles from "../styles/Home.module.css";
import Layout from "../layouts/home";
import Link from "next/link";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout>
      <main className={`${styles.home} home`}>
        <section>
          <h1>New</h1>
          <ol>
            <li>
              <p>Initial Website Launch - 12/27/22</p>
            </li>
          </ol>
        </section>
        <section>
          <h2>Links</h2>
          <ol>
            <li>
              <p>
                DePauw Student Delivery Service - A service for depauw student to be used as a safer option
                for food delivery.
              </p>
              <Link href="/sds">Link to SDS</Link>
            </li>
          </ol>
        </section>
        <section>
          <h2>About</h2>
          <ol></ol>
        </section>
      </main>
    </Layout>
  );
};
export default Home;
