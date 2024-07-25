'use client'

import { meetProducts } from "@/database/main"
import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react"
import Image from "next/image"


export const Meet = () => {
  return (
    <>
        <div className="w-full h-auto flex flex-col items-center py-[10%] md:py-[0%]">
            <h2 className="pb-[40px] font-market text-6xl">{meetProducts.title}</h2>
            <div className="w-full h-auto text-center overflow-x-scroll px-5 container-card whitespace-nowrap">
                <Card isFooterBlurred className="rounded-sm w-[300px] md:w-[350px] h-[400px] card">
                    <Image
                        width={200}
                        height={200}
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-cover"
                        src="/cards/card-1.webp"
                    />
                    <CardFooter className="rounded-sm absolute border-t-1 border-t-black  bg-black/30 bottom-0  flex justify-around">
                        <p className="text-white/60 text-2xl font-century">Cookie Bar</p>
                        <Button className="text-white  bg-[#d2b3b8] font-century rounded-md" size="sm">Go</Button>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className="rounded-sm w-[300px] md:w-[350px] mx-10 h-[400px] card">
                    <Image
                        width={200}
                        height={200}
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-cover"
                        src="/cards/card-2.webp"
                    />
                    <CardFooter className="rounded-sm absolute text-2xl border-t-1 border-t-black  bg-black/30 bottom-0  flex justify-around">
                        <p className="font-century text-white/60">Crumble Specials</p>
                        <Button size="sm" className="font-century bg-[#d2b3b8] text-white rounded-md">Go</Button>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className="rounded-sm w-[300px] md:w-[350px] h-[400px] card">
                    <Image
                        width={200}
                        height={200}
                        alt=""
                        className="z-0 w-full h-full object-cover"
                        src="/cards/card-3.webp"
                    />
                    <CardFooter className="rounded-sm absolute text-2xl border-t-1 border-t-black  bg-black/30 bottom-0  flex justify-around">
                        <p className="font-century text-white/60">Cold Bar</p>
                        <Button size="sm" className="font-century bg-[#d2b3b8]  text-white rounded-md">Go</Button>
                    </CardFooter>
                </Card>
                
            </div>
           
        </div>
    </>
  )
}
