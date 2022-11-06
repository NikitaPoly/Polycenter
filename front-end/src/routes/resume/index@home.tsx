import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.css";
export default component$(() => {
  useStyles$(styles);
  return (
    <main class="resume">
      <ul>
        <button class="github">GitHub</button>
        <button class="linkedin">LinkedIn</button>
        <button class="resume">Resume</button>
      </ul>
      <p>
        I am a software engineer from the greater Seattle area. My high school passion for programming lead to
        graduate from DePauw University with a computer science degree. In addition to working in Seattle
        programming continues to stay my passion. Teaching others is an important part of software development
        as it helps look at problems from different perspectives, while having an open mind to learning not
        only increases tech skills but also exercises the brain.
      </p>
    </main>
  );
});
export const head: DocumentHead = {
  title: "Resume",
};
