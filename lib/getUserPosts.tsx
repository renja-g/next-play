import { Post } from "@/types"

export default async function getUser(userId: string): Promise<Post[]> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json()
}
