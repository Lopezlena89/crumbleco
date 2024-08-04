import { CookiesBar } from "@/components/cookies/CookiesBar"
import { PrincipalCookies } from "@/components/cookies/PrincipalCookies"
import { Footer } from "@/components/footer/Footer"
import { MenuBar, NavBar } from "@/components/nav"


export default function page(){
  return (
    <>
        <div className="w-full h-full flex flex-col bg-[rgba(255,243,243,0.3)]">
            <NavBar/>
            <MenuBar/>
            <PrincipalCookies/>
            <CookiesBar/>
            <Footer/>
        </div>
    </>
  )
}
