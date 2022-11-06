import type { RequestHandler } from "@builder.io/qwik-city";

export type ContactMessage = {
  user_email: string;
  user_title: string;
  user_body: string;
};

export const onPost: RequestHandler<ContactMessage> = async (req) => {
  let body: ContactMessage = JSON.parse(await req.request.text());
  console.log("message from : " + body.user_email);
};
