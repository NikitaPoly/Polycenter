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
          width: 50%;
          height: 100%;
          padding: 0 2rem 2rem 2rem;
          justify-content: center;
          align-items: center;
        }
        #DDContainer button {
          width: 10vw;
          margin: 10vh 0;
          font-size: 3rem;
          padding: 1rem;
        }
      `}</style>
    </>
  );
}
