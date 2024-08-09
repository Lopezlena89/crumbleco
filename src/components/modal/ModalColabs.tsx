'use client'
import useStoreIsOpenColabs from '@/store/stateIsOpenColabs'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'

export const ModalColabs = () => {
    const {isOpenColab,setIsOpenColab} = useStoreIsOpenColabs();
  return (
    <Modal radius='sm'  className='z-10' isOpen={isOpenColab} onOpenChange={setIsOpenColab}  isKeyboardDismissDisabled={true}>
        <ModalContent>
            {(onClose) => (
            <>
                <ModalHeader className="-z-10 flex flex-col gap-1 font-market text-5xl text-[#d07f7c] drop-shadow-lg">colabs</ModalHeader>
                <ModalBody>
                    <p className='font-century  text-[#d07f7c]'> 
                        En Crumble AMAMOS hacer colaboraciones y hacer equipo con marcas que admiramos muchísimo.
                    </p>
                    <p className='font-century  text-[#d07f7c]'>
                        1.⁠ ⁠Vaso fresero ft Crumble: esta Colab con Muy Fresa. Su tradicional vaso fresero con nuestras cookietellas. 
                    </p>
                    <p className='font-century  text-[#d07f7c]'>
                        2.⁠ ⁠Crookie: el viral croissant con galleta lo hicimos realidad con los mejores para hacer croissants: Tuesday´s & Fridays y nuestra Crumble Queen 
                    </p>
                    <p className='font-century  text-[#d07f7c]'>
                        3.⁠ ⁠Mother’s Box: para celebrar el día de las madres, nos unimos con 2 nuevas mamás que amamos y admiramos. Esta cajita con Becky de El Panetario y Bety de Mil Miel.
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
