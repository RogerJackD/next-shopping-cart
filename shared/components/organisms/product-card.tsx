

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../atoms/card'
import Image from 'next/image'
import { Button } from '../atoms/button'
import { ShoppingCart } from 'lucide-react'

export default function ProductCard() {
  return (
      <Card className='h-full flex flex-col'>
        <CardHeader>
            <Image
              src={'https://m.media-amazon.com/images/I/71Tb0MNtXvL._AC_SY200_.jpg'}
              alt={'imageproduct'}
              width={200}
              height={50}
              priority
              className='object-cover w-full h-full'
            />
        </CardHeader>

        <CardContent className='flex-1 p-4'>
          <CardTitle className='text-lg mb-2'>Monitor Gaming 24 pulgadas</CardTitle>
          <p className='text-sm text-gray-600 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugit distinctio labore optio. Odit magnam doloribus obcaecati? Aut tenetur hic aliquam dolore, labore, est numquam eaque aperiam accusamus, quos recusandae?</p>
          <p className='text-2xl font-bold'>$ 500.00</p>
        </CardContent>

        <CardFooter>
          <Button className='w-full bg-violet-950' size={'lg'}>
            <ShoppingCart className='mr-2'/>
            Agregar al carrito
          </Button>
        </CardFooter>
      </Card>
    
  )
}
