"use client";

import Navbar from '../shared/components/navbar';
import ProductCatalog from '@/features/products/components/product-catalog';



export default function Home() {
  

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <ProductCatalog/>
    </div>
  );
}
