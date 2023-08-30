
import connectDB from "@/libs/monogodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

interface IAPIUser {
  user:{
    name:string, 
    email:string, 
    image:string
  },
  account:any
}

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages:{
    signIn: '/auth/signin',
  },
  callbacks: {
    async signIn({ user, account }:any) {
      if (account.provider === "google") {
        const { name, email, image } = user;
        try {
          await connectDB();
          const userExists = await User.findOne({ email });

          if (!userExists) {
            const res = await fetch("http://localhost:3000/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                image
              }),
            });

            if (res.ok) {
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }

      return user;
    },
  },

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };