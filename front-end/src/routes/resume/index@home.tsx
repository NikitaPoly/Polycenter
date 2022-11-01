import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div>Resume</div>;
});
export const head: DocumentHead = {
  title: "Resume",
};
