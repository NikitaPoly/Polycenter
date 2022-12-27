import { Host } from "../../../static-content/utils";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const GoResponse = await fetch("http://" + Host() + ":8080/sdsOrders", { method: "GET" });
      const ordersList = await GoResponse.json();
      res.status(200).send({ ordersList: ordersList });
    } catch (e) {
      console.log(e);
      res.status(200).send({ ordersList: [] });
    }
  } else {
    res.status(405).send({ message: "Only Get Allowed" });
  }
}
