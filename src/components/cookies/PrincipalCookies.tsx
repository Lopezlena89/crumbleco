import { cookiesData } from "@/database/cookies"
import { mainHistory } from "@/database/history"
import { Button } from "@nextui-org/react"
import Image from "next/image"


export const PrincipalCookies = () => {
  return (
    
    <div className="w-full h-[700px] md:h-[850px] relative bg-gradient-to-b from-red-100 to-white flex justify-start overflow-hidden">
        <div className="w-full sm:w-1/2 lg:w-[70%] h-full flex justify-center">
            <div className="w-full  lg:w-[70%]h-full flex flex-col items-center justify-center">
                <h2 className="font-market text-6xl lg:text-8xl w-[400px] text-center text-amber-900">{cookiesData.title}</h2>
                <h3 className="font-century text-xl w-[400px] text-center py-5 text-amber-900">{cookiesData.subtitle}</h3>
                <Button className="bg-[#d2b3b8] text-white">
                  {cookiesData.button}
                </Button>
                <div className="w-full sm:w-[70%] h-[300px] absolute bottom-0 flex justify-center items-center">
                  <Image width={200} height={200} alt="cookie1" src="/elementos/cookie1.png"/>
                  <Image width={200} height={200} alt="cookie2" src="/elementos/cookie2.png"/>
                  <Image width={200} height={200} alt="cookie3" src="/elementos/cookie3.png"/>
                  <Image width={200} height={200} alt="cookie4" src="/elementos/cookie4.png"/>
                  <Image width={200} height={200} alt="cookie5" src="/elementos/cookie5.png"/>
                  <Image width={200} height={200} alt="cookie6" src="/elementos/cookie6.png"/>
                </div>
            </div>
        </div>
        <Image width={700} height={700} className="absolute hidden sm:block -top-10 -right-[15%] lg:-right-[5%] " src="/minibox.webp" alt="main-cookies"/>
    </div>
    
  )
}
