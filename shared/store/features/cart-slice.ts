import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartProductBase {
    id: number;
    title: string;
    price: number;
    mainImage: string;
}

export interface CartItem extends CartProductBase {
    quantity: number;
}


interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalPrice: number;
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action : PayloadAction<CartProductBase>) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id == newItem.id);

            if(existingItem){
                existingItem.quantity++;
            } else {
                state.items.push({...newItem, quantity : 1});
            }

            state.totalQuantity++;
            state.totalPrice += newItem.price;
        }   
    }
})

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;