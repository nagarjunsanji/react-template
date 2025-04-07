import { createReducer } from '@reduxjs/toolkit';
import { fetchUser, updateUser } from './actions';
import { UserState } from './types';

const initialState: UserState = {
    data: null,
    loading: false,
};

const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchUser, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
        .addCase(updateUser, (state, action) => {
            if (state.data) {
                state.data = { ...state.data, ...action.payload };
            }
        });
});

export default userReducer;
