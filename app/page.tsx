'use client';
import { useEffect, useState } from 'react';
import LoadingText from './ui/Animations/Loading';
import What_I_do from './ui/Components/What_I_do';
import About from './ui/Components/About';
import Footer from './ui/Components/Footer';
import MyWork from './ui/Components/My_work';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setIsLoading(false);
    },5000)
    return ()=>clearTimeout(timer);
  },[])

  return (
    <>
    <section className="relative h-screen" id='Home'>
      <LoadingText/>
    </section>
    <section className={`overflow-hidden ${isLoading ? 'hidden':'block'}`}>
      <What_I_do/>
    </section>
    <section className={`overflow-hidden ${isLoading ? 'hidden':'block'}`} id='MyWork'>
      <MyWork/>
    </section>
    <section className={`overflow-hidden ${isLoading ? 'hidden':'block'}`} id='About'>
      <About/>
    </section>
    <section className={`overflow-hidden ${isLoading ? 'hidden':'block'}`} id='Footer'>
      <Footer/>
    </section>
    </>
    
  );
}
