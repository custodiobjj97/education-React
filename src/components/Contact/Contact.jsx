import React from "react";
import {FaLocationArrow,FaPhone, FaPlane} from 'react-icons/fa'
import './style.css'

const Contact =()=>{
  return (
    <section className="contact">
        <span className="subtitle">OUR CONTACT</span>
        <h2>Contact</h2>
    <div className="contact-text">
        <ul>
            <li>
             <FaLocationArrow/>
            203 Fake St. Mountain View, San Francisco, California, USA
            </li>
            <li>
                <FaPhone/>
                +2 392 3929 210
            </li>
            <li>
                <FaPlane/>
                info@yourdomain.com
            </li>
        </ul>
    </div>
    <form>
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <input type="testt" placeholder="Subject"/>
        <textarea></textarea>
        <button>submit</button>
    </form>
    </section>
  )
}

export default Contact