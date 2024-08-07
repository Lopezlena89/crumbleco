'use client'
import React from 'react'
import { ModalSpecials } from '../modal/ModalSpecials'
import useStoreIsOpen from '@/store/stateIsOpen';

export const MainSpecials = () => {
    const {isOpen,setIsOpen} = useStoreIsOpen();
  return (
    <>
        <main className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 overflow-hidden bg-gradient-to-t from-[#f5d8e1] to-red-100 pt-[60px]">
            <div onClick={()=>setIsOpen()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/specials/0W4A9590.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
            <div onClick={()=>setIsOpen()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/specials/0W4A8104.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
            <div onClick={()=>setIsOpen()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/specials/0W4A9707.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
            <div onClick={()=>setIsOpen()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/specials/batch.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
            <div onClick={()=>setIsOpen()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/specials/buns.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
            <div onClick={()=>setIsOpen()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/specials/crumblejar.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
            <div onClick={()=>setIsOpen()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/specials/crumblejar2.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
            <div onClick={()=>setIsOpen()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/specials/manguitosenchilados.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
            <div onClick={()=>setIsOpen()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/specials/grandmascake.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
        </main>
        <ModalSpecials/>
    </>
  )
}
