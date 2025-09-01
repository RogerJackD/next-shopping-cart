
import { Product } from '@/features/products/interfaces/product';
import { getProducts } from '@/features/products/services/api';
import React, { useEffect, useState } from 'react'
import ProductCard from '../../../shared/components/organisms/product-card';

export default function ProductCatalog() {

    const [dataResponse, setDataResponse] = useState<Product[]>([]);

    useEffect(() => {
        
        async function handleFetchData() {
            const products = await getProducts()
            setDataResponse(products)
            console.log(products)
        }
        handleFetchData()
      
    }, [])
    

  return (
    <>
        {
            dataResponse.length === 0 ? (
                <h1>cargando...</h1>
            ) : (
                <div className='grid grid-cols-5 gap-2'>
                    {
                        dataResponse.map( (product) => (
                            <ProductCard key={product.id} product={product}/>
                        ))
                    }
                </div>
            )
        }
    </>

  )
}
