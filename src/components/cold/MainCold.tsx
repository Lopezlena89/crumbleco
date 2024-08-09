'use client'
import React from 'react'
import useStoreIsOpenCold from '@/store/stateIsOpenCold';
import { ModalCold } from '../modal/ModalCold';

export const MainCold = () => {
    const {setIsOpenCold} = useStoreIsOpenCold();
  return (
    <>
        <main className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 overflow-hidden bg-gradient-to-t from-[#f5d8e1] to-red-100 pt-[60px]">
            <div onClick={()=>setIsOpenCold()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/cold/drizzle.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
            <div onClick={()=>setIsOpenCold()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/cold/drizzle3.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
            <div onClick={()=>setIsOpenCold()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/cold/megustadeportada.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
            <div onClick={()=>setIsOpenCold()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/cold/milkshakes.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
            <div onClick={()=>setIsOpenCold()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/cold/chocolate.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
            <div onClick={()=>setIsOpenCold()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/cold/cookiedough.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
            <div onClick={()=>setIsOpenCold()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/cold/fruitypebbles.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
            <div onClick={()=>setIsOpenCold()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/cold/matcha.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
            <div onClick={()=>setIsOpenCold()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/cold/strawberrycheesecake.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
        </main>
        <ModalCold/>
    </>
  )
}
