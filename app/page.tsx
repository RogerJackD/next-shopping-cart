"use client";

import { getProducts } from "@/features/products/services/api";


export default function Home() {

  getProducts()


  return (
    <>
      <h1>hello</h1>
    </>
  );
}
