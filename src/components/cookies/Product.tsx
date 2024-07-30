'use client'

import { cookies } from "@/database/products"
import useStateCartStore from "@/store/stateCartStore"
import { Button } from "@nextui-org/react"
import Image from "next/image"
import { useMemo, useState } from "react"
import { CookieCare } from "../main"
import { Footer } from "../footer/Footer"

interface props{
  params: { 
     cookie: string
  } 
}

interface Cookie {
  id: number,
  name: string,
  description:string,
  price: number,
  image1: string,
  image2?: string,
  image3?: string
}

const getProduct = (title: string): Cookie | undefined => {
  try {
    const cookie = cookies.find(cookie =>cookie.title === title );
    return cookie
  } catch (error) {
    console.log(error);
  }
}

export const Product = ({params}:props) => {
  
  const [stateCookie, setStateCookie] = useState(1);
  const [stateCookieprice, setStateCookiePrice] = useState(0);
  const {statePrice,setStatePlusPrice} = useStateCartStore();
  console.log(statePrice)
  const cookie = useMemo(() => getProduct(params.cookie), [params]);
   
  if (!cookie) {
    return <div>No se encontró el producto</div>;
  }

  const {id,name,description,price,image1,image2,image3} = cookie;
  
  const restaCookie = () => {
    if (stateCookie === 1) return;
    setStateCookie(stateCookie - 1)
    setStateCookiePrice(stateCookieprice - price);
  }

  const sumaCookie = () =>{
    setStateCookie(stateCookie + 1)
    setStateCookiePrice(stateCookieprice + price);
  }

  const getPrice = () =>{
    setStateCookiePrice(price)
    return stateCookieprice
  }

  const addAmout = async() =>{
    await setStatePlusPrice(stateCookieprice)
    console.log(statePrice)
    if(!localStorage.getItem('price')){
        localStorage.setItem('price',JSON.stringify(statePrice))
        return;
    }
    localStorage.setItem('price',JSON.stringify(statePrice))
    
  }


  return (
    <div className="mt-[60px] w-full h-auto flex flex-col justify-center ">
      <div className="w-full h-[800px] flex ">
        <div className="w-1/2 h-full p-[5%]">
          <div className="w-full h-[80%] gradient relative rounded-lg">
          <Image src={image1} width={400} height={400} className="cookies" alt={name}/>
          </div>
          <div className="w-full h-[20%] p-5 flex items-center gap-5">
            <div className="w-[20%] h-full relative rounded-lg gradient shadow-md cursor-pointer">
              <Image src={image1} width={400} height={400} className="cookies" alt={name}/>
            </div>
            {
              image2 &&
              <div className="w-[20%] h-full relative rounded-lg gradient shadow-md cursor-pointer">
                <Image src={image2 || ''} width={100} height={100} className="cookies" alt={name}/>
              </div>
            }
            {
              image3 &&
              <div className="w-[20%] h-full relative rounded-lg gradient shadow-md cursor-pointer">
                <Image src={image3 || ''} width={100} height={100} className="cookies" alt={name}/>
              </div>
            }
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col p-[5%]">
            <h2 className="font-market text-6xl">{name}</h2>
            <h3 className="font-century">{description}</h3>
            <div className="w-full h-[100px]   p-5 flex items-center">
              <div className="flex items-center border border-solid border-black rounded-lg">
                <div 
                  className="flex justify-center w-[30px] h-[30px] items-center cursor-pointer"
                  onClick={restaCookie}
                >
                  <span >-</span>
                </div>
                <div className="flex justify-center w-[30px] h-[30px] items-center">
                  <span >{stateCookie}</span>
                </div>
                <div 
                  className="flex justify-center w-[30px] h-[30px] items-center cursor-pointer"
                  onClick={sumaCookie}
                >
                  <span >+</span>
                </div>
              </div>
              <div className=" h-[30px] ml-10 w-[150px] flex justify-center items-center">
                  <Button onClick={addAmout} className="bg-[#e19c99]">Add to cart ${stateCookieprice === 0 ? getPrice(): stateCookieprice}</Button>
              </div>

            </div>
            <div className="w-full h-full ">
            </div>
        </div>
      </div>
      <CookieCare/>
      <Footer/>

    </div>
  )
}
