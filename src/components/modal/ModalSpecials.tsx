'use client'
import useStoreIsOpen from '@/store/stateIsOpen'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'

export const ModalSpecials = () => {
    const {isOpen,setIsOpen} = useStoreIsOpen();
  return (
    <Modal radius='sm'  className='z-10' isOpen={isOpen} onOpenChange={setIsOpen}  isKeyboardDismissDisabled={true}>
        <ModalContent>
            {(onClose) => (
            <>
                <ModalHeader className="-z-10 flex flex-col gap-1 font-market text-5xl text-[#d07f7c] drop-shadow-lg">specials</ModalHeader>
                <ModalBody>
                    <p className='font-century  text-[#d07f7c]'> 
                        Estos productos no los tenemos en nuestro menú fijo, pero ojo cuando los veas CORRE por ellos porque vas a A MAR LOS
                    </p>
                    <p className='font-century  text-[#d07f7c]'>
                        1.⁠ ⁠Batch: galleta congelada para que puedas hornearlo en tu casa y nunca te falte crumble 
                    </p>
                    <p className='font-century  text-[#d07f7c]'>
                        2.⁠ ⁠Cinnamon Buns: mis favoritos. Son los mejores roles de canela que vas a probar (muchas veces hacemos de sabores y combinaciones nuevas) . 
                    </p>
                    <p className='font-century  text-[#d07f7c]'>
                        3.⁠ ⁠Crumble Jar: la carlota de Crumble. Capas de cookeitella, nutella y whipped cream. 
                    </p>
                    <p className='font-century  text-[#d07f7c]'>
                        4.⁠ ⁠Grandma´s Cake: pastel de la receta de mi abuela. Me recuerda a cuando era bebita y así me festejaban. Obvio le dimos nuestro “toque Crumble” y puedes pedirlo con galletas de topping.
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
