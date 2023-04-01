import './globals.css'

export const metadata = {
  title: 'Home Page',
  description: 'This is the home page	',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <h1>My NavBar</h1>
        </nav>
        {children}
      </body>
    </html>
  )
}
