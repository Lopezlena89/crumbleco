import { navProducts, navProps } from "@/database/products"
import { Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Link, } from "@nextui-org/react"
import Image from "next/image"
import { CiShoppingBasket } from "react-icons/ci"
import { IoIosClose } from "react-icons/io";



{/* <div className="w-[15px] h-[15px]  rounded-full bg-red-100 absolute -top-[9px] -right-[9px]">
  <span className="text-[10px] font-light absolute right-[4.5px]">2</span>
</div> */}

export const Basket = () => {
  return (
    <div className="relative flex items-center ">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Link  className="bg-transparent">
                <CiShoppingBasket  className="cursor-pointer fill-[rgb(255,21,121)] duration-300"   size={22} />
            </Link>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="title" className="h-10">
              <p className="font-semibold">Your Order</p>
            </DropdownItem>
            <DropdownSection>
                {
                    navProducts.map((product,index)=>(
                        <DropdownItem key={index} className="flex items-center w-full">
                            <div className="w-full flex items-center  justify-start">
                                <div className="flex items-center">
                                    <span className="font-semibold">{product.total}</span>
                                    <span className="font-semibold pl-2">{product.product} </span>
                                </div>
                               
                            </div>
                        </DropdownItem>
                    ))
                }
            </DropdownSection>
            
            <DropdownItem key="team_settings">
                <div className="flex justify-between items-center">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">$350</span>
                </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        
    </div>
  )
}
