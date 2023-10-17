import React from "react";
import {BsPerson,BsCalendar,BsMessenger} from 'react-icons/bs'
import './style.css'

const Blog=()=>{
  return (
    <section className="blog">
        <span className="subtitle">OUR BLOG</span>
        <h2>Recent From Blog</h2>
        <div className="group-card-blogs">
            <div className="card-blog">
                <img src="./images/blog/b1.webp" alt="" />
                <div className="header-blog">
                <span><BsPerson/> ADMIN</span> <span><BsCalendar/> JAN. 18 2021,</span> <span> <BsMessenger/>  3 COMMENTS</span>
                </div>
                <h3>Build your Dream Software & Engineering<br/> 
                Career</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
            <div className="card-blog">
            <img src="./images/blog/b2.webp" alt="" />
                <div className="header-blog">
                <span><BsPerson/> ADMIN</span> <span><BsCalendar/> API. 25, 2022,</span> <span> <BsMessenger/> 2021 3 COMMENTS</span>
                </div>
                <h3>Build your Dream Software & Engineering<br/> 
                Career</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
            <div className="card-blog">
            <img src="./images/blog/b3.webp" alt="" />
                <div className="header-blog">
                <span><BsPerson/> ADMIN</span> <span><BsCalendar/> MAY. 15, 2022</span> <span> <BsMessenger/>  3 COMMENTS</span>
                </div>
                <h3>Build your Dream Software & Engineering<br/> 
                Career</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
        </div>
    </section>
  )
}

export default Blog