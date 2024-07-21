'use client'

import { meetProducts } from "@/database/main"
import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react"
import Image from "next/image"


export const Meet = () => {
  return (
    <>
        <div className="w-full h-auto flex flex-col items-center px-[5%] pb-[10%]">
            <h2 className="pb-[80px] font-market text-6xl">{meetProducts.title}</h2>
            <div className="w-full h-auto text-center overflow-x-scroll px-5 container-card whitespace-nowrap">
                <Card isFooterBlurred className="w-[300px] md:w-[350px] h-[400px] card">
                    <Image
                        width={200}
                        height={200}
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-cover"
                        src="/cards/card-1.webp"
                    />
                    <CardFooter className="absolute bg-black/30 bottom-0  flex justify-around">
                        <p className="text-white/60 font-century">Cookie Bar</p>
                        <Button radius="full"  color='danger' className="text-white font-century" size="sm">Go</Button>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className="w-[300px] md:w-[350px] mx-10 h-[400px] card">
                    <Image
                        width={200}
                        height={200}
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-cover"
                        src="/cards/card-2.webp"
                    />
                    <CardFooter className="absolute bg-black/30 bottom-0  flex justify-around">
                        <p className="font-century text-white/60">Crumble Specials</p>
                        <Button radius="full"  color='danger' size="sm" className="font-century">Go</Button>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className="w-[300px] md:w-[350px] h-[400px] card">
                    <Image
                        width={200}
                        height={200}
                        alt=""
                        className="z-0 w-full h-full object-cover"
                        src="/cards/card-3.webp"
                    />
                    <CardFooter className="absolute bg-black/30 bottom-0  flex justify-around">
                        <p className="font-century text-white/60">Cold Bar</p>
                        <Button radius="full" color='danger' size="sm" className="font-century">Go</Button>
                    </CardFooter>
                </Card>
                
            </div>
           
        </div>
    </>
  )
}
