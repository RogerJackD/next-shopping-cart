"use client";

import { getProducts } from "@/features/products/services/api";
import ProductCard from "@/shared/components/organisms/product-card";
import { useEffect, useState } from "react";


export default function Home() {

  const [dataResponse, setDataResponse] = useState({})

  useEffect(() => {
    async function handleApiResponse(){
      const data = await getProducts()
      console.log(data)
      setDataResponse(data)
    } 
    handleApiResponse()
  
  }, [])
  




  return (
    <>
      <h1>hello</h1>
      
        {dataResponse ? (
          <pre>{JSON.stringify(dataResponse, null, 2)}</pre>
        ) : (
          <span>cargando...</span>
        )}
        

      <div className="grid grid-cols-3 gap-6">
        <ProductCard/>
        <ProductCard/>
      </div>
    </>
  );
}
