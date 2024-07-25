'use client'

import { local } from '@/database/main'
import { Button } from '@nextui-org/react'
import React from 'react'

export const Local = () => {
  return (
    <>
        <div className="w-full h-auto px-[0%] md:p-[3%] flex flex-col-reverse md:flex-row ">
        
            <div className="w-full md:w-1/2 h-[400px] md:h-full flex items-center justify-center"> 
                <div className="rounded-sm shadow-xl w-[100%]  h-[90%] md:h-[500px] bg-[url('/local.webp')] bg-cover bg-center"  /> 
            </div>
            <div className="w-full md:w-1/2 h-auto  md:h-full flex items-center justify-center">
                <div className="mt-[5%] w-[80%] md:w-[70%] h-auto  md:h-[500px] flex flex-col items-center justify-center">
                    
                    <div className='flex flex-col  items-center'>
                        <h2 className='font-market text-6xl text-center'>{local.title}</h2>
                        <p className='font-century pt-[5%]'>{local.paragraph}</p>
                    </div>
                    <Button className='rounded-md font-century bg-[#d2b3b8] text-white mt-[5%]' >
                        Nosotros
                    </Button>
                </div> 
            </div>
        </div> 
    </>
  )
}
