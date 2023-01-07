import { useEffect, useState } from "react";
import { SDSFoodMenuItem } from "../static-content/types";
import SDSFoodVarient from "./SDSFoodVarient";

export type PROPS = {
  categoryData: SDSFoodMenuItem;
  sendNewItem: any;
};

export default function SDSFoodCategory({ categoryData, sendNewItem }: PROPS) {
  return (
    <>
      <div id="container">
        <h3>{categoryData.name}</h3>
        {categoryData.variations.map((variation) => (
          <SDSFoodVarient
            key={variation.name}
            varName={variation.name}
            price={variation.price}
            sendNewItem={(newItem: any) => {
              sendNewItem(newItem);
            }}
          />
        ))}
      </div>
      <style jsx>{`
        div#container {
          border: 2px solid var(--sds-dark);
          background-color: white;
          width: 60vw;
          margin: 1rem 0;
          padding: 1rem;
          margin-top: 0;
        }
      `}</style>
    </>
  );
}
