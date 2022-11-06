import { component$, useStyles$, $, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.css";
import { ContactMessage } from "../api/home";

export const allValidInputs = (userEmail: string, userTitle: string, userBody: string): Boolean => {
  return (userEmail + userTitle + userBody).length >= 3;
};

export default component$(() => {
  useStyles$(styles);
  const state = useStore({ userEmail: "", userTitle: "", userBody: "", errorMsg: "" });

  const sendContactMessage = $(async () => {
    if (allValidInputs(state.userEmail, state.userTitle, state.userBody)) {
      const requestBody: ContactMessage = {
        user_email: state.userEmail,
        user_title: state.userTitle,
        user_body: state.userBody,
      };
      try {
        await fetch("api/home", {
          method: "POST",
          body: JSON.stringify(requestBody),
        });
        state.errorMsg = `Thank you`;
      } catch (e) {
        console.log("error post from /contact to /api/home");
      }
    } else {
      state.errorMsg = "All inputs are required";
    }
  });
  return (
    <main class="contact">
      <label class="email">
        Email{" "}
        <input
          type="email"
          onChange$={(e) => {
            state.userEmail = (e as any).target.value;
          }}
        />
      </label>
      <label class="title">
        Title{" "}
        <input
          type="text"
          onChange$={(e) => {
            state.userTitle = (e as any).target.value;
          }}
        />
      </label>
      <label class="body">
        Body{" "}
        <textarea
          onChange$={(e) => {
            state.userBody = (e as any).target.value;
          }}
        />
      </label>
      <div class="button">
        <button onMouseUp$={sendContactMessage}>Send</button>
      </div>
      <div class="error">{state.errorMsg}</div>
    </main>
  );
});
export const head: DocumentHead = {
  title: "Contact",
};
