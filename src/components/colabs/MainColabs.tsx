'use client'
import React from 'react'
import { ModalCold } from '../modal/ModalCold';
import useStoreIsOpenColabs from '@/store/stateIsOpenColabs';
import { ModalColabs } from '../modal/ModalColabs';

export const MainColabs = () => {
    const {setIsOpenColab} = useStoreIsOpenColabs();
  return (
    <>
        <main className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 overflow-hidden bg-gradient-to-t from-[#f5d8e1] to-red-100 pt-[60px]">
            <div onClick={()=>setIsOpenColab()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/colabs/0W4A8226.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
            <div onClick={()=>setIsOpenColab()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/colabs/0W4A8246.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
            <div onClick={()=>setIsOpenColab()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/colabs/JN1A6975.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
            <div onClick={()=>setIsOpenColab()} className="w-full h-[600px] cursor-pointer  shadow-lg rounded-md bg-[url('/colabs/JN1A6985.webp')] bg-cover bg-center"><div className="w-full h-full hover:bg-white/10"></div></div>
        </main>
        <ModalColabs/>
    </>
  )
}
