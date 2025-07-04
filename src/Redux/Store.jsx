import { configureStore } from '@reduxjs/toolkit';
import CartSlice from '../Redux/Slices/CartSlice'
import CategorySlice from '../Redux/Slices/CategorySlice'
import SearchSlice from '../Redux/Slices/SearchSlice'

const Store = configureStore({
    reducer: {
        cart: CartSlice,
        category: CategorySlice,
        search: SearchSlice,
    },
}
);
export default Store;