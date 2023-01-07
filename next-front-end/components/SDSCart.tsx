import { useEffect, useState } from "react";

export type PROPS = {
  cart: any;
};

export default function SDSCart({ cart }: PROPS) {
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    console.log(cart);
    if (cart.length > 0) {
      const temp = cart.map((item: any) => item.price);
      const total = temp.reduce((a: any, b: any) => a + b);
      setTotal(total);
    } else {
      setTotal(0);
    }
  }, [cart]);
  return (
    <>
      <div id="meta">
        <h1>Your Cart : {cart.length} items</h1>
        <span>
          <div>Estimate Price of Goods : ${total}</div>
          <div>Delivery Price : $3 </div>
          <div>Total Price : ${total + 3} </div>
        </span>
      </div>
      <div id="cart">
        {cart.map((item: any) => (
          <span key={item.name + Math.random()}>
            <p>{item.name}</p>
            <p>${item.price}</p>
          </span>
        ))}
      </div>
      <style jsx>{`
        div#meta {
          overflow: auto;
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 0.5rem;
        }
        div#cart {
          display: flex;
          overflow-x: auto;
          overflow-y: hidden;
          height: 14vh;
        }
        div#cart span {
          background-color: white;
          border: 3px solid var(--sds-dark);
          padding: 0.25rem;
          margin: 0 1rem;
          text-align: center;
        }
      `}</style>
    </>
  );
}
