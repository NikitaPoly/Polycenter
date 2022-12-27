import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { Host } from "../../../static-content/utils";
//import { GoResponseBody } from "../sds/signup"; //type for the resposne
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
      //if none depauw email then redirect to signup
      //if depauw but user does not exist redirect to sign up
      //if both conditions met then "log in"
      const userEmail = user ? user.email : "";
      const isDePauw = userEmail && userEmail.includes("@depauw.edu");
      if (isDePauw) {
        const GoResponse = await fetch("http://" + Host() + ":8080/sdsUsers/checkUserExists", {
          body: JSON.stringify({ userEmail: userEmail }),
          method: "POST",
        });
        const GoResponseBody = await GoResponse.json();
        return GoResponseBody.IsUserExist ? true : "/sds/signup";
      } else {
        return "/sds/signup";
      }
    },
  },
};
export default NextAuth(authOptions);
