'use client'

import { Button, CardFooter,Card, CardHeader } from "@nextui-org/react"
import Image from "next/image"


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

  return (
    <>
         <Card isFooterBlurred className="rounded-xl border-0 border-black w-[200px] mx-[1%] md:w-[250px] h-[300px] card">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <h3 className="text-[rgb(255,21,121)] font-century text-xl">{name}</h3>
            </CardHeader>
            <Image
                width={200}
                height={200}
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src={image1}
            />
            <CardFooter className="rounded-sm absolute bg-black/10 bottom-0  flex justify-around">
               
               <Button color='danger' className="font-century">Add</Button>
            </CardFooter>
        </Card>
    </>
  )
}
