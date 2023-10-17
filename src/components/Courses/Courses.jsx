import React from "react";
import {BsStar} from 'react-icons/bs'
import './style.css'

const Courses =()=>{
    return (
        <section className="courses">
            <span>OUR COURSES</span>
            <h2>Explore Our Popular Online Courses</h2>
            <div className="group-card">
                <div className="card">
                    <span>
                        <img className="icon" src="./images/courses/c1.png" alt="" />
                      <h3>Introducing to Software<br/> 
                      Engineering</h3>
                    </span>
                    <span>
                      <BsStar color="#0bf0dd"/>
                      <BsStar color="#0bf0dd"/>
                      <BsStar color="#0bf0dd"/>
                      <BsStar color="#0bf0dd"/>
                      <BsStar color="#0bf0dd"/> (5.0)
                    </span>
                    <span>
                        <img src="images/back.webp" alt="" />
                        <p>by John Smith</p>
                    </span>
                    <p>50 lectures (190 hrs)</p>
                    <div><h3>$100 All Course / $15 per month</h3></div>
                    <a className="btn-card" href="#">ENROLL NOW!</a>
                </div>
                <div className="card">
                <span>
                        <img className="icon" src="./images/courses/c2.png" alt="" />
                      <h3>Enhancing Adobe<br/> 
                      Photoshop CC 2020 Skills</h3>
                    </span>
                    <span>
                      <BsStar color="#0bf0dd"/>
                      <BsStar color="#0bf0dd"/>
                      <BsStar color="#0bf0dd"/>
                      <BsStar color="#0bf0dd"/>
                      <BsStar color="#0bf0dd"/> (5.0)
                    </span>
                    <span>
                        <img src="images/back.webp" alt="" />
                        <p>by John Smith</p>
                    </span>
                    <p>30 lectures (125 hrs)</p>
                    <div><h3>$200 All Course / $25 per month</h3></div>
                    <a className="btn-card" href="#">ENROLL NOW!</a>
                </div>
                <div className="card">
                <span>
                        <img className="icon" src="./images/courses/c3.png" alt="" />
                      <h3>HTML, CSS, and Javascript<br/> 
                      for Web Developers</h3>
                    </span>
                    <span>
                      <BsStar color="#0bf0dd"/>
                      <BsStar color="#0bf0dd"/>
                      <BsStar color="#0bf0dd"/>
                      <BsStar color="#0bf0dd"/>
                      <BsStar color="#0bf0dd"/> (5.0)
                    </span>
                    <span>
                        <img src="images/back.webp" alt="" />
                        <p>by John Smith</p>
                    </span>
                    <p>30 lectures (125 hrs)</p>
                    <div><h3>$200 All Course / $25 per month</h3></div>
                    <a className="btn-card" href="#">ENROLL NOW!</a>
                </div>
                
            </div>
        </section>
    )
}


export default Courses