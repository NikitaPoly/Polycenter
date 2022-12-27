import { Host } from "../../../static-content/utils";
import type { NextApiRequest, NextApiResponse } from "next";
import { SDSOrder, SDSOrderItem } from "../../../static-content/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const SDSOrders: SDSOrder = JSON.parse(req.body);
      const GoResponse = await fetch("http://" + Host() + ":8080/sdsOrders/createOrder", {
        body: JSON.stringify(SDSOrders),
        method: "POST",
      });
      res
        .status(GoResponse.status)
        .send(GoResponse.status === 200 ? { message: "Order Created" } : { message: "Order Not Created" });
    } catch (e) {
      console.log(e);
      res.status(201).send({ message: "Order Not Created" });
    }
  } else {
    res.status(405).send({ message: "Only Post Allowed" });
  }
}
