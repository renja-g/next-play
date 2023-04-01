import { User } from "@/types"

export default async function getUser(userId: string): Promise<User> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json()
}