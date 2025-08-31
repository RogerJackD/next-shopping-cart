import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //configuracion de dominio para imagenes externas
  images: {
    domains: ["m.media-amazon.com", "plazavea.vteximg.com.br"],
  }
};

export default nextConfig;
