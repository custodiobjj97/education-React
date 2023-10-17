import Header from "./components/Header/Header"
import './App.css'
import Home from "./components/Home/Home"
import Scroll from "./components/Scroll/Scroll"
import About from "./components/About/About"
import Banner from "./components/Banner/Banner"
import Courses from "./components/Courses/Courses"
import Online from "./components/0nline/Online"
import Blog from "./components/Blog/Blog"
import Testimonial from "./components/Testimonial/Testimonial"
import Pricing from "./components/Pricing/Pricing"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
 

  return (
    <>
      <Header/>
       <Home/>
       <Scroll children={<About/>}/>
       <Scroll children={<Banner/>}/>
       <Scroll children={<Courses/>}/>
       <Scroll children={<Online/>}/>
       <Scroll children={<Blog/>}/>
       <Scroll children={<Testimonial/>}/>
       <Scroll children={<Pricing/>}/>
       <Scroll children={<Contact/>}/>
       <Footer/>
       
    </>
  )
}

export default App
