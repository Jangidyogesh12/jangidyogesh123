import Image from "next/image";
import About_text from "./About_text";
console.log(About_text);
const About = ()=>{
    return(
        <>
        <div className="flex items-center justify-center border-t-2 border-black w-[95vw] relative translate-x-[5vw] pb-8 overflow-hidden"></div>
        <div className="flex justify-center">
            <div className="text-5xl text-black text-center">
                <h1 className="text-5xl pb-4">About</h1>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row justify-center items-center border-[#0000001d] shadow-2xl border-2 w-[80vw]">
                <Image src="/my_pic.jpg" alt="my_pic" height={280} width={280} />
                <div className="w-full md:w-[40vw] ml-0 p-10 md:ml-28 text-black">
                    <p className="text-justify cursor-default text-black" >{About_text}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;