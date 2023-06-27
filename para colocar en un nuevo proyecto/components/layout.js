import Navbar from  './Navbar'
import Footer from  './Footer'
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
