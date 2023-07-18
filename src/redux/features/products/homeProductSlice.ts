import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

interface IHomeProduct {
  status: boolean;
  publicationDate: number;
}

const initialState: IHomeProduct = {
  status: false,
  publicationDate: 150,
};

const homeProductSlice = createSlice({
  name: 'homeProduct',
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

export const { toggleState, setPublicationDate } = homeProductSlice.actions;
export default homeProductSlice.reducer;
