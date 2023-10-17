import React from "react";
import {BsPerson,BsPersonHeart,BsCalendar,BsProjector} from 'react-icons/bs'
import './style.css'

const Banner=()=>{
  return (
     <section className="banner">
        
        <div className="box-banner">
           <BsPerson size='50'/>
           
        <div>
            <h3>3,000</h3>
            <p>SUCCESS STORIES</p>
        </div>
        </div>
        <div className="box-banner">
            <BsPersonHeart size='50'/>
            <div>
                <h3>320</h3>
                <p>TRUSTED TUTORS</p>
            </div>
        </div>
        <div className="box-banner">
            <BsCalendar size='50'/>
            <div>
                <h3>1,000</h3>
                <p>SCHEDULES</p>
            </div>
        </div>
        <div className="box-banner">
            <BsProjector size="50"/>
            <div>
            <h3>587</h3>
            <p>COURSES</p>
            </div>
        </div>
     </section>
  )
}

export default Banner