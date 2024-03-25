import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import type { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "@/data/user";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID,
    }),
    Credentials({
      name: "Credentials",

      async authorize(credentials) {
        if (!credentials) return null;

        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user = await getUserByEmail(email);

        if (!user || !user?.password) return null;

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (isValidPassword) {
          return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
