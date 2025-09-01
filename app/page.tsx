"use client";

import ProductCatalog from "@/features/products/components/product-catalog";
import Navbar from '../shared/components/navbar';



export default function Home() {
  

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <ProductCatalog/>
      <ProductCatalog/>

      <ProductCatalog/>

    </div>
  );
}
