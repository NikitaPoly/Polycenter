import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Test from "~/integrations/react/test";
import styles from "./index.css";

export default component$(() => {
  useStyles$(styles);
  return (
    <main class="home">
      <div style={{ position: "fixed" }}>
        <Test />
      </div>
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
        <p> short summary of purpose of website</p>
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: "PolyCenter",
};
