import Scroll from "../Animations/Scroll";
import What_I_doText from "./What_I_doText";
const What_I_do=()=>{
    return(
        <>
        <div className="flex items-center justify-center border-t-2 border-black  w-[95vw] relative translate-x-[5vw] pb-8 overflow-hidden"></div>
        <div className="flex flex-col md:flex-row items-center  pb-16">            
            <h1 className=" text-5xl text-black md:translate-x-[8vw] relative pb-8 md:pb-0">What I Do</h1> 
            <p className=" w-[90vw] md:w-1/2 text-black md:translate-x-[20vw] text-lg text-justify">{What_I_doText}</p>
        </div>
        <div className="flex justify-center cursor-pointer pb-16">
            <button className="flex items-center justify-center bg-blue-800 h-[100px] w-[100px] text-center border-2 border-[#ffffffd7] rounded-[50px] shadow-[0_10px_15px_-3px_rgba(0,0,0.4,0.6),0_4px_6px_-2px_rgba(0,0,0.2,0.4)] hover:scale-105 transform active:scale-95
            transition duration-150" onClick={()=>Scroll("About")}>About</button>
        </div>
        
        </>
    )
}

export default What_I_do;