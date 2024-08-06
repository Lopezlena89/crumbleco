import Image from "next/image"
import Link from "next/link"


export const Footer = () => {
  return (
     <footer className="w-full h-auto bg-[#eac7cf]"> 
        <div className="w-full h-[120px] flex justify-between px-[3%] md:px-[5%]">
            <div className="h-full flex items-baseline ">
                <div className="w-[80px] md:w-[100px] h-full flex flex-col text-[9px] md:text-[0.1em] justify-center ">
                    <h3 className=" font-extrabold text-[#d07f7c] ">Descubrir y Comprar</h3>
                    <h4 className="font-century text-[#d07f7c] ">Cookies</h4>
                    <h4 className="font-century text-[#d07f7c] ">Cold Bar</h4>
                    <h4 className="font-century text-[#d07f7c] ">Crumble specials</h4>
                </div>
                <div className="w-[100px] md:w-[200px] h-full flex flex-col justify-center text-[7px] md:text-[0.1em] px-[10%] ">
                    <h3 className="font-extrabold text-[#d07f7c] ">Direccion</h3>
                    <h4 className="font-century text-[#d07f7c] ">Monte Everest 203 A, Los Bosques, 20120 Aguascalientes, Ags.</h4>
                
                </div>
                <div className="w-[80px] md:w-[100px] h-full flex flex-col text-[9px] md:text-[0.1em] justify-center ">
                    <h3 className="font-extrabold text-[#d07f7c] ">Crumble Co</h3>
                    <h4 className="font-century text-[#d07f7c] ">Historia</h4>
                    <h4 className="font-century text-[#d07f7c] ">Cookie Care</h4>
                    <h4 className="font-century text-[#d07f7c] ">Why Crumble Co</h4>
                </div>
            </div>
            <div className="w-[130px] flex flex-col justify-center items-center relative">
                <Image src="/CrumblR-02.webp" alt="logo"  width={110} height={110}/>
                <Link href={'/'} className="flex justify-center">
                    <h1 className="font-market absolute top-[60%] text-[#d07f7c] text-2xl">Crumble Co</h1>
                </Link>
            </div>
        </div>
        <div className="w-full h-[30px] border-t-1 border-solid border-[#d07f7c] flex  justify-between items-center px-[5%]">
            <h5 className="text-[#d07f7c] font-century text-[0.1em]">Copyright © 2024 Crumble co. Todos los derechos reservados.</h5>
            <h5 className="text-[#d07f7c] font-century text-[0.1em]">Mexico</h5>
        </div>
    </footer>
  )
}
