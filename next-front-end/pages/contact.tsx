import { useState } from "react";
import styles from "../styles/contact.module.css";
import Layout from "../layouts/home";
import { ContactMessage } from "./api/contact";
import { NextPage } from "next";

function SendMessage(message: ContactMessage) {
  try {
    const res = fetch("/api/contact", { method: "POST", body: JSON.stringify(message) });
  } catch (e) {
    console.log(e);
  }
}
function CheckInputs(emai: string, title: string, body: string): string {
  if (emai === "" || title === "" || body === "") {
    return "All inputs are required";
  }
  return "";
}
const Contact: NextPage = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [messageTitle, setMessageTitle] = useState("");
  const [messageBody, setMessageBody] = useState("");
  return (
    <Layout>
      <main className={`${styles.contact} contact`}>
        <label className={styles.email}>
          Email
          <br />
          <input
            value={userEmail}
            type="email"
            onChange={(e) => {
              setUserEmail(e?.target.value);
            }}
          />
        </label>

        <label className={styles.title}>
          Title
          <br />
          <input
            value={messageTitle}
            type="text"
            onChange={(e) => {
              setMessageTitle(e?.target.value);
            }}
          />
        </label>

        <label className={styles.body}>
          Body
          <textarea
            value={messageBody}
            onChange={(e) => {
              setMessageBody(e?.target.value);
            }}
          />
        </label>
        <div className={styles.error}>{errorMsg}</div>
        <div className={styles.button}>
          <button
            onClick={() => {
              const errorMsg: string = CheckInputs(userEmail, messageTitle, messageBody);
              if (errorMsg !== "") {
                setErrorMsg(errorMsg);
                return;
              }
              const message: ContactMessage = { email: userEmail, title: messageTitle, body: messageBody };
              SendMessage(message);
              setErrorMsg("Thank you");
              //reset
              setUserEmail("");
              setMessageBody("");
              setMessageTitle("");
            }}
          >
            Send
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default Contact;
