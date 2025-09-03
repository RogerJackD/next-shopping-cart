import { Product } from "../../products/interfaces/product";
import { CartProductBase } from '@/shared/store/features/cart-slice';

export const adaptProductToCart = (product: Product): CartProductBase => {
    return {
        id: product.id,
        title: product.title,
        price: product.price,
        mainImage: product.mainImage,
    };
};