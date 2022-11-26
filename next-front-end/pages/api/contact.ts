import type { NextApiRequest, NextApiResponse } from "next";

export type ContactMessage = {
  email: string;
  title: string;
  body: string;
};
export type GoContactMessage = {
  content: ContactMessage;
  action: string;
  collection: string;
};
export default async function hanlder(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const body: ContactMessage = JSON.parse(req.body);
    const GoBody: GoContactMessage = { content: body, action: "SAVE", collection: "ContactRequest" };
    await fetch("http://127.0.0.1:8080/dbAction", {
      method: "POST",
      body: JSON?.stringify(GoBody),
    });
    res.status(200).send({ message: "Contact Message Received" });
  } else {
    res.status(405).send({ message: "Only Post Allowed" });
  }
}
