'use client';
import { useEffect, useState } from "react";
import { roboto_slab } from "../Font";
import Scroll from "./Scroll";
const Nav_bar:React.FC=()=>{
    const [navSlider, setNavSlider] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY > 30){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll',handleScroll);

        // clean up the listener
        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        };
    },[])

    useEffect(()=>{
        const timer:NodeJS.Timeout = setTimeout(()=>{
            setNavSlider(true)
        },5000);
        return ()=>clearTimeout(timer);
    },[]);

    return (
        <div className={`flex flex-row-reverse h-12 items-center justify-center md:justify-start transition-transform w-full duration-[2000ms] transform ${navSlider ? 'translate-y-0' : '-translate-y-12'} fixed z-20 ${isScrolled ? 'bg-[#000000a3] text-white':'bg-[rgba(0,0,0,0.26)] text-black'}`}>
            <h1 className={`${roboto_slab.className} pr-0 md:pr-20 cursor-pointer`}onClick={()=>Scroll('Footer')}>Get in Touch</h1> 
            <h1 className={`${roboto_slab.className} pr-7 cursor-pointer`} onClick={()=>Scroll('About')}>About</h1>
            <h1 className={`${roboto_slab.className} pr-7 cursor-pointer `} onClick={()=>Scroll('MyWork')}>Projects</h1>
            <h1 className={`${roboto_slab.className} pr-7 cursor-pointer `} onClick={()=>Scroll('Home')}>Home</h1>
        </div>
    )
}

export default Nav_bar;