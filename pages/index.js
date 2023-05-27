import Head from 'next/head'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
export default function Home() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <div className="Body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Quod sint dolore quisquam non blanditiis debitis illum temporibus inventore deleniti delectus officia quasi, eligendi aspernatur dicta necessitatibus cumque nulla consequatur saepe.</p>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
