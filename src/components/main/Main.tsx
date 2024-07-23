'use client'

import { letterMain } from '@/database/main'

import React from 'react'

import { Button } from '@nextui-org/react'

export const Main = () => {
  return (
      <>
        
        <div className="w-full h-auto px-[0%] md:p-[3%] flex flex-col-reverse md:flex-row ">
        
          <div className="w-full md:w-1/2 h-[400px] md:h-full flex items-center justify-center"> 
            <div className="rounded-sm shadow-xl w-[100%]  h-[90%] md:h-[500px] bg-[url('/hello_friends.webp')] bg-cover bg-center"  /> 
          </div>
          <div className="w-full md:w-1/2 h-auto py-[10%] md:py-[0%] md:h-full flex items-center justify-center">
            <div className="mt-[5%] w-[90%] md:w-[90%] h-auto  md:h-[500px] flex flex-col items-center justify-center">
              {letterMain.map((letter,index)=>(
                <div key={index} className='flex flex-col  items-center '>
                    <h2 className='font-market text-6xl'>{letter.title}</h2>
                    <p className='font-century pt-[5%]'>{letter.paragraph}</p>
                </div>
              ))}
              <Button color='danger' className='rounded-md font-century mt-[5%]' >
                  Nosotros
              </Button>
            </div> 
          </div>
        </div> 
      </>
  )
}
