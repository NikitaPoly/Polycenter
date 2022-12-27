import { signOut } from "next-auth/react";

export default function LoggedInSDSHome(props: any) {
  return (
    <>
      <header>
        <span>Logged In as {props.userName.split(" ")[0]}</span>
        <span
          id="mouse"
          onClick={() => {
            signOut();
          }}
        >
          Log Out
        </span>
      </header>
      <style jsx>{`
        header {
          display: flex;
          background-color: var(--sds-dark);
          height: 5vh;
          color: white;
          align-items: center;
          justify-content: space-around;
        }
        span#mouse {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
