import { Footer } from "@/components/footer/Footer";
import { MainHistory } from "@/components/history/MainHistory";
import { PrincipalHistory } from "@/components/history/PrincipalHistory";
import { MenuBar, NavBar } from "@/components/nav";


export default function Page(){
  return (
    <>  
        <main className="w-full h-screen">
            <NavBar/>
            <MenuBar/>
            <PrincipalHistory/>
            <MainHistory/>
            <Footer/>
        </main>
    </>
  )
}
