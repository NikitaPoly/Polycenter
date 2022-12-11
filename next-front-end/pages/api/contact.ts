import type { NextApiRequest, NextApiResponse } from "next";
import { Host } from "../../static-content/utils";

//get this from request
export type ContactMessage = {
  email: string;
  title: string;
  body: string;
};
//send this to go API
export type GoContactMessage = {
  content: ContactMessage;
  action: string;
  collection: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const body: ContactMessage = JSON.parse(req.body);
    const GoBody: GoContactMessage = { content: body, action: "SAVE", collection: "ContactRequest" };
    await fetch("http://" + Host() + ":8080/home/contact", { method: "POST", body: JSON.stringify(GoBody) });
    res.status(200).send({ message: "Contact Message Received" });
  } else {
    res.status(405).send({ message: "Only Post Allowed" });
  }
}
