'use client'

import useStateMenuStore from "@/store/stateMenuStore";
import { VscClose } from "react-icons/vsc";

export const MenuBar = () => {
  const {setStateMenu,stateMenu} = useStateMenuStore();
  

  return (
    <>
        {stateMenu && (
          <>
            <div className="fixed z-10 bg-[rgba(0,0,0,0.3)] top-0 left-0 w-full h-screen "/>
            <div className="w-[80%] sm:w-[40%] lg:w-[30%] h-screen bg-white fixed z-20 top-0 left-0 drop-shadow-xl flex flex-col ">
                <div className="w-full h-[10%] px-[10%] flex justify-end items-center">
                  <VscClose size={30} className="cursor-pointer hover:fill-[rgb(255,21,121)] duration-300" onClick={()=>setStateMenu()}/>
                </div>
                <div className="w-full h-[5%] px-[10%]  flex justify-start items-center">
                  <span className="hover:text-[#ff1579] duration-300 cursor-pointer">Home</span>
                </div>
                <div className="w-full h-[5%] px-[10%]  flex justify-start items-center">
                  <span className="hover:text-[rgb(255,21,121)] duration-300 cursor-pointer">Hello Friends</span>
                </div>
                <div className="w-full h-[5%] px-[10%]  flex justify-start items-center">
                  <span className="hover:text-[rgb(255,21,121)] duration-300 cursor-pointer">Cookies</span>
                </div>
                <div className="w-full h-[5%] px-[10%]  flex justify-start items-center">
                  <span className="hover:text-[rgb(255,21,121)] duration-300 cursor-pointer">Crumble Specials</span>
                </div>
                <div className="w-full h-[5%] px-[10%]  flex justify-start items-center">
                  <span className="hover:text-[rgb(255,21,121)] duration-300 cursor-pointer">Cold Bar</span>
                </div>
                <div className="w-full h-[5%] px-[10%]  flex justify-start items-center">
                  <span className="hover:text-[rgb(255,21,121)] duration-300 cursor-pointer">Colabs</span>
                </div>
                <div className="w-[60px] h-[0.5px] bg-[rgb(255,21,121)] duration-300 ml-[10%] my-[5%]" />
                <div className="w-full h-[5%] px-[10%]  flex justify-start items-center">
                  <span className="hover:text-[rgb(255,21,121)] duration-300 cursor-pointer">History</span>
                </div>
                <div className="w-full h-[5%] px-[10%]  flex justify-start items-center">
                  <span className="hover:text-[rgb(255,21,121)] duration-300 cursor-pointer">Meet Our Local</span>
                </div>
                <div className="w-full h-[5%] px-[10%]  flex justify-start items-center">
                  <span className="hover:text-[rgb(255,21,121)] duration-300 cursor-pointer">Cookie Care</span>
                </div>
            </div>
          </>
        )}
    </>
  )
}
