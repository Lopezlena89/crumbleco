'use client'

import useStateMenuStore from "@/store/stateMenuStore";
import Link from "next/link";
import { VscClose } from "react-icons/vsc";
import { IoHomeOutline } from "react-icons/io5";
import { PiCookie,PiCakeLight,PiHandshakeLight } from "react-icons/pi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";

import Image from "next/image";



export const MenuBar = () => {
  const {setStateMenu,stateMenu} = useStateMenuStore();
  

  return (
    <>
        {stateMenu && (
          <>
            <div className="fixed z-20 bg-[rgba(0,0,0,0.3)] top-0 left-0 w-full h-screen "/>
            <div className="w-[80%] sm:w-[40%] lg:w-[25%] h-screen bg-white/90 fixed z-20 top-0 left-0 drop-shadow-xl flex flex-col ">
                <div className="w-full h-[10%] px-[10%] flex justify-end items-center ">
                  <VscClose color="#d07f7c" size={30} className="cursor-pointer duration-300" onClick={()=>setStateMenu()}/>
                </div>
                <div className="w-full h-[5%] px-[10%]  flex justify-start items-center ">
                  <div className="flex items-center w-[100%] h-[100%] px-[5%] rounded-lg hover:bg-red-100">
                    <IoHomeOutline color="#d07f7c" size={20}/>
                    <Link href={'/'} onClick={()=>setStateMenu()} className=" cursor-pointer pl-3 text-[#d07f7c]">Home</Link>
                  </div>
                </div>
                <div className="w-full h-[5%] px-[10%]  flex justify-start items-center">
                  <div className="flex items-center w-[100%] h-[100%] px-[5%] rounded-lg hover:bg-red-100">
                    <PiCookie color="#d07f7c" size={20}/>
                    <Link href={'/cookies'} onClick={()=>setStateMenu()} className="cursor-pointer pl-3 text-[#d07f7c]">Cookies</Link>
                  </div>
                </div>
                <div className="w-full h-[5%] px-[10%]  flex justify-start items-center">
                  <div className="flex items-center w-[100%] h-[100%] px-[5%] rounded-lg hover:bg-red-100">
                    <PiCakeLight color="#d07f7c" size={20}/>
                    <Link href={'/specials'} className="cursor-pointer text-[#d07f7c] pl-3">Crumble Specials</Link>
                  </div>
                </div>
                <div className="w-full h-[5%] px-[10%]  flex justify-start items-center">
                  <div className="flex items-center w-[100%] h-[100%] px-[5%] rounded-lg hover:bg-red-100">
                    <Image src="/milkshake--milkshake-drink-takeaway-cup-cold-beverage.png" width={18} height={18} alt="drizzel"/>
                    <Link href={'/cold'} className=" cursor-pointer text-[#d07f7c] pl-3">Cold Bar</Link>
                  </div>
                </div>
                <div className="w-full h-[5%] px-[10%]  flex justify-start items-center">
                  <div className="flex items-center w-[100%] h-[100%] px-[5%] rounded-lg hover:bg-red-100">
                    <PiHandshakeLight color="#d07f7c" size={20}/>
                    <Link href={'/colabs'} className=" cursor-pointer text-[#d07f7c] pl-3">Colabs</Link>
                  </div>
                </div>
                <div className="w-[60px] h-[0.5px] bg-[#ecb3b0] duration-300 ml-[10%] my-[5%]" />
                <div className="w-full h-[5%] px-[10%]  flex justify-start items-center">
                  <div className="flex items-center w-[100%] h-[100%] px-[5%] rounded-lg ">
                    <HiOutlineBuildingStorefront color="#d07f7c" size={20}/>
                    <Link href={'/history'} onClick={()=>setStateMenu()} className=" cursor-pointer pl-3 text-[#d07f7c]">Story</Link>
                  </div>
                </div>
                
            </div>
          </>
        )}
    </>
  )
}
