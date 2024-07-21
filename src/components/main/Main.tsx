'use client'

import { letterMain } from '@/database/main'
import Image from 'next/image'
import React from 'react'
import SvgComponent1 from '../svg/ImageSvgG1'
import SvgComponent from '../svg/ImageSvg'
import { Button } from '@nextui-org/react'

export const Main = () => {
  return (
      <>
        
        <div className="w-full h-auto p-[5%] flex flex-col-reverse md:flex-row gap-10">
        
          <div className="w-full md:w-1/2 h-[400px] md:h-full flex items-center justify-center"> 
            <div className="rounded-xl shadow-xl w-[90%] md:w-[500px] h-[90%] md:h-[500px] bg-[url('/hello_friends.webp')] bg-cover bg-center"  /> 
          </div>
          <div className="w-full md:w-1/2 h-auto md:h-full flex items-center justify-center">
            
            <div className="rounded-3xl  p-5 md:p-10 w-[90%] md:w-[500px] h-auto  md:h-[500px] shadow-xl flex flex-col items-center justify-start">
              {letterMain.map((letter,index)=>(
                <div key={index} className='flex flex-col  items-center pt-[5%] md:pt-[15%]'>
                    <h2 className='font-market text-6xl'>{letter.title}</h2>
                    <p className='font-century pt-[5%]'>{letter.paragraph}</p>
                </div>
              ))}
              <Button color='danger' >
                  Nosotros
              </Button>
            </div> 
          </div>
        </div> 
      </>
  )
}
