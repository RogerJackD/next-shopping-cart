

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../atoms/card'
import Image from 'next/image'
import { Button } from '../atoms/button'
import { ShoppingCart } from 'lucide-react'

export default function ProductCard() {
  return (
      <Card className='h-full flex flex-col'>
        <CardHeader>
          <div>
            <Image
              src={'https://m.media-amazon.com/images/I/71Tb0MNtXvL._AC_SY200_.jpg'}
              alt={'imageproduct'}
              width={300}
              height={50}
              priority
            />
          </div>
        </CardHeader>

        <CardContent>
          <CardTitle>Monitor Gaming 24 pulgadas</CardTitle>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugit distinctio labore optio. Odit magnam doloribus obcaecati? Aut tenetur hic aliquam dolore, labore, est numquam eaque aperiam accusamus, quos recusandae?</p>
          <p>$ 500.00</p>
        </CardContent>

        <CardFooter>
          <Button>
            <ShoppingCart/>
            Agregar al carrito
          </Button>
        </CardFooter>
      </Card>
    
  )
}
