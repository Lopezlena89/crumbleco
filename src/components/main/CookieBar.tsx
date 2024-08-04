'use client'
import { Button } from "@nextui-org/react"
import Image from "next/image"
import { cookieBar } from '../../database/main';
import Link from "next/link";


export const CookieBar = () => {
  return (
    <>
    
        <div className="w-full px-[0%] my-[10%] md:my-[0%] md:mb-[5%] md:px-[3%] drop-shadow-md">
          <div className="w-[100%]  rounded-lg h-auto bg-[#ecb3b0] mb-[10px] flex flex-col  md:flex-row"> 
            <div className="h-[350px] md:h-auto md:w-[40%] flex flex-col justify-center relative items-center p-[5%] px-[10%] md:px-[2%]">
                
                <p className="font-market text-white flex  text-6xl text-center z-10">
                  {cookieBar.title}
                  <Image width={60} height={60} alt="item"  src="/crumble-8.png"/>
                  </p>
                <p className="text-white font-century text-center z-10">{cookieBar.cookie}</p>
                <Link href="/cookies">
                  <Button   className="mt-5 text-[#ecb3b0] h-8 rounded-md bg-white z-10" >
                  {/* <Button  color="danger" className="mt-5 text-black h-8 rounded-md bg-white" > */}
                    {cookieBar.button}
                  </Button>
                </Link>
            </div>
            <div className="rounded-lg h-[350px] md:h-[500px] md:w-[60%]  bg-[url('/0W4A8657.webp')] bg-cover bg-center"  /> 
          </div>
        </div>
    </>
  )
}
