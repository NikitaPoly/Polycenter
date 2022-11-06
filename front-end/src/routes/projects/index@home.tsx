import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ProjectOptionsBar from "./OptionsBar";
import ProjectsContainer from "./projectsContainer";
import styles from "./index.css";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <main class="projects">
      <ProjectsContainer />
      <ProjectOptionsBar />
    </main>
  );
});
export const head: DocumentHead = {
  title: "Projects",
};
