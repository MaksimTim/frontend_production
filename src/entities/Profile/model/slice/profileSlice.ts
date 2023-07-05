import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/Profile';

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  error: undefined,
  data: undefined,
};

export const profileSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setAuthData: (state, action) => {

    },

  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
