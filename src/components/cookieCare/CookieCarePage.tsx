import { cookieCare, cookieWhy } from "@/database/cookiecare"
import { mainHistory } from "@/database/history"
import { letterMain } from "@/database/main"
import { Button } from "@nextui-org/react"
import Image from "next/image"


export const CookieCarePage = () => {
  return (
    <>
        <main className="w-full h-auto flex flex-col p-[3%] overflow-hidden">
            <div className="w-full mb-[5%] md:my-[3%]">
                <h2 className="text-center text-6xl font-market">{cookieCare.title2}</h2>
            </div>
            <section className="w-full h-auto flex flex-col-reverse md:flex-row md:gap-10 lg:gap-20 ">
                <div className="w-full md:w-[60%] h-full flex items-center justify-center"> 
                    <div className="rounded-sm shadow-xl w-[100%] h-96  bg-[url('/care1.webp')] bg-cover  bg-center"  /> 
                </div>
                <div className="w-full md:w-[40%] pb-10 md:py-0  h-full flex flex-col items-center justify-center text-center text-sm md:text-xs lg:text-sm  ">
                    <p className="font-century ">{cookieCare.title}</p>
                    <p className="font-century  py-3">{cookieCare.paragraph}</p>
                    <p className="font-century ">{cookieCare.paragraph1}</p>
                    <p className="font-century py-3">{cookieCare.paragraph2}</p>
                    <p className="font-century ">{cookieCare.paragraph3}</p>
                </div>
            </section> 
            <section className="w-full h-auto py-10 flex flex-col relative">
                <h2 className="text-center font-market text-6xl py-5 z-10">{cookieWhy.title}</h2>
                <div className="w-[100%] h-auto flex flex-col md:flex-row justify-center" >
                    <div className="w-full md:w-[40%] h-[400px] bg-[url('/care2.webp')] z-10 bg-cover  bg-center shadow-xl rounded-xl"/>
                    <div className="md:w-[50%] h-full p-10  flex justify-center items-center px-[5%] lg:px-[10%]">
                        <p className="font-century text-center">{cookieWhy.paragraph1}</p>
                    </div>
                </div>
                <div className="w-[100%] h-auto flex flex-col-reverse md:flex-row justify-center">
                    <div className="md:w-[50%] h-full p-10  flex justify-center items-center px-[5%] lg:px-[10%]">
                        <p className="font-century text-center">{cookieWhy.paragraph1}</p>
                    </div>
                    <div className="w-full md:w-[40%] h-[400px] bg-[url('/care3.webp')] z-10 bg-cover  bg-center shadow-xl rounded-xl"/>
                </div>
                <div className="w-[100%] h-auto flex flex-col md:flex-row justify-center">
                    <div className="w-full md:w-[40%] h-[400px] bg-[url('/care4.webp')] z-10 bg-cover  bg-center shadow-xl rounded-xl"/>
                    <div className="md:w-[50%] h-full p-10  flex justify-center items-center px-[5%] lg:px-[10%]">
                        <p className="font-century text-center">{cookieWhy.paragraph1}</p>
                    </div>
                </div>
                <Image className="absolute top-[30%] -left-40" width={300} height={300} alt="cookie1" src="/elementos/cookie1.png"/>
                <Image className="absolute bottom-[20%] -left-40" width={250} height={250} alt="cookie2" src="/elementos/cookie2.png"/>
                <Image className="absolute  top-[30%] -right-40" width={250} height={250} alt="cookie3" src="/elementos/cookie3.png"/>
                <Image className="absolute top-0 -left-40 " width={250} height={250} alt="cookie4" src="/elementos/cookie4.png"/>
                <Image className="absolute top-0 -right-40" width={250} height={250} alt="cookie6" src="/elementos/cookie6.png"/>
                <Image className="absolute  bottom-[20%] -right-40" width={250} height={250} alt="cookie5" src="/elementos/cookie5.png"/>
            </section> 
        </main>
    </>
  )
}
