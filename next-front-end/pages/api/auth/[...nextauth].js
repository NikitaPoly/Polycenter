import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
/*
https://next-auth.js.org/configuration/callbacks
 -
*/

export default NextAuth({
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
      const isDePauw = user.email.includes("@depauw.edu");
      if (isDePauw) {
        return true;
      } //add else if for if email not in db and depauw then redirect to signup
      else {
        return false;
      }
    },
  },
});
