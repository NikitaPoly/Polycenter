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
        jlksdhf sdlfh sdkfh sdkf sdfh sdk fksdhfjksdhfkjsd lsdh lksdhf sdlkfh sdlkfh sd fhsdlfsdlkfhl sdfh
        sdlkf hsdlkfh sdlkfh sdlfh sdlkfh sdl fhlksdfh lksdfh sdlkfh sdlkf jlksdhf sdlfh sdkfh sdkf sdfh sdk
        fksdhfjksdhfkjsd lsdh lksdhf sdlkfh sdlkfh sd fhsdlfsdlkfhl sdfh sdlkf hsdlkfh sdlkfh sdlfh sdlkfh sdl
        fhlksdfh lksdfh sdlkfh sdlkf jlksdhf sdlfh sdkfh sdkf sdfh sdk fksdhfjksdhfkjsd lsdh lksdhf sdlkfh
        sdlkfh sd fhsdlfsdlkfhl sdfh sdlkf hsdlkfh sdlkfh sdlfh sdlkfh sdl fhlksdfh lksdfh sdlkfh sdlkf
      </p>
    </main>
  );
});
export const head: DocumentHead = {
  title: "Resume",
};
