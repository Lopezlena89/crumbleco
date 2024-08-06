import { Product } from "@/components/cookies/Product";
import { MenuBar, NavBar } from "@/components/nav";
import { cookies } from "@/database/products";
import { Metadata, ResolvingMetadata } from "next";

interface props{
     params: { 
        cookie: string
     } 
}
interface Cookie {
  id: number,
  title:string,
  name: string,
  description:string,
  price: number,
  image1: string,
  image2?: string,
  image3?: string
}


const getProduct = (title: string): Cookie | undefined => {
  try {
    const cookie = cookies.find(cookie => cookie.title === title );
    return cookie;
  } catch (error) {
    console.log(error);
    return;
  }

}

export async function generateMetadata(
  { params }: props,
): Promise<Metadata> {
  const cookie = await getProduct(params.cookie)

 
  return {
    title: cookie?.title ?? "Producto no encontrado",
    description: cookie?.description ?? "",
    openGraph: {
      title: cookie?.name ?? "Producto no encontrado",
      description: cookie?.description ?? "",
      // images: [], // https://misitioweb.com/products/image.png
      images:cookie?.image1,
    },
  };
}


export default function page({ params }:props){

  
  return (
    <>
        <div className="w-full h-screen flex flex-col bg-[rgba(255,243,243,0.2)] ">
            <NavBar/>
            <MenuBar/>
            <Product params={params}/>
      
        </div>
    </>
  )
}
