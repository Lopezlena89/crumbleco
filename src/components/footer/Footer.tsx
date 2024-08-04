import Image from "next/image"


export const Footer = () => {
  return (
     <footer className="w-full h-auto bg-[#ecb3b0]"> 
        <div className="w-full h-[120px] flex justify-between px-[3%] md:px-[5%]">
            <div className="h-full flex items-baseline ">
                <div className="w-[80px] md:w-[100px] h-full flex flex-col text-[9px] md:text-[0.1em] justify-center ">
                    <h3 className=" font-extrabold text-white ">Descubrir y Comprar</h3>
                    <h4 className="font-century text-white ">Cookies</h4>
                    <h4 className="font-century text-white ">Cold Bar</h4>
                    <h4 className="font-century text-white ">Crumble specials</h4>
                </div>
                <div className="w-[100px] md:w-[200px] h-full flex flex-col justify-center text-[7px] md:text-[0.1em] px-[10%] ">
                    <h3 className="font-extrabold text-white ">Direccion</h3>
                    <h4 className="font-century text-white ">Monte Everest 203 A, Los Bosques, 20120 Aguascalientes, Ags.</h4>
                
                </div>
                <div className="w-[80px] md:w-[100px] h-full flex flex-col text-[9px] md:text-[0.1em] justify-center ">
                    <h3 className="font-extrabold text-white ">Crumble Co</h3>
                    <h4 className="font-century text-white ">Historia</h4>
                    <h4 className="font-century text-white ">Cookie Care</h4>
                    <h4 className="font-century text-white ">Why Crumble Co</h4>
                </div>
            </div>
            <div className="flex w-[130px] justify-center items-center">
                <Image src="/CrumblR-02.png" alt="logo" className=" " width={110} height={110}/>
            </div>
        </div>
        <div className="w-full h-[30px] border-t-1 border-solid border-white flex  justify-between items-center px-[5%]">
            <h5 className="text-white font-century text-[0.1em]">Copyright © 2024 Crumble co. Todos los derechos reservados.</h5>
            <h5 className="text-white font-century text-[0.1em]">Mexico</h5>
        </div>
    </footer>
  )
}
