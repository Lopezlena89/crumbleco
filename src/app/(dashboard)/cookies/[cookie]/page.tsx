import { Product } from "@/components/cookies/Product";
import { MenuBar, NavBar } from "@/components/nav";



interface props{
     params: { 
        cookie: number
     } 
}

export default function page({ params }:props){
    

  return (
    <>
        <div className="w-full h-screen flex flex-col">
            <NavBar/>
            <MenuBar/>
            <Product/>

        </div>
    </>
  )
}
