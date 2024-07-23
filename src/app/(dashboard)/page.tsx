
import { Main, Meet, Principal,CookieCare,OurPlace, CookieBar } from "@/components/main";
import { MenuBar } from "@/components/nav/MenuBar";
import { NavBar } from "@/components/nav/NavBar";

export const runtime = 'edge';

export default function Page(){
  

  return (
    <>
      <div className="w-full h-full flex flex-col bg-[#fffafa]  overflow-hidden">
        <NavBar/>
        <MenuBar/>
        <Principal/>
        <Main/>
        <Meet/>
        <CookieCare/>
        <CookieBar/>
        {/* <OurPlace/>  */}
        
      </div>
      
    </>
  )
}
