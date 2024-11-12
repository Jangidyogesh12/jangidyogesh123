'use client';
import React, { useEffect, useState } from "react";
import { roboto_slab } from "../Font";
import Nav_bar from "./Nav_bar";
import Scroll from "./Scroll";

const LoadingText: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [sliderOn, setSlider] = useState(false);
    const [slider_2, setSlider2]  = useState(false);
    const [convolutionStep, setConvolutionStep] = useState(0);
    const [showConvolution, setShowConvolution] = useState(true);

    
    const kernels = [
        [[1,0,1],[0,1,0],[1,0,1]],
        [[0,1,0],[1,1,1],[0,1,0]],
        [[1,1,1],[1,1,1],[1,1,1]]
    ];

    const convolutionStates = [
        "Convolving Data[ * ]",
        "Processing Signal [ ** ]",
        "Applying Kernel  [ *** ]",
        "Feature Mapping [ **** ]",
        "Neural Activation[ ***** ]"
    ];

    const matrixDisplay = kernels[convolutionStep % kernels.length].map(row => row.map(val => val ? "1" : "0").join(" ")).join("\n");

        // Convolution animation
    useEffect(() => {
        const interval = setInterval(() => {
            setConvolutionStep((prev) => (prev + 1) % 15);
        }, 500);
        
        // Start main animation sequence after 3 seconds
        const mainTimer = setTimeout(() => {
            setShowConvolution(false);
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(mainTimer);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setConvolutionStep((prev) => (prev + 1) % 15);
        }, 500);
        
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timer: NodeJS.Timeout = setTimeout(() => {
            setSlider(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer: NodeJS.Timeout = setTimeout(() => {
            setIsVisible(true);
        }, 2800);
        return () => clearTimeout(timer);
    }, [sliderOn]);

    useEffect(() => {
        const timer: NodeJS.Timeout = setTimeout(() => {
            setSlider2(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, [sliderOn]);


    return (
        <div className="relative h-screen overflow-hidden">
            <Nav_bar/> {/*  Using the Nav_bar Component */}
            {showConvolution ? (
                <div className="absolute inset-0 flex items-center justify-center bg-[#2f2f2f] z-20">
                    <div className="text-center space-y-6">
                        <div className="text-blue-400 font-mono text-xl animate-pulse">
                            {convolutionStates[Math.floor(convolutionStep / 3)]}
                        </div>
                        <pre className="text-green-400 font-mono text-sm whitespace-pre leading-tight">
                            Kernel Matrix:
                            {"\n"}
                            {matrixDisplay}
                        </pre>
                        <div className="mt-4 flex justify-center space-x-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" 
                                 style={{ animationDelay: "0ms" }}></div>
                            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" 
                                 style={{ animationDelay: "100ms" }}></div>
                            <div className="w-3 h-3 bg-blue-300 rounded-full animate-bounce" 
                                 style={{ animationDelay: "200ms" }}></div>
                        </div>
                    </div>
                </div>
            ) : null}

            <div className="absolute inset-0 overflow-hidden">
                <div className="flex h-full">
                    <div className={`relative bg-[#2f2f2f] w-1/2 z-10 transition-transform duration-[2000ms] ease-out transform ${sliderOn ? '-translate-x-full' : 'translate-x-0'}`}></div>


                    <div className={`relative bg-[#2f2f2f] w-1/2 z-10 transition-transform duration-[2000ms] ease-out transform ${sliderOn ? 'translate-x-full' : 'translate-x-0'}`}></div>
                </div>  
            </div>
            <div className="absolute inset-0 overflow-hidden">
                <h1 className={`${roboto_slab.className} p-2 text-black text-6xl text-center mt-48 transition-transform duration-[2000ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-60 opacity-0'}`}>
                    Hello, I&#39;m Yogesh 
                </h1>
                <h1 className={`${roboto_slab.className} p-2 text-black text-6xl text-center transition-transform duration-[2000ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-60 opacity-0'}`}>
                    I talk with Neural Networks  
                </h1>
                <div className={`flex justify-center pt-10 transition-transform duration-[4000ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-60 opacity-0'}`}>
                    <button className="bg-blue-800 border-1 border-black rounded-md w-[100px] h-[35px] shadow-[0_10px_15px_-3px_rgba(0,0.1,0.2,0.4),0_4px_6px_-2px_rgba(0,05,0.1,0.2)] trasnform active:scale-95 hover:scale-105 transition-transform duration-150 ease-in-out" onClick={()=>Scroll('MyWork')}>My Work</button>
                </div>
            </div>
            <div className={`absolute inset-x-0 bottom-0 h-[50vh] bg-[#dacfc0] transition-transform duration-[3000ms] ${slider_2 ? 'translate-y-2/3':'translate-y-0'}`}></div>
        </div>
    );
};

export default LoadingText;