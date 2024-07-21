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
        <div className="w-full h-[60px] bg-white/95 flex justify-between items-center px-[6%] sm:px-[10%] fixed shadow-xl z-10  border-[rgba(0,0,0,0.1)] border-b-[0.1px]">
            <div className="flex items-center w-[90px] ">
              <VscMenu size={22} className="cursor-pointer hover:fill-[rgb(255,21,121)] duration-300" onClick={()=>setStateMenu()}/>
              
              <PiMapPinLight size={22} className="ml-3 hidden sm:block cursor-pointer hover:fill-[rgb(255,21,121)] duration-300"  />
            </div>
            
              <Image className="flex items-center cursor-pointer " alt="logo cumbleco_" height={100} width={100} quality={100} priority src="/crumblr-01.png"/>
           
            <div className="items-center w-[90px] flex justify-end ">
                <Basket/>
                <PiWhatsappLogoThin size={22} className="mx-3 hidden sm:block cursor-pointer hover:fill-[rgb(255,21,121)] duration-300" />
                <PiInstagramLogoThin size={22} className="ml-3 sm:ml-0 cursor-pointer hover:fill-[rgb(255,21,121)] duration-300" />
            </div>
            
            
        </div>    
    </>
  )
}
