import React from "react";
import './style.css'

const Pricing=()=>{
   return (
    <section className="pricing">
        <span className="subtitle">OUR PRICING</span>
        <h2>Pricing & Packages</h2>
        <div className="plan-prices">
            <div className="price">
            <span>BASIC PLAN</span>
            <h3>$49K</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <a className="btn-price"  href="#">get started</a>
            </div>
            <div className="price">
            <span>BEGINNER PLAN</span>
            <h3>$79K</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <a className="btn-price"  href="#">get started</a>
            </div>
            <div className="price">
            <span>PREMIUM PLAN</span>
            <h3>$109k</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <a className="btn-price"  href="#">get started</a>
            </div>
            <div className="price">
            <span>ULTIMATE PLAN</span>
            <h3>$109k</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <a  className="btn-price" href="#">get started</a>
            </div>
        </div>
    </section>
   )
}


export default Pricing