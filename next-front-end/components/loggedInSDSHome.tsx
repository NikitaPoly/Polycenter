import { signOut } from "next-auth/react";

export type PROPS = {
  userName: string;
};
export default function LoggedInSDSHome({ userName }: PROPS) {
  return (
    <>
      <header>
        <span>Logged In as {userName.split(" ")[0]}</span>
        <span
          id="mouse"
          onClick={() => {
            signOut();
          }}
        >
          Log Out
        </span>
      </header>
      <div id="main">
        <div className="window">
          <h1>Whats New</h1>
          <section>d</section>
        </div>
        <div className="window">
          <h1>How It Works</h1>
          <section>s</section>
        </div>
      </div>
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
        div#main {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 85vh;
        }
        div.window {
          width: 40%;
          height: 80%;
          text-align: center;
        }
        section {
          background-color: white;
          height: 100%;
          width: 100%;
          border-radius: 5px;
        }
        @media only screen and (max-width: 425px) {
          div#main {
            display: flex;
            flex-flow: column;
            height: 100%;
          }
          div.window {
            width: 90%;
            margin-bottom: 3rem;
          }
        }
        @media only screen and (max-width: 920px) and (orientation: landscape) {
          header {
            display: none;
          }
          div#main {
            height: 85vh;
          }
        }
      `}</style>
    </>
  );
}
