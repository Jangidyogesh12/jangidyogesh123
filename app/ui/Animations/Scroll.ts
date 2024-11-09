const Scroll=(sectionId:string)=>{
    const element:HTMLElement | null = document.getElementById(sectionId); 
    if(element){
        element.scrollIntoView({behavior:'smooth'})
    }
};

export default Scroll; 