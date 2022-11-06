import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./Ecard.css";

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="ecard">
      <span class="h1">Nikita Polyakov</span>
      <span class="h2">Software Engineer</span>
      <span class="h3">Greater Seattle Area</span>
      <a href="https://www.linkedin.com/in/nikitapolyakovlink/"> LinkedIn</a>
    </div>
  );
});
