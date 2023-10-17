import React from "react";
import {FaArrowRight} from 'react-icons/fa'
import Scroll from "../Scroll/Scroll";
import './style.css'

const Home =()=> {
  return (
     <section className="home">
        <Scroll>
        <h3>welcome academia</h3>
        <h1>Best Online Edication Expertise</h1>
        <p>Far far away, behind the wed mountains,, far from the countries Vokalia Consonatia, there<br/>
         libe the blind texts
        </p>
        <div className="nav-btns">
            <a className="btn-primary" href="#">GET STARTED NOW <FaArrowRight/> </a>
            <a className="btn-secundary" href="#">VIEW COURSE <FaArrowRight/>  </a>
        </div>
        </Scroll>
        
     </section>
  )
}

export default Home