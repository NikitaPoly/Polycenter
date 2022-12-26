import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { Host } from "../../../static-content/utils";
/*
https://next-auth.js.org/configuration/callbacks
 -
*/

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn({ user }) {
      //also add request to db to check if accoutn exists for this account
      //if account does not exist redirect to sign up page
      const userEmail = user ? user.email : "";
      const isDePauw = userEmail && userEmail.includes("@depauw.edu");
      if (isDePauw) {
        const res = await fetch("http://" + Host() + ":8080/sdsUsers/checkExists", {
          body: JSON.stringify({ userEmail: userEmail }),
          method: "POST",
        });
        return res.status === 200 ? true : "/sds/signup";
      } //add else if for if email not in db and depauw then redirect to signup
      else {
        return "/sds/signup";
      }
    },
  },
};
export default NextAuth(authOptions);
