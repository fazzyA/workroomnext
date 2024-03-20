"use server"
import { getUserByEmail } from '@/data/user'
import { db } from '@/lib/db'
import bcrypt from 'bcrypt'
export const register = async (values: any) => {
  console.log(values)
  if(!values) return { error: "Values are empty"}

  const { username, email, password } = values
  const hashedPassword = await bcrypt.hash(password, 10)
  const existingUser = await getUserByEmail(email)
  if(existingUser) return { error: "Email already used" }
  await db.user.create({
    data:{
      username,
      email,
      password: hashedPassword
    }
  })
  return { success: "User created"}
}