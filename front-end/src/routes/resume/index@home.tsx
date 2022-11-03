import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <main class="home"></main>;
});
export const head: DocumentHead = {
  title: "Resume",
};
