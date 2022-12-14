import { useRef, useState } from "react";
import Layout from "../../layouts/sds";

function handleSignUp(newUserEmailInput: string, form: any) {
  form.reportValidity();
  if (!form.checkValidity()) {
    return;
  }
  if (!newUserEmailInput.includes("@depauw.edu") || !newUserEmailInput.includes("_")) {
    return;
  }
  const body = {
    UserEmail: newUserEmailInput,
    UserName: newUserEmailInput.split("_")[0],
    GraduationYear: parseInt(
      newUserEmailInput.slice(newUserEmailInput.indexOf("@") - 4, newUserEmailInput.indexOf("@"))
    ),
    OrderCompleted: 0,
    OrdersRequested: 0,
    Ballance: 0,
  };
  fetch("/api/sds/signup", { method: "POST", body: JSON.stringify(body) });
}

export default function Signup() {
  const errorSpanRef = useRef(null);
  const formRef = useRef(null);
  const [newUserEmailInput, setNewUserEmailInput] = useState("");
  return (
    <Layout>
      <main className={`sdsSignup`}>
        <h1>Sign up for SDS</h1>
        <p>information about the service</p>
        <span ref={errorSpanRef}></span>
        <form ref={formRef}>
          <label htmlFor="newUserEmail">DePauw Email: </label>
          <input
            type="email"
            id="newUserEmail"
            name="newUserEmail"
            required
            onChange={(e) => {
              setNewUserEmailInput(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleSignUp(newUserEmailInput, formRef.current);
            }}
          >
            SignUp
          </button>
        </form>
      </main>
    </Layout>
  );
}
