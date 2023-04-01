import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to the Homepage!</h1>
      <Link href="/about">About</Link>
    </main>
  )
}
