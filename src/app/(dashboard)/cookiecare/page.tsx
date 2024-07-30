import { CookieCarePage } from "@/components/cookieCare/CookieCarePage";
import { PrincipalCookieCare } from "@/components/cookieCare/PrincipalCookieCare";
import { Footer } from "@/components/footer/Footer";
import { MenuBar, NavBar } from "@/components/nav";


export default function Page(){
  return (
    <>  
        <div className="w-full h-full flex flex-col">
            <NavBar/>
            <MenuBar/>
            <PrincipalCookieCare/>
            <CookieCarePage/>
            <Footer/>
        </div>
    </>
  )
}
