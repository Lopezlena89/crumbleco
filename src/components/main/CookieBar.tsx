'use client'

import { cookies } from "@/database/products"
import { CardElement } from "../cards/Card"
import { Button, Card, CardFooter } from "@nextui-org/react"
import Image from "next/image"
import { cookieBar } from '../../database/main';


export const CookieBar = () => {
  return (
    <>
        <div className="w-full px-[0%] my-[10%] md:mb-[5%] md:px-[3%]">
          <div className="w-[100%]  rounded-lg h-auto bg-[rgba(255,21,121,1)] mb-[10px] flex flex-col  md:flex-row"> 
            <div className="h-[350px] md:h-auto md:w-[40%] flex flex-col justify-center items-center p-[5%] px-[10%] md:px-[2%]">
                <p className="font-market text-white text-6xl">{cookieBar.title}</p>
                <p className="text-white font-century">{cookieBar.cookie}</p>
                <Button  color="danger" className="mt-5 text-[rgba(255,21,121,1)] h-8 rounded-md bg-white" >
                  {cookieBar.button}
                </Button>
            </div>
            <div className="rounded-lg h-[350px] md:h-[500px] md:w-[60%]  bg-[url('/0W4A8657.webp')] bg-cover bg-center"  /> 
          </div>
        </div>
    </>
  )
}
