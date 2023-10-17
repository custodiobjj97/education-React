import React from "react";
import './style.css'

const Testimonial=()=>{
    
   return (
    <section className="testimonial">
        <span className="subtitle">TESTIMONIAL</span>
        <h2>Our Successful Students</h2>
        <div className="group-testimonial">
            <div className="card-testimonial">
                <span>
                    <img src='./images/testo/t1.webp' alt="" /> 
                    <p><strong>ROGER SCOTT</strong><br/>
                     MARKETING MANAGER</p>
                </span>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className="card-testimonial">
               <span>
                    <img src='./images/testo/t2.webp' alt="" /> 
                      <p><strong>ROGER SCOTT</strong><br/>
                     MARKETING MANAGER</p>
                </span>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className="card-testimonial">
            <span>
                    <img src='./images/testo/t3.webp' alt="" /> 
                    <p><strong>ROGER SCOTT</strong><br/>
                     MARKETING MANAGER</p>
                </span>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
        </div>
    </section>
   )
}

export default Testimonial