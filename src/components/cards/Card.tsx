'use client'

import { Button, CardFooter,Card, CardHeader } from "@nextui-org/react"
import Image from "next/image";
import Link from "next/link";
import { IoStar } from "react-icons/io5";

import {  useState } from "react";


interface Props{
    cookie:{
        id:number,
        title:string,
        name:string,
        price:number,
        image1:string,
        image2?:string,
        image3?:string,
    }
}

export const CardElement = ({cookie}:Props) => {

    const {id, name,title, price, image1, image2, image3} = cookie;

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
        <Card isFooterBlurred className="w-full h-[300px] rounded-xl  drop-shadow-md">
            <Link
                href={'/cookies/' + title} 
                className="relative w-full h-full gradient"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Image
                width={200}
                height={200}
                alt={name}
                className=" w-full h-full object-cover  "
                src={state && image2 ? image2 : image1}
                />
            </Link>
            <CardFooter className="absolute bg-[rgba(210,179,184,0.4)] bottom-0  rounded-b-lg dark:border-default-100 flex flex-col justify-around items-center">
             <h3 className="font-market text-3xl text-[#d07f7c] drop-shadow-lg">{name}</h3>
              <div className="flex items-center">
                <IoStar fill="#e19c99"/>
                <IoStar fill="#e19c99"/>
                <IoStar fill="#e19c99"/>
                <IoStar fill="#e19c99"/>
                <IoStar fill="#e19c99"/>
              </div>
                
            </CardFooter>
        </Card>
    </>
  )
}
