import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function RootLayout({children}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}