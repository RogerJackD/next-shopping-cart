

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../atoms/card'
import Image from 'next/image'
import { Button } from '../atoms/button'
import { ShoppingCart } from 'lucide-react'
import { Product } from '../../../features/products/interfaces/product';

interface ProductCardProps {
  product: Product
}


export default function ProductCard({product} : ProductCardProps) {
  return (
      <Card className='h-full flex flex-col'>
        <CardHeader>
          <div className="aspect-square">
            <Image
              src={product.main_image}
              alt={'imageproduct'}
              width={200}
              height={50}
              priority
              className='object-contain w-full h-full hover:scale-105  duration-600'
            />
          </div>
        </CardHeader>

        <CardContent className='flex-1 p-4'>
          <CardTitle className='text-lg mb-2'>{ product.title}</CardTitle>
          <p className='text-sm text-gray-600 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugit distinctio labore optio. Odit magnam doloribus obcaecati? Aut tenetur hic aliquam dolore, labore, est numquam eaque aperiam accusamus, quos recusandae?</p>
          <p className='text-2xl font-bold'>{ product.price }</p>
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
