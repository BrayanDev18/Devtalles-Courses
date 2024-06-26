import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

interface JWT {
  accessToken?: string
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account={}, profile }) {
      try {
        const response = await fetch('http://10.2.20.102:5000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: profile?.email,
          })
        });

        if (!response.ok) {
          console.log("error ");
          console.log(response);
          
        }

        console.log(response);
        

        const res = await response.json();
        console.log("API response:", res);

        return true;
      } catch (error) {
        console.error("Error during sign in:", error);
        return false;
      } 
    },
    async jwt({ token, account }) {
      if (account && account.accessToken) {
        token.accessToken = account.accessToken as string;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      return session;
    }
  },
});

export { handler as GET, handler as POST };