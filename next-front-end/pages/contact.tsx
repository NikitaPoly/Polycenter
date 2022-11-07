import { useState } from "react";
import styles from "../styles/contact.module.css";
import Layout from "../layouts/home";

export default function Contact() {
  const [errorMsg, setErrorMsg] = useState("");
  return (
    //@ts-ignore
    <Layout>
      <main className={`${styles.contact} contact`}>
        <label className={styles.email}>
          Email <input type="email" />
        </label>

        <label className={styles.title}>
          Title <input type="text" />
        </label>

        <label className={styles.body}>
          Body <textarea />
        </label>
        <div className={styles.error}>{errorMsg}</div>
        <div className={styles.button}>
          <button
            onClick={() => {
              setErrorMsg("error Dvi");
            }}
          >
            Send
          </button>
        </div>
      </main>
    </Layout>
  );
}
