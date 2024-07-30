import { CookieCarePage } from "@/components/cookieCare/CookieCarePage";
import { Footer } from "@/components/footer/Footer";
import { PrincipalHistory } from "@/components/history/PrincipalHistory";
import { MenuBar, NavBar } from "@/components/nav";


export default function Page(){
  return (
    <>  
        <div className="w-full h-full flex flex-col">
            <NavBar/>
            <MenuBar/>
            <PrincipalHistory/>
            <CookieCarePage/>
            <Footer/>
        </div>
    </>
  )
}
