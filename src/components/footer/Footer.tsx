import Image from "next/image"


export const Footer = () => {
  return (
    // <footer className="w-full h-[120px] flex justify-between bg-[#ffd9d9]">
     <footer className="w-full h-auto bg-[rgba(255,21,121,1)] "> 
        <div className="w-full h-[120px] flex justify-between px-[5%]">
            <div className="h-full  flex items-baseline ">
                <div className="w-[100px] h-full flex flex-col justify-center ">
                    <h3 className=" font-extrabold text-white text-[0.1em]">Descubrir y Comprar</h3>
                    <h4 className="font-century text-white text-[0.1em]">Cookies</h4>
                    <h4 className="font-century text-white text-[0.1em]">Cold Bar</h4>
                    <h4 className="font-century text-white text-[0.1em]">Crumble specials</h4>
                </div>
                <div className="w-[200px] h-full flex flex-col justify-center px-[10%] ">
                    <h3 className="font-extrabold text-white text-[0.1em]">Direccion</h3>
                    <h4 className="font-century text-white text-[0.1em]">Monte Everest 203 A, Los Bosques, 20120 Aguascalientes, Ags.</h4>
                
                </div>
                <div className="w-[100px] h-full flex flex-col justify-center ">
                    <h3 className="font-extrabold text-white text-[0.1em]">Crumble Co</h3>
                    <h4 className="font-century text-white text-[0.1em]">Historia</h4>
                    <h4 className="font-century text-white text-[0.1em]">Cookie Care</h4>
                    <h4 className="font-century text-white text-[0.1em]">Why Crumble Co</h4>
                </div>
            </div>
            <Image src="/CrumblR-02.png" alt="logo" width={110} height={110}/>
        </div>
        <div className="w-full h-[30px] border-t-1 border-solid border-white flex  justify-between items-center px-[5%]">
            <h5 className="text-white font-century text-[0.1em]">Copyright © 2024 Crumble co. Todos los derechos reservados.</h5>
            <h5 className="text-white font-century text-[0.1em]">Mexico</h5>
        </div>
    </footer>
  )
}
