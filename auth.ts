// auth.ts
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async session({ session, user }) {
      if (user && user.id) {
        session.user.id = user.id;  // Add the id to session.user
      }
      return session;
    }
  }
});
