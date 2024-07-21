'use client'

import { NextUIProvider } from '@nextui-org/react'

interface Props {
  children: React.ReactNode;
}


export const Provider = ({children}:Props) => {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}


