import { mainHistory } from "@/database/history"
import { letterMain } from "@/database/main"
import { Button } from "@nextui-org/react"


export const CookieCarePage = () => {
  return (
    <>
        <main className="w-full h-auto flex flex-col p-[3%] ">
            <div className="w-full mb-[5%] md:mb-[3%]">
                <h2 className="text-center text-6xl font-market">{mainHistory.title}</h2>
            </div>
            <section className="w-full h-auto flex flex-col-reverse md:flex-row md:gap-10 lg:gap-20 ">
                <div className="w-full md:w-[60%] h-full flex items-center justify-center"> 
                    <div className="rounded-sm shadow-xl w-[100%] h-96  bg-[url('/hello_friends.webp')] bg-cover  bg-center"  /> 
                </div>
                <div className="w-full md:w-[40%] pb-10 md:py-0  h-full flex flex-col items-center justify-center text-center text-sm md:text-xs lg:text-sm  ">
                    <p className="font-century ">{mainHistory.paragraph1}</p>
                    <p className="font-century  py-5">{mainHistory.paragraph2}</p>
                    <p className="font-century ">{mainHistory.paragraph3}</p>
                </div>
            </section> 
            <section className="w-full h-auto py-10 flex flex-col md:flex-row md:gap-10 lg:gap-20 ">
                <div className="w-full md:w-[60%] pb-10 md:py-0  h-full flex flex-col items-center justify-center text-center text-sm md:text-xs lg:text-sm  ">
                    <p className="font-century ">{mainHistory.paragraph4}</p>
                    <p className="font-century  py-5">{mainHistory.paragraph5}</p>
                    <p className="font-century ">{mainHistory.paragraph6}</p>
                    <p className="font-century py-5">{mainHistory.paragraph7}</p>
                </div>
                <div className="w-full md:w-[40%] h-full flex items-center justify-center"> 
                    <div className="rounded-sm shadow-xl w-[100%] h-96  bg-[url('/history2.webp')] bg-cover bg-center"  /> 
                </div>
            </section> 
            <section className="w-full h-auto flex flex-col-reverse md:flex-row md:gap-10 lg:gap-20 ">
                <div className="w-full md:w-[60%] h-full flex items-center justify-center"> 
                    <div className="rounded-sm shadow-xl w-[100%] h-96  bg-[url('/history3.webp')] bg-cover bg-center md:bg-[center_top_-10rem]"  /> 
                </div>
                <div className="w-full md:w-[40%] pb-10 md:py-0  h-full flex flex-col items-center justify-center text-center text-sm md:text-xs lg:text-sm  ">
                    <p className="font-century ">{mainHistory.paragraph8}</p>
                    <p className="font-century  py-5">{mainHistory.paragraph9}</p>
                    <p className="font-century ">{mainHistory.paragraph10}</p>
                </div>
            </section> 
        </main>
    </>
  )
}
