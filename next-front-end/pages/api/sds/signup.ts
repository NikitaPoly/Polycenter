import { Host } from "../../../static-content/utils";
import type { NextApiRequest, NextApiResponse } from "next";

//get this from request and send to GO aPI
export type SDSUserData = {
  UserEmail: string;
  UserName: string;
  GraduationYear: number;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const Gobody: SDSUserData = JSON.parse(req.body);
    const IsUserExist = await fetch("http://" + Host() + ":8080/sdsUsers/checkExists", {
      body: JSON.stringify(Gobody),
      method: "POST",
    });
    //if user exists then cancel sign up
    if (IsUserExist.status === 200) {
      res.status(204);
      return;
    }
    await fetch("http://" + Host() + ":8080/sdsUsers/signUp", {
      method: "POST",
      body: JSON.stringify(Gobody),
    });
    res.status(200).send({ message: "User Created" });
  } else {
    res.status(405).send({ message: "Only Post Allowed" });
  }
}
