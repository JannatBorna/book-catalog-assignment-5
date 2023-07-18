import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

interface IProduct {
  status: boolean;
  publicationDate: number;
}

const initialState: IProduct = {
  status: false,
  publicationDate: 150,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleState: (state) => {
      state.status = !state.status;
    },
    setPublicationDate: (state, action: PayloadAction<number>) => {
      state.publicationDate = action.payload;
    },
  },
});

export const { toggleState, setPublicationDate } = productSlice.actions;
export default productSlice.reducer;
