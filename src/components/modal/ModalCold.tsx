'use client'
import useStoreIsOpenCold from '@/store/stateIsOpenCold'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'

export const ModalCold = () => {
    const {isOpenCold,setIsOpenCold} = useStoreIsOpenCold();
  return (
    <Modal radius='sm'  className='z-10' isOpen={isOpenCold} onOpenChange={setIsOpenCold}  isKeyboardDismissDisabled={true}>
        <ModalContent>
            {(onClose) => (
            <>
                <ModalHeader className="-z-10 flex flex-col gap-1 font-market text-5xl text-[#d07f7c] drop-shadow-lg">cold bar</ModalHeader>
                <ModalBody>
                    <p className='font-century  text-[#d07f7c]'> 
                        1.⁠ ⁠Milkshakes: encuentra 5 diferentes sabores de las mejores malteadas del condado: Cookie Dough (galleta de chispas de chocolate), Rocky Road (chocolate y bombones), Strawberry Cheesecake (cheesecake de fresa), fruity pebbles (el famosísimo cereal de los picapiedras) y matcha 
                    </p>
                    <p className='font-century  text-[#d07f7c]'>
                        2.⁠ ⁠Drizzles: ¿habrá algo mejor que la combinación de helado y galletas? En Crumble lo hicimos realidad creando nuestro propio helado de nuestras cookies.  
                    </p>
                    <p className='font-century  text-[#d07f7c]'>
                        3.⁠ ⁠Lattes: Bebidas frías que vas a amar encuentra nuestros especiales: Nutella Latte, Oreo Latte, Chai y Matcha con fresa
                    </p>
                    
                
                </ModalBody>
                <ModalFooter>
                    <Button className='bg-[#d07f7c] text-white' onPress={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </>
            )}
        </ModalContent>
    </Modal>
  )
}
