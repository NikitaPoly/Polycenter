import { useEffect, useState } from "react";
import Data from "../vendorsData/vendorsData";
import SDSFoodCategory from "./SDSFoodCategory";

const FoodStoreData = Data;
export type PROPS = {
  activeStoreIdx: string;
  addItemToCart: any;
};
export default function SDSMenu({ activeStoreIdx, addItemToCart }: PROPS) {
  const [currentStoreName, SetCurrentStoreName] = useState("Please Select Restraunt");
  useEffect(() => {
    if (FoodStoreData) {
      SetCurrentStoreName(FoodStoreData[parseInt(activeStoreIdx)]?.name);
    }
  }, [activeStoreIdx]);
  return (
    <>
      <h2>{currentStoreName ? currentStoreName : "Select Store"}</h2>
      <div id="Menu">
        {FoodStoreData[parseInt(activeStoreIdx)]?.mainItems.map((Category) => (
          <SDSFoodCategory
            key={Math.random()}
            categoryData={Category}
            sendNewItem={(newItem: any) => {
              addItemToCart(newItem);
            }}
          />
        ))}
      </div>
      <style jsx>{`
        h2 {
          width: 100vw;
          height: 3.5vh;
          background-color: var(--sds-dark);
          text-align: center;
          color: white;
        }
        div#Menu {
          height: 60vh;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          overflow: auto;
          background-color: var(--sds-dark);
        }
      `}</style>
    </>
  );
}
