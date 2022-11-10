import type { NextApiRequest, NextApiResponse } from "next";

export type ContactMessage = {
  email: string;
  title: string;
  body: string;
};
export default function hanlder(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const body: ContactMessage = JSON.parse(req.body);
    console.log(body);
    res.status(200).send({ message: "Contact Message Received" });
  } else {
    res.status(405).send({ message: "Only Post Allowed" });
  }
}
