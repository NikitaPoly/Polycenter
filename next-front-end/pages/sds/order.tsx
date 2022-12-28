import Layout from "../../layouts/sds";
import { getSession } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth]";
import { Host } from "../../static-content/utils";
import { FoodStoreData, SDSOrder, SDSUserData } from "../../static-content/types";
import { unstable_getServerSession } from "next-auth/next";
import { SDSOrderItem } from "../../static-content/types";
import Data from "../../vendorsData/vendorsData";

export type PROPS = {
  session: any;
  userData: SDSUserData;
};

//change
async function CreateOrderRequest(customerEmail: string) {
  try {
    const item1 = { name: "Sandwich", cost: 10.45 };
    const item2 = { name: "Drink", cost: 1.5 };
    const newOrder = { items: [item1, item2], customer: customerEmail, worker: "" };
    const res = await fetch("/api/sds/order", {
      method: "POST",
      body: JSON.stringify(newOrder),
    });
  } catch (e) {
    console.log(e);
  }
  console.log("order sent");
}

function TestStoresDisplay() {
  console.log(Data);
}
export default function SDShome({ session, userData }: PROPS) {
  return (
    <Layout>
      <main className="sds">
        <header>
          <h1>Make an Order</h1>
        </header>
        <p>
          Basic order:
          <br />
          Sandwich :$10.45 Drink : $1.50
        </p>
        <button
          onClick={() => {
            CreateOrderRequest(userData.UserEmail);
          }}
        >
          Mock Order
        </button>
        <div onClick={TestStoresDisplay}>show stores</div>
      </main>
      <style jsx>{`
        header {
          background-color: var(--sds-dark);
          color: white;
          padding: 1rem;
        }
      `}</style>
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
