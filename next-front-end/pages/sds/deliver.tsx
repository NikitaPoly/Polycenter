import Layout from "../../layouts/sds";
import { getSession } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth]";
import { Host } from "../../static-content/utils";
import { SDSUserData } from "../../static-content/types";
import { unstable_getServerSession } from "next-auth/next";
import { useState } from "react";

export type PROPS = {
  session: any;
  userData: SDSUserData;
};

async function getAllOrders() {
  try {
    console.log("Request for orders Sent");
    const response = await fetch("/api/sds/deliver", { method: "GET" });
    const ordersList = await response.json();
    return ordersList.ordersList;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export default function SDShome({ session, userData }: PROPS) {
  const [ordersList, setOrdersList] = useState([]);
  return (
    <Layout>
      <main className="sds">
        <header>
          <h1>Deliver Order</h1>
        </header>
        <div id="orderList">
          {ordersList
            ? //for testing only
              ordersList.map((order) => (
                <ul key={Math.random()}>
                  <li>{(order as any)._id}</li>
                  <li>{(order as any).customer}</li>
                  <li>
                    {(order as any).items.map((item: any) => (
                      <>
                        <p>{item.name}</p>
                        <p>{item.cost}</p>
                      </>
                    ))}
                  </li>
                  <li>{(order as any).worker}</li>
                </ul>
              ))
            : "none"}
        </div>
        <button
          onClick={async () => {
            const orders = await getAllOrders();
            setOrdersList(orders);
          }}
        >
          get orders
        </button>
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
