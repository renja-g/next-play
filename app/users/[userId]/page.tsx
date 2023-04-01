import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"
import { Metadata } from "next"

type Params = {
  params: {
    userId: string
  }
}

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
  const userData = getUser(userId)

  const user = await userData

  return {
    title: user.name,
    description: `This is ${user.name}'s profile`,
  }
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData = getUser(userId)
  const userPostsData = getUserPosts(userId)

  // const [user, posts] = await Promise.all([userData, userPosts])

  const user = await userData

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* @ts-expect-error Async Server Component */}
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  )
}
