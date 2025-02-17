"use server";

import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/authentication/prisma";
import Credentials from "next-auth/providers/credentials";
import saltAndHashPassword from "@/lib/hash-password-util";
import getUserFromDb from "@/lib/get-user-from-db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        const { email, password } = credentials || {};

        const pwHash = await saltAndHashPassword(password);

        if (typeof pwHash === "string") {
          user = await getUserFromDb(email, pwHash);
        }

        if (!user) {
          throw new Error("Invalid credentials.");
        }

        return user;
      },
    }),
  ],
});
