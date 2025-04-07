import { createAction } from '@reduxjs/toolkit';
import { FETCH_USER, UPDATE_USER } from './constants';
import { User } from './types';

export const fetchUser = createAction<User>(FETCH_USER);
export const updateUser = createAction<User>(UPDATE_USER);
