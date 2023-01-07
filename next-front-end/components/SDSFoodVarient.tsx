import { useEffect, useState } from "react";

export type PROPS = {
  varName: string;
  price: number;
  sendNewItem: any;
};

export default function SDSFoodVarient({ varName, price, sendNewItem }: PROPS) {
  return (
    <>
      <div id="container">
        <p>{varName}</p>
        <p>${price}</p>
        <button
          onClick={() => {
            const newItem = { name: varName, price: price };
            sendNewItem(newItem);
          }}
        >
          Add to Cart
        </button>
      </div>
      <style jsx>{`
        p {
          width: 33%;
        }
        div#container {
          border: 2px solid var(--sds-dark);
          border-bottom: none;
          display: flex;
          align-items: center;
          justify-content: space-around;
          height: 5rem;
        }
        div#container:last-child {
          border-bottom: 2px solid var(--sds-dark);
        }
      `}</style>
    </>
  );
}
