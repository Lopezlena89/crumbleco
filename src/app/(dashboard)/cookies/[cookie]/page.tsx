import { Product } from "@/components/cookies/Product";
import { MenuBar, NavBar } from "@/components/nav";
import { cookies } from "@/database/products";

interface props{
     params: { 
        cookie: string
     } 
}


export default function page({ params }:props){

  
  return (
    <>
        <div className="w-full h-screen flex flex-col">
            <NavBar/>
            <MenuBar/>
            <Product params={params}/>

        </div>
    </>
  )
}
