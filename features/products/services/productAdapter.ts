import { Product, ProductApiResponse } from "../interfaces/product";

export function mapProduct(apiProductResponse: ProductApiResponse): Product {
  return {
    id: apiProductResponse.id,
    title: apiProductResponse.title,
    price: apiProductResponse.price,
    description: apiProductResponse.description,
    mainImage: apiProductResponse.main_image,
    galleryImages: apiProductResponse.gallery_images,
  };
}