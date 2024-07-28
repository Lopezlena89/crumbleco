import { CookiesBar } from "@/components/cookies/CookiesBar"
import { PrincipalCookies } from "@/components/cookies/PrincipalCookies"
import { Footer } from "@/components/footer/Footer"
import { MenuBar, NavBar } from "@/components/nav"


export default function page(){
  return (
    <>
        <main className="w-full h-screen">
            <NavBar/>
            <MenuBar/>
            <PrincipalCookies/>
            <CookiesBar/>
            <Footer/>
        </main>
    </>
  )
}
