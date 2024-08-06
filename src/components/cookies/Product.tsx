'use client'

import { cookies } from "@/database/products"
import useStateCartStore from "@/store/stateCartStore"
import { Button, Card } from "@nextui-org/react"
import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { CookieCare } from "../main"
import { Footer } from "../footer/Footer"
import { CardsCookies } from "../cards/CardsCookies"


interface Props{
  params: { 
     cookie: string
  } 
}

interface Cookie {
  id: number,
  name: string,
  title:string,
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

export const Product = ({params}:Props) => {
  
  const [stateCookie, setStateCookie] = useState(1);
  const [stateCookieprice, setStateCookiePrice] = useState(0);
  const {statePrice,setStatePlusPrice,products,addProduct,updateProduct,removeProducto} = useStateCartStore();
  const cookie = useMemo(() => getProduct(params.cookie), [params.cookie]);
   
  useEffect(() => {
    if(!localStorage.getItem('products')){
      localStorage.setItem('products',JSON.stringify(products))
      return;
    }
    localStorage.setItem('products',JSON.stringify(products))
  }, [products])
  

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

  const validProduct = (valor:string) =>{
    const findValue = products.find(product =>product.name ===valor);
    return findValue;
  }

  const addAmout = () =>{
    setStatePlusPrice(stateCookieprice)
    if(!validProduct(name)){
      addProduct(name,stateCookieprice,stateCookie);
      return;
    }
    updateProduct(name,stateCookieprice,stateCookie);

    console.log(statePrice)
    
  }
  

  const selectedIds = Array.from({ length: 20 }, (_, i) => i + 1).sort(() => 0.5 - Math.random()).slice(0, 5);
  return (
    <div className="mt-[60px] w-full h-auto flex flex-col justify-center ">
      <div className="w-full h-auto flex flex-col md:flex-row ">
        <div className="md:w-1/2 h-full p-[5%] pb-0">
          <div className="w-full h-[500px] md:h-[80%] gradient relative rounded-lg">
            <Image src={image1} width={400} height={400} className="cookies shadow-md rounded-lg" alt={name}/>
          </div>
          <div className="w-full h-[150px] md:h-[20%] p-5 flex items-center gap-5">
            <div className="w-[100px] md:w-[20%] h-full relative rounded-lg gradient shadow-md cursor-pointer">
              <Image src={image1} width={400} height={400} className="cookies shadow-md  rounded-lg" alt={name}/>
            </div>
            {
              image2 &&
              <div className="w-[100px] md:w-[20%] h-full relative rounded-lg gradient shadow-md cursor-pointer">
                <Image src={image2 || ''} width={100} height={100} className="cookies shadow-md rounded-lg" alt={name}/>
              </div>
            }
            {
              image3 &&
              <div className="w-[100px] md:w-[20%] h-full relative rounded-lg gradient shadow-md cursor-pointer">
                <Image src={image3 || ''} width={100} height={100} className="cookies shadow-md rounded-lg" alt={name}/>
              </div>
            }
          </div>
        </div>
        <div className="md:w-1/2 h-full flex flex-col items-center pt-[5%] ">
            <div className="w-full h-auto px-[10%] flex flex-col items-center">
              <h2 className="font-market text-6xl text-[#d07f7c] drop-shadow-lg">{name}</h2>
              <h3 className="font-century md:py-5">{description}</h3>
              <div className="w-full h-[100px] p-5 flex justify-center  items-center">
                <div className="flex items-center border border-solid border-[#d07f7c] rounded-lg">
                  <div 
                    className="flex justify-center w-[30px] h-[30px] items-center cursor-pointer"
                    onClick={restaCookie}
                  >
                    <span className="text-[#d07f7c]">-</span>
                  </div>
                  <div className="flex justify-center w-[30px] h-[30px] items-center">
                    <span className="text-[#d07f7c]">{stateCookie}</span>
                  </div>
                  <div 
                    className="flex justify-center w-[30px] h-[30px] items-center cursor-pointer"
                    onClick={sumaCookie}
                  >
                    <span className="text-[#d07f7c]">+</span>
                  </div>
                </div>
                <div className=" h-[30px] ml-10 w-[150px] flex justify-center items-center">
                    <Button onClick={addAmout} className="bg-[#ecb3b0] text-white">Add to cart ${stateCookieprice === 0 ? getPrice(): stateCookieprice}</Button>
                </div>
            </div>

            </div>
            <div className="w-full h-[200px] flex gap-5  md:mt-[100px] p-5 text-center container-card scroll-card ">
              
            {cookies.filter(cookie => selectedIds.includes(cookie.id))
                  .map(cookieId => (
                  <CardsCookies key={cookieId.id} cookie={cookieId} />
                ))
            }
            
            </div>
        </div>
      </div>
      <CookieCare/>
      <Footer/>

    </div>
  )
}
