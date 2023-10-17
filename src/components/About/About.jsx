import React from "react";
import {FaBook,FaCertificate,FaPersonBooth} from 'react-icons/fa'
import './style.css'

const About =()=>{
  return (
    <section className="about">
        <div className="about-image">
            <img src="./images/about.webp" alt="" />
        </div>
        <div className="about-text">
          <span>LEARN ANYTHING</span>
          <h2>Benefits About Online Learning<br/> 
          Expertise</h2>
          <ul className="list-about">
            <li>
                <FaBook size='40' color="#fb5"/>
                <div>
                    <h3>Online Courses</h3>
                    <p>Far far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts.</p>
                </div>
            </li>
            <li>
            <FaCertificate size='40' color="#fb5"/>
                <div>
                <h3>Earn A Certificates</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
            </li>
            <li>
            <FaPersonBooth size='40' color="#fb5"/>
              <div>
                <h3>Learn with Expert</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </li>
          </ul>
        </div>
    </section>
  )
}

export default About