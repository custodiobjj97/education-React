import React, { useEffect, useRef, useState } from "react";


export const Scroll=({children})=>{
   const elementRef= useRef(null)
   const [visible,setVisible]= useState(false)
   useEffect(()=>{
     const scrollHandle=()=>{
        const top = elementRef.current.getBoundingClientRect().top
        const haflHeight = window.innerHeight * 0.6
        if((top - haflHeight) < 0){
            setVisible(!visible)
        }else{
            
        }
    }
    scrollHandle()
    window.addEventListener('scroll', scrollHandle)
    return (()=>{
        window.removeEventListener('scroll', scrollHandle)
    })
   },[])

   return (
    <section ref={elementRef} className={visible ? 'scroll visible': 'scroll'}>
        {children}
    </section>
   )
}


export default Scroll