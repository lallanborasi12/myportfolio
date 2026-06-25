import './globals.css'

export const metadata = {
  title: 'Lallan Kumar | IT & Cloud System Administrator',
  description: 'Experienced IT & Cloud System Administrator with 7+ years of expertise in AWS, Linux, Windows, and cloud infrastructure management.',
  keywords: 'Cloud Administrator, AWS, System Administrator, DevOps, Linux, Windows Server, IT Infrastructure',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  )
}
