import Layout from "../../layouts/sds";
import { getSession } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth]";
import { Host } from "../../static-content/utils";
import { FoodStoreData, SDSOrder, SDSUserData } from "../../static-content/types";
import { unstable_getServerSession } from "next-auth/next";
import { SDSOrderItem } from "../../static-content/types";
import Data from "../../vendorsData/vendorsData";
import { useEffect, useState } from "react";
import SDSMenu from "../../components/SDSMenu";
import SDSCart from "../../components/SDSCart";

export type PROPS = {
  session: any;
  userData: SDSUserData;
};

//change
async function sendOrder(cart: any, customerEmail: string) {
  try {
    const newOrder = { items: cart, customer: customerEmail, worker: "" };
    const res = await fetch("/api/sds/order", {
      method: "POST",
      body: JSON.stringify(newOrder),
    });
  } catch (e) {
    console.log(e);
  }
  console.log("order sent");
}

export default function SDShome({ session, userData }: PROPS) {
  const [activeStore, setActiveStore] = useState("");
  const [cart, setCart] = useState<Array<number>>([]);
  const [newItem, setNewItem] = useState();
  useEffect(() => {
    if (newItem && Object.keys(newItem).length > 0) {
      const temp = cart;
      temp.push(newItem);
      setCart([...temp]);
    }
  }, [newItem]);
  return (
    <Layout>
      <main className="sds">
        <span>
          Select Store Near DePauw:
          <select
            name="foodStore"
            id="foodStore"
            onChange={(e) => {
              setActiveStore(e.target.value);
              setCart([]);
            }}
          >
            <option value="" selected disabled hidden>
              Choose here
            </option>
            <option value="0">Taco Wapo</option>
            <option value="1">The Duck</option>
            <option value="2">Hoover</option>
            <option value="3">Marvins</option>
            <option value="4">Campus Store</option>
          </select>
          <button
            onClick={() => {
              sendOrder(cart, userData.UserEmail);
              setCart([]);
              alert("order sent");
            }}
          >
            Send Order
          </button>
          <button
            onClick={() => {
              setCart([]);
            }}
          >
            Clear Cart
          </button>
        </span>
        <SDSMenu
          activeStoreIdx={activeStore}
          addItemToCart={(newItem: any) => {
            setNewItem(newItem);
          }}
        />
        <SDSCart cart={cart} />
      </main>
    </Layout>
  );
}

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  //if no session then redirect to home
  if (!session) {
    return {
      redirect: {
        destination: "/sds",
      },
    };
  } else {
    const SDSUserDataRequest = await fetch(
      "http://" + Host() + `:8080/sdsUsers/getUserData?email=${session.user?.email}`
    );
    const GoResponseBody: SDSUserData = await SDSUserDataRequest.json();
    return {
      props: {
        session: await unstable_getServerSession(context.req, context.res, authOptions),
        userData: GoResponseBody,
      },
    };
  }
};
