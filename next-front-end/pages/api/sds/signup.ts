import { Host } from "../../../static-content/utils";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    const GoBody = { newUserEmail: body, action: "create" };
    await fetch("http://" + Host() + ":8080/sdsUsers/signUp", {
      method: "POST",
      body: JSON.stringify(GoBody),
    });
    res.status(200).send({ message: "User Created" });
  } else {
    res.status(405).send({ message: "Only Post Allowed" });
  }
}
