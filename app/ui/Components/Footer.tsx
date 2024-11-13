import Image from "next/image"
const Footer = ()=>{
    return (
        <>
        <div className="flex items-center justify-center border-t-2 border-black w-[95vw] relative translate-x-[5vw] overflow-hidden pb-8"></div>
        <h1 className="text-center text-5xl text-black">Get in Touch</h1>
        <div className="flex items-center justify-center w-full pb-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 p-2">
                <div className="flex flex-row w-[350px] h-[200px] border-[2px] bg-[black] rounded-xl">
                    <div className="flex flex-row items-center h-[120px] w-full">
                        <div className="ml-4 mt-8 w-[100px] h-full">
                            <div className="flex items-center justify-center border-[1px] rounded-xl border-[#ffffff79] w-[100px] overflow-hidden ">
                                <Image src="/Social_links/X-logo.png" alt="Twitter" width={700} height={700} className="h-[100px] w-[100px] object-cover"/>
                            </div>
                            <h1 className="text-center pt-2">Twitter(X)</h1>
                            <div className="text-[#ffffff95] text-sm">
                                <p>@yogesharma2003</p>
                            </div>
                        </div>
                        <button className="w-[100px] h-[30px] bg-[#ffffff4e] border-[1px] border-[#ffffff7d] rounded-lg ml-24 hover:bg-[#ffffff57] active:scale-95 ease-in-out shadow-2xl" onClick={()=>window.location.href="https://x.com/yogesharma2003"}>Follow</button>
                    </div>
                </div>
                <div className="flex flex-row w-[350px] h-[200px] border-[2px] bg-[black] rounded-xl">
                    <div className="flex flex-row items-center h-[120px] w-full">
                        <div className="ml-4 mt-8 w-[100px] h-full">
                            <div className="flex items-center justify-center border-[1px] rounded-xl border-[#ffffff79] w-[100px] overflow-hidden ">
                                <Image src="/Social_links/g-mail.png" alt="Gmail" width={700} height={700} className="h-[100px] w-[100px] object-cover"/>
                            </div>
                            <h1 className="text-center pt-2">Gmail</h1>
                            <div className="text-[#ffffff95] text-sm">
                                <p>yogeshsurat2003@gmail.com</p>
                            </div>
                        </div>
                        <button className="w-[100px] h-[30px] bg-[#ffffff4e] border-[1px] border-[#ffffff7d] rounded-lg ml-28 hover:bg-[#ffffff57] active:scale-95 ease-in-out shadow-2xl" onClick={()=>window.location.href="mailto:jangidyogesh123@gmail.com"}>Send Mail</button>
                    </div>
                </div>
                <div className="flex flex-row w-[350px] h-[200px] border-[2px] bg-[black] rounded-xl">
                    <div className="flex flex-row items-center h-[120px] w-full">
                        <div className="ml-4 mt-8 w-[100px] h-full">
                            <div className="flex items-center justify-center border-[1px] rounded-xl border-[#ffffff79] w-[100px] overflow-hidden ">
                                <Image src="/Social_links/linkedIn.png" alt="LinkedIn" width={700} height={700} className="h-[100px] w-[100px] object-cover"/>
                            </div>
                            <h1 className="text-center pt-2">LinkedIn</h1>
                            <div className="text-[#ffffff95] text-sm w-[200px]">
                                <p>yogesh-sharma-45201b231</p>
                            </div>
                        </div>
                        <button className="w-[100px] h-[30px] bg-[#ffffff4e] border-[1px] border-[#ffffff7d] rounded-lg ml-28 hover:bg-[#ffffff57] active:scale-95 ease-in-out shadow-2xl" onClick={()=>window.location.href="https://www.linkedin.com/in/yogesh-sharma-45201b231/"}>Connect</button>
                    </div>
                </div>
                <div className="flex flex-row w-[350px] h-[200px] border-[2px] bg-[black] rounded-xl">
                    <div className="flex flex-row items-center h-[120px] w-full">
                        <div className="ml-4 mt-8 w-[100px] h-full">
                            <div className="flex items-center justify-center border-[1px] rounded-xl border-[#ffffff79] w-[100px] overflow-hidden ">
                                <Image src="/Social_links/github.webp" alt="Github" width={700} height={700} className="h-[100px] w-[100px] object-cover"/>
                            </div>
                            <h1 className="text-center pt-2">Github</h1>
                            <div className="text-[#ffffff95] text-sm w-[200px]">
                                <p>Jangidyogesh12</p>
                            </div>
                        </div>
                        <button className="w-[100px] h-[30px] bg-[#ffffff4e] border-[1px] border-[#ffffff7d] rounded-lg ml-28 hover:bg-[#ffffff57] active:scale-95 ease-in-out shadow-2xl" onClick={()=>window.location.href="https://github.com/Jangidyogesh12"}>Follow</button>
                    </div>
                </div>
                <div className="flex flex-row w-[350px] h-[200px] border-[2px] bg-[black] rounded-xl">
                    <div className="flex flex-row items-center h-[120px] w-full">
                        <div className="ml-4 mt-14 w-[100px] h-full">
                            <div className="flex items-center justify-center border-[1px] rounded-xl border-[#ffffff79] w-[100px] h-[70px] overflow-hidden">
                                <Image src="/Social_links/youtube.png" alt="YouTube" width={700} height={700} className="h-[100px] w-[100px] object-cover"/>
                            </div>
                            <h1 className="text-center pt-6">YouTube</h1>
                            <div className="text-[#ffffff95] text-sm w-[200px]">
                                <p>Yogesh Sharma</p>
                            </div>
                        </div>
                        <button className="w-[100px] h-[30px] bg-[#ffffff4e] border-[1px] border-[#ffffff7d] rounded-lg ml-28 hover:bg-[#ffffff57] active:scale-95 ease-in-out shadow-2xl" onClick={()=>window.location.href="https://www.youtube.com/@YogeshSharma-vw7fg"}>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <h1 className="bg-[#00000086] text-sm pl-8 text-[#ffffffbb]">CreatedBy: @YogeshSharma</h1>
        </>
    )
}

export default Footer