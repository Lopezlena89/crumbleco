import Image from 'next/image'
import React from 'react'

export const Main = () => {
  return (
        <div className="w-full h-[800px] md:h-[650px] flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2 h-[400px] md:h-full flex items-center justify-center"> 
            <div className="rounded-xl shadow-xl w-[90%] md:w-[500px] h-[90%] md:h-[500px] bg-[url('/hello_friends.webp')] bg-cover bg-center"  /> 
          </div>
          <div className="w-full md:w-1/2 h-[400px] md:h-full flex items-center justify-center">
            <div className="rounded-3xl w-[90%] md:w-[500px] h-[90%] md:h-[500px] shadow-xl flex flex-col items-center justify-center">
                
            </div> 
          </div>
        </div> 
  )
}
