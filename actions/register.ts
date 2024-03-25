"use server";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
export const register = async (values: any) => {
  console.log(values);
  if (!values) return { error: "Values are empty" };

  const { username, email, password } = values;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const existingUser = await getUserByEmail(email);
    if (existingUser) return { error: "Email already used" };
    await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    return { error: "Error creating user" };
  }
  return { success: "User created" };
};
