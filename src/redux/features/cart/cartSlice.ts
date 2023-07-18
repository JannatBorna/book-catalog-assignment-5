import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../../types/globalTypes';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
  total: number;
}

const initialState: ICart = {
  products: [],
  total: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //! add cart
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (product) => product._id == action.payload._id
      );
      if (existing) {
        existing.no = existing.no! + 1;
      } else {
        state.products.push({ ...action.payload, no: 1 });
      }
      // total
      //   state.total += action.payload.no;
    },

    //! remove one
    removeOne: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (product) => product._id == action.payload._id
      );
      if (existing && existing.no! > 1) {
        // existing && existing.quantity! > 1 মানে remove করতে করতে যেনো -1,-2,-3 তে না যাই।  1 তেই থেমে যাবে
        existing.quantity = existing.no! - 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
        // state.products.push({ ...action.payload, quantity: 1 });
      }

      // total
      //   state.total -= action.payload.no;
    },

    //! delate
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      // total
      //   state.total -= action.payload.no * action.payload.quantity!;
    },
  },
});

export const { addToCart, removeOne, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
