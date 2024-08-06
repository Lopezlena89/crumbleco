'use client'

import useStateCartStore from "@/store/stateCartStore"
import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Link, } from "@nextui-org/react"
import { CiShoppingBasket } from "react-icons/ci"
import { PiWhatsappLogoThin } from "react-icons/pi"



{/* <div className="w-[15px] h-[15px]  rounded-full bg-red-100 absolute -top-[9px] -right-[9px]">
  <span className="text-[10px] font-light absolute right-[4.5px]">2</span>
</div> */}

export const Basket = () => {
  const {statePrice,products} = useStateCartStore();

  return (
    <div className="relative flex items-center ">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Link  className="bg-transparent">
                <CiShoppingBasket  className="cursor-pointer fill-[#d07f7c] font-extrabold " size={22} />
                <div className="w-[15px] h-[15px] bg-[#ecb3b0] absolute -top-2 -right-2 rounded-full flex justify-center items-center" >
                    <span className="text-white text-[0.6em]">{products.length}</span>
                </div>
            </Link>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="title" className="h-10">
              <p className="font-semibold">Your Order</p>
            </DropdownItem>
            <DropdownSection>
               
                  {
                      products.map((product,index)=>(
                        <DropdownItem key={index} className="flex  items-center w-full">
                            <div className="w-full h-auto flex items-center  justify-between ">
                                <div className="flex items-center">
                                  <span className="font-semibold">{product.count}</span>
                                  <span className="font-semibold ml-2">{product.name}</span>
                                </div>
                                <span className="font-semibold pl-2">${product.price} </span>
                            </div>
                        </DropdownItem>
                      ))
                  }
                             
              
            </DropdownSection>
            
            <DropdownItem >
                <div className="flex justify-between items-center">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${statePrice}</span>
                </div>
            </DropdownItem>
            <DropdownItem className="p-0" >
                <div className="w-full h-[40px] bg-[#32d851] rounded-xl flex items-center justify-around">
                  <span>Comprar</span>
                  <Link>
                    <PiWhatsappLogoThin color='black' size={25}  className="cursor-pointer   duration-300" />
                  </Link>
                </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        
    </div>
  )
}
