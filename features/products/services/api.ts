import { ProductsResponse } from "../interfaces/product";

const API_BASE_URL = 'http://localhost:3030/api';

async function handleApiResponse<T>(response : Response): Promise<T> {
    console.log({response})
    if( !response.ok ){
        throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }
    const dataaa = await response.json();

    console.log({dataaa})
    return dataaa;
}


export async function getProducts(): Promise<ProductsResponse> {
    const response = await fetch(`${API_BASE_URL}/products`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
    });
    
    return handleApiResponse<ProductsResponse>(response);
}