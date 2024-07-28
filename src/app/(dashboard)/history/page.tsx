import { Footer } from "@/components/footer/Footer";
import { MainHistory } from "@/components/history/MainHistory";
import { PrincipalHistory } from "@/components/history/PrincipalHistory";
import { MenuBar, NavBar } from "@/components/nav";


export default function Page(){
  return (
    <>  
        <div className="w-full h-full flex flex-col">
            <NavBar/>
            <MenuBar/>
            <PrincipalHistory/>
            <MainHistory/>
            <Footer/>
        </div>
    </>
  )
}
