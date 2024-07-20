import { Main } from "@/components/main/Main";
import { Principal } from "@/components/main/Principal";
import { MenuBar } from "@/components/nav/MenuBar";
import { NavBar } from "@/components/nav/NavBar";


import Image from "next/image";

export const runtime = 'edge';

export default function Page(){
  

  return (
    <>
      <div className="w-full h-full flex flex-col overscroll-none">
        <NavBar/>
        <MenuBar/>
        <Principal/>
        <Main/>
        
      </div>
      
    </>
  )
}
