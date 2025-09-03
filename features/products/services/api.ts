import { Product, ProductsApiResponse } from '@/features/products/interfaces/product';
import { mapProduct } from '../adapters/productAdapter';

const API_BASE_URL = 'http://localhost:3030/api';

async function handleApiResponse<T>(response : Response): Promise<T> {
    if( !response.ok ){
        throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();

    return data;
}


export async function getProducts(): Promise<Product[]> {
    const response = await fetch(`${API_BASE_URL}/products`, {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
    });

    const productsResponse = await handleApiResponse<ProductsApiResponse>(response);

    return productsResponse.map(mapProduct);
}
