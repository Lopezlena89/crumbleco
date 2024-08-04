'use client'

import useStateMenuStore from "@/store/stateMenuStore";
import Link from "next/link";
import { VscClose } from "react-icons/vsc";
import { IoHomeOutline } from "react-icons/io5";
import { PiCookie } from "react-icons/pi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";


export const MenuBar = () => {
  const {setStateMenu,stateMenu} = useStateMenuStore();
  

  return (
    <>
        {stateMenu && (
          <>
            <div className="fixed z-20 bg-[rgba(0,0,0,0.3)] top-0 left-0 w-full h-screen "/>
            <div className="w-[80%] sm:w-[40%] lg:w-[25%] h-screen bg-white fixed z-20 top-0 left-0 drop-shadow-xl flex flex-col ">
                <div className="w-full h-[10%] px-[10%] flex justify-end items-center ">
                  <VscClose size={30} className="cursor-pointer hover:fill-[#ecb3b0] duration-300" onClick={()=>setStateMenu()}/>
                </div>
                <div className="w-full h-[5%] px-[10%]  flex justify-start items-center ">
                  <div className="flex items-center w-[100%] h-[100%] px-[5%] rounded-lg hover:bg-red-100">
                    <IoHomeOutline size={20}/>
                    <Link href={'/'} onClick={()=>setStateMenu()} className="hover:text-[#ecb3b0] duration-300 cursor-pointer pl-3">Home</Link>
                  </div>
                </div>
                <div className="w-full h-[5%] px-[10%]  flex justify-start items-center">
                  <div className="flex items-center w-[100%] h-[100%] px-[5%] rounded-lg hover:bg-red-100">
                    <PiCookie size={20}/>
                    <Link href={'/cookies'} onClick={()=>setStateMenu()} className="hover:text-[#ecb3b0] duration-300 cursor-pointer pl-3">Cookies</Link>
                  </div>
                </div>
                <div className="w-full h-[5%] px-[10%]  flex justify-start items-center">
                  <div className="flex items-center w-[100%] h-[100%] px-[5%] rounded-lg hover:bg-red-100">
                    <span className="hover:text-[#ecb3b0] duration-300 cursor-pointer">Crumble Specials</span>
                  </div>
                </div>
                <div className="w-full h-[5%] px-[10%]  flex justify-start items-center">
                  <div className="flex items-center w-[100%] h-[100%] px-[5%] rounded-lg hover:bg-red-100">
                    <span className="hover:text-[#ecb3b0] duration-300 cursor-pointer">Cold Bar</span>
                  </div>
                </div>
                <div className="w-full h-[5%] px-[10%]  flex justify-start items-center">
                  <div className="flex items-center w-[100%] h-[100%] px-[5%] rounded-lg hover:bg-red-100">
                    <span className="hover:text-[#ecb3b0] duration-300 cursor-pointer">Colabs</span>
                  </div>
                </div>
                <div className="w-[60px] h-[0.5px] bg-[#ecb3b0] duration-300 ml-[10%] my-[5%]" />
                <div className="w-full h-[5%] px-[10%]  flex justify-start items-center">
                  <div className="flex items-center w-[100%] h-[100%] px-[5%] rounded-lg hover:bg-red-100">
                    <HiOutlineBuildingStorefront size={20}/>
                    <Link href={'/history'} onClick={()=>setStateMenu()} className="hover:text-[#ecb3b0] duration-300 cursor-pointer pl-3">History</Link>
                  </div>
                </div>
                
            </div>
          </>
        )}
    </>
  )
}
