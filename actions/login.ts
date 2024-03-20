"use server"
export const login = async (values: any) => {
  console.log(values)
  if(!values) return { error: "values empty"}
  return { success: "data sent"}
}