"use server";

import { signIn } from "@/packages/nextauth/auth";
import { ROUTES_PATH } from "@/utils/constants";
import { AuthError } from "next-auth";

export const login = async (values: any) => {
  if (!values) return { error: "values empty" };
  const { email, password } = values;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: ROUTES_PATH.DASHBOARD,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.message };
    }

    throw error;
  }
  return { success: "Logging in...!" };
};
