import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import type { PayloadAction } from '@reduxjs/toolkit';
import { auth } from '../../../lib/firebase';

interface IUserState {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

interface ICredential {
  email: string;
  password: string;
}

const initialState: IUserState = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

//Create async thunk ( signup )
export const createUser = createAsyncThunk(
  'user/createUser',
  async ({ email, password }: ICredential) => {
    //firebase
    const data = await createUserWithEmailAndPassword(auth, email, password);

    return data.user.email;
  }
);

//Create async thunk (  login )
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ email, password }: ICredential) => {
    //firebase
    const data = await signInWithEmailAndPassword(auth, email, password);

    return data.user.email;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      // logout onAuthStateChanged
      state.user.email = action.payload;
    },
    setLoaging: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //sign up
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message!;
      })
      // login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message!;
      });
  },
});

//app.tsx er joon export
export const { setUser, setLoaging } = userSlice.actions;
export default userSlice.reducer;
