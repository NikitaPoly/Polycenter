import DropDownSDSInfo from "./dropDownSDSInfo";
//import { BrowserView, MobileView } from "react-device-detect";

export default function LoggedOutSDSHome() {
  return (
    <>
      {/* {<MobileView>
        <button>Sign Up</button>
        <button>Log In</button>
        <DropDownSDSInfo title="Earn" />
        <DropDownSDSInfo title="Save" />
        <DropDownSDSInfo title="Stay Safe" />
      </MobileView> */}
      <div id="DDContainer">
        <span id="buttons">
          <button>Sign Up</button>
          <button>Log In</button>
        </span>
        <span id="info">
          <DropDownSDSInfo title="Earn" />
          <DropDownSDSInfo title="Save" />
          <DropDownSDSInfo title="Stay Safe" />
        </span>
      </div>
      <style jsx>{`
        #DDContainer {
          display: flex;
          height: 90vh;
        }
        #DDContainer span {
          display: flex;
          flex-flow: column;
          justify-content: space-around;
          align-items: center;
        }
        #DDContainer span#buttons {
          width: 40%;
        }
        #DDContainer span#info {
          width: 60%;
        }
        #DDContainer button {
          margin: 10vh 0;
          font-size: 4vh;
          padding: 1.5vw;
        }
        @media only screen and (max-width: 425px) {
          #DDContainer {
            flex-flow: column;
            justify-content: space-around;
            height: 100%;
            padding-top: 2rem;
          }
          #DDContainer span#buttons {
            width: 100%;
            margin-bottom: 1rem;
            flex-flow: row;
          }
          #DDContainer span#info {
            width: 100%;
          }
          #DDContainer button {
            margin: 0;
            font-size: 4vh;
            padding: 2vh 5vw;
          }
        }
        @media only screen and (hover: none) and (orientation: landscape) {
          #DDContainer {
            height: 100vh;
          }
          #DDContainer span#info {
            margin-top: 1rem;
            overflow-y: scroll;
            justify-content: start;
            align-items: center;
          }
          #DDContainer button {
            margin: 0;
            font-size: 5vh;
            padding: 3vh 5vw;
          }
        }
      `}</style>
    </>
  );
}
