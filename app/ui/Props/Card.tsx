import React from "react";
import Image from "next/image"

// Define the interface for the props
export interface CardProps {
  title: string;
  imageURL: string;
  description: string;
  Link : string;
}

const Card:React.FC<CardProps>=({title, imageURL, description, Link})=>{
    return(
    <>
    <a href={Link}>
        <div className="flex-row items-center relative border border-solid border-black rounded-sm h-[25vh] sm:h-[30vh] md:h-[40vh] w-[80vw] md:w-[30vw] overflow-hidden group cursor-pointer hover:scale-105 transition-transform ease-in-out duration-150">
            <Image width={700} height={700} src={imageURL} alt={title} className="object-cover h-full w-full"/>
            <div className="absolute right-0 left-0 h-[20vh] w-full bg-[#0000009a] duration-500 ease-in-out transform translate-y-[20vh] group-hover:translate-y-[-20vh] transition-transform">
                <h1 className="text-center text-xl">{title}</h1>
                <p className="pl-4 pr-4 text-justify">{description}</p>
            </div>
        </div>
    </a>
    </>
    
    )
}

export default Card;