export interface Product {
  id: number;
  title: string;
  price: number;
  description: string | null;
  mainImage: string;
  galleryImages: string[];
}

export interface ProductApiResponse {
    id: number;
    title: string;
    price: number;
    description: string | null;
    main_image: string;
    gallery_images: string[];
}




export type ProductsApiResponse = ProductApiResponse[];


