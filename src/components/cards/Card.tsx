'use client'

import { Button, CardFooter,Card, CardHeader } from "@nextui-org/react"
import Image from "next/image";
import { useEffect, useState } from "react";




interface Props{
    cookie:{
        id:number,
        name:string,
        price:number,
        image1:string,
        image2?:string,
        image3?:string,
    }
}

export const CardElement = ({cookie}:Props) => {

    const {id, name, price, image1, image2, image3} = cookie;

    const [state, setState] = useState(false);

    const handleMouseEnter = () => {
      if (image2) {
        setState(true);
      }
    };
  
    const handleMouseLeave = () => {
      setState(false);
    };
   

  return (
    <>
        <Card isFooterBlurred className="w-full h-[300px]">
            
            <div
                className="relative w-full h-full bg-gradient-to-t from-gray-50 to-gray-100"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
               
                <Image
                width={200}
                height={200}
                alt={name}
                className=" w-full h-full object-cover "
                src={state && image2 ? image2 : image1}
                />
            </div>
            <CardFooter className="absolute bg-[rgba(210,179,184,0.5)] bottom-0 border-t-1 border-[#d2b3b8] dark:border-default-100 flex justify-around items-center">
             <h3 className="font-market text-3xl text-amber-900">{name}</h3>
            <Button
                className="bg-gray-200 border-1"
            >
                <span className="text-amber-900">Go</span>
            </Button>
                
            </CardFooter>
        </Card>
    </>
  )
}
