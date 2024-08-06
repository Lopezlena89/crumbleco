'use client'

import { meetProducts } from "@/database/main"
import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"


export const Meet = () => {
  return (
    <>
        <div className="w-full h-auto flex flex-col items-center py-[10%] md:py-[0%]">
            <h2 className="pb-[40px] font-market text-6xl text-[#d07f7c] drop-shadow-lg">{meetProducts.title}</h2>
            <div className="w-full h-auto text-center overflow-x-scroll px-5 container-card whitespace-nowrap">
                <Card isFooterBlurred className="rounded-sm w-[300px] md:w-[350px] h-[400px] card shadow-md">
                    <Image
                        width={200}
                        height={200}
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-cover"
                        src="/cards/card-1.webp"
                    />
                    <CardFooter className="rounded-sm absolute border-t-1 border-t-black  bg-black/30 bottom-0  flex justify-around">
                        <p className="text-white/60 text-2xl font-century">Cookie Bar</p>
                        <Link href="/cookies"><Button className="text-white  bg-[#ecb3b0]  font-century rounded-md" size="sm">Go</Button></Link>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className="rounded-sm w-[300px] md:w-[350px] mx-10 h-[400px] card drop-shadow-md">
                    <Image
                        width={200}
                        height={200}
                        alt="Relaxing app background"
                        className="z-0 w-full h-full object-cover"
                        src="/cards/card-2.webp"
                    />
                    <CardFooter className="rounded-sm absolute text-2xl border-t-1 border-t-black  bg-black/30 bottom-0  flex justify-around">
                        <p className="font-century text-white/60">Crumble Specials</p>
                        <Button size="sm" className="font-century bg-[#ecb3b0]  text-white rounded-md">Go</Button>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred className="rounded-sm w-[300px] md:w-[350px] h-[400px] card drop-shadow-md">
                    <Image
                        width={200}
                        height={200}
                        alt=""
                        className="z-0 w-full h-full object-cover"
                        src="/cards/card-3.webp"
                    />
                    <CardFooter className="rounded-sm absolute text-2xl border-t-1 border-t-black  bg-black/30 bottom-0  flex justify-around">
                        <p className="font-century text-white/60">Cold Bar</p>
                        <Button size="sm" className="font-century bg-[#ecb3b0]   text-white rounded-md">Go</Button>
                    </CardFooter>
                </Card>
                
            </div>
           
        </div>
    </>
  )
}
