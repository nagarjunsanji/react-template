import { Dispatch } from '@reduxjs/toolkit';
import { fetchUser, updateUser } from './actions';
import { User } from './types';

// Fetch user data asynchronously
export const fetchUserAsync = () => async (dispatch: Dispatch) => {
    const response = await fetch('/api/user');
    const data: User = await response.json();
    dispatch(fetchUser(data));
};

// Update user data asynchronously
export const updateUserAsync = (userData: Partial<User>) => async (dispatch: Dispatch) => {
    const response = await fetch('/api/user', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    const updatedUser: User = await response.json();
    dispatch(updateUser(updatedUser));
};
