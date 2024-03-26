"use server";

import { signOut } from "@/packages/nextauth/auth";

export const logout = async () => {
  await signOut();
};
