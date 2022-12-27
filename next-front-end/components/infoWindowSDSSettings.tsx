import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import UserInfoWindowSDS from "./userInfoWindowSDS";
import PaymentInfoWindowSDS from "./paymentInfoWindowSDS";
import ConvertCreditsWindowSDS from "./convertCreditsWindowSDS";
import { SDSUserData } from "../static-content/types";

export type PROPS = { userData: SDSUserData };

export default function InfoWindowSDSSettings({ userData }: PROPS) {
  const options = ["User Info", "Payment Settings", "Reedeem Credits"];
  const [currentOptionIndex, setCurrentOptionIndex] = useState(0);
  return (
    <div id="container">
      <span id="windowHeader">
        <div
          id="image"
          onClick={() => {
            if (currentOptionIndex - 1 < 0) {
              setCurrentOptionIndex(2);
            } else {
              setCurrentOptionIndex(currentOptionIndex - 1);
            }
          }}
        >
          <ArrowBackIosNewIcon />
        </div>
        <h2>{options[currentOptionIndex]}</h2>
        <div
          id="image"
          onClick={() => {
            if (currentOptionIndex + 1 > 2) {
              setCurrentOptionIndex(0);
            } else {
              setCurrentOptionIndex(currentOptionIndex + 1);
            }
          }}
        >
          <ArrowForwardIosIcon />
        </div>
      </span>
      <section>
        {currentOptionIndex === 0 ? (
          <UserInfoWindowSDS userData={userData} />
        ) : currentOptionIndex === 1 ? (
          <PaymentInfoWindowSDS />
        ) : (
          <ConvertCreditsWindowSDS />
        )}
      </section>
      <style jsx>{`
        div#container {
          display: flex;
          flex-flow: column;
          height: 75vh;
        }
        span#windowHeader {
          background-color: var(--sds-dark);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          height: 6vh;
        }
        h2 {
          width: 40%;
          text-align: center;
        }
        div#image {
          width: 30%;
          text-align: center;
          cursor: pointer;
        }
        section {
          background-color: white;
          margin: 1rem;
          padding: 1rem;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
