

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../../../shared/components/atoms/card'
import Image from 'next/image'
import { Button } from '../../../../shared/components/atoms/button'
import { ShoppingCart } from 'lucide-react'
import { Product } from '../../interfaces/product';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks'
import { addItemToCart } from '@/shared/store/features/cart-slice'
import { adaptProductToCart } from '@/features/cart/adapters/cartProductAdapter'

interface ProductCardProps {
  product: Product
}


export default function ProductCard({product} : ProductCardProps) {

  const dispatch = useAppDispatch();
  const { items } = useAppSelector(state => state.cartReducer);
  const handleAddToCart = () =>{ 
    const item = adaptProductToCart(product);
    dispatch(addItemToCart(item));
    console.log(items);
  }


  return (
      <Card className='h-full flex flex-col'>
        <CardHeader>
          <div className="aspect-square">
            <Image
              src={product.mainImage}
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
          <Button className='w-full bg-violet-950' size={'lg'} onClick={handleAddToCart}>
            <ShoppingCart className='mr-2'/>
            Agregar al carrito
          </Button>
        </CardFooter>
      </Card>
    
  )
}
