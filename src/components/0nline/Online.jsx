import React from "react";
import {data} from '../../data/data'
import './style.css'

const Online=()=>{

    
    return (
        <section className="online">
            <span>COURSES</span>
            <h2>Browse Our Online Courses</h2>
            <div className="courses-online">
                {data.map((item)=>{
                    return (
                        <div key={item.id} className="online-course">
                           <img src={item.img} alt="" />
                           <h3>{item.title}</h3>
                           <p>{item.courses}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}


export default Online