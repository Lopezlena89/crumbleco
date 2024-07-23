'use client'
import { cookieCare } from "@/database/main"
import { Button } from "@nextui-org/react"


export const CookieCare = () => {
  return (
    <>
        <div className="w-full h-auto px-[0%] md:p-[3%] md:my-[3%] flex flex-col-reverse md:flex-row ">
            <div className="w-full md:w-[70%] h-[400px] md:h-full flex items-center justify-center"> 
                <div className="rounded-sm shadow-xl w-[100%]  h-[90%] md:h-[500px] bg-[url('/cookieCare.webp')] bg-cover bg-center"  /> 
            </div>
            <div className="w-full md:w-[30%] h-auto   md:h-full flex items-center justify-center">
                <div className="my-[5%] w-[90%] md:w-[80%] h-auto  md:h-[500px] flex flex-col items-center justify-center">
                    <div className='flex flex-col  items-center '>
                        <h2 className="font-market text-5xl">{cookieCare.title}</h2>
                        <p className='font-century pt-[5%]'>{cookieCare.paragraph}</p>
                        <p className='font-century pt-[5%]'>{cookieCare.paragraph2}</p>
                    </div>
                
                    <Button color='danger' className='rounded-md font-century mt-[10%]' >
                        Cookie Care
                    </Button>
                </div> 
            </div>
        </div>
    </>
  )
}
