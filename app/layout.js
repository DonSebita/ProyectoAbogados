import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function RootLayout({children}) {
  return (
    <html>
      <head>
      </head>
      <body>
        <header>
          <Navbar/>
        </header>
        {children}
        <Footer/> 
      </body>
    </html>
  )
}