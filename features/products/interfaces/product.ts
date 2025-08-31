export interface Product {
    id: number;
    title: number;
    price: number;
    description: string | null;
    main_image: string;
    gallery_images: string[];
}

export type ProductsResponse = Product[]