'use client'

import Image from "next/image";
import { VscMenu } from "react-icons/vsc";
import { PiMapPinLight,PiWhatsappLogoThin,PiInstagramLogoThin } from "react-icons/pi";
import { CiShoppingBasket } from "react-icons/ci";
import useStateMenuStore from "@/store/stateMenuStore";
import { Basket } from "./Basket";

export const NavBar = () => {
  const {setStateMenu} = useStateMenuStore();
  return (
    <>
        <div className="w-full h-[60px] bg-white/95 flex justify-between items-center px-[6%] sm:px-[10%] fixed shadow-xl z-20  border-[rgba(0,0,0,0.1)] border-b-[0.1px]">
            <div className="flex items-center w-[90px] ">
              <VscMenu size={22} className="cursor-pointer hover:fill-[#e19c99] duration-300" onClick={()=>setStateMenu()}/>
              
              <PiMapPinLight size={22} className="ml-3 hidden sm:block cursor-pointer hover:fill-[#e19c99] duration-300"  />
            </div>
            <div className="flex flex-col h-full  justify-center items-center overflow-hidden">
              <Image alt="logo crumble" src="/crumble-logo.png" className="relative -top-2  w-[100px] md:w-[90px] h-[100px] md:h-[90px]"  quality={100} priority  width={110} height={110}/>
              <h1 className="font-market text-xl md:text-2xl absolute -bottom-1 hover:text-[#e19c99] duration-500">Crumble Co</h1>
            </div>
              {/* <Image className="flex items-center cursor-pointer " alt="logo cumbleco_" height={100} width={100} quality={100} priority src="/crumblr-01.png"/> */}
           
            <div className="items-center w-[90px] flex justify-end ">
                <Basket/>
                <PiWhatsappLogoThin size={22} className="mx-3 hidden sm:block cursor-pointer hover:fill-[#e19c99] duration-300" />
                <PiInstagramLogoThin size={22} className="ml-3 sm:ml-0 cursor-pointer hover:fill-[#e19c99] duration-300" />
            </div>
            
            
        </div>    
    </>
  )
}
