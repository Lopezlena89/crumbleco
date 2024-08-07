
import { Footer } from "@/components/footer/Footer";
import { Main, Meet, Principal,CookieCare } from "@/components/main";
import { MenuBar } from "@/components/nav/MenuBar";
import { NavBar } from "@/components/nav/NavBar";
export const runtime = 'edge';

export default function Page(){
  

  return (
    <>
      <div className="w-full h-full flex flex-col bg-[rgba(255,243,243,0.7)]  overflow-hidden">
        <NavBar/>
        <MenuBar/>
        <Principal/>
        <Main/>
        <Meet/>
        <CookieCare/>
        <Footer/>
        
      </div>
      
    </>
  )
}
