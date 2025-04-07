import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { userMutations } from '../store/user';
import { User } from '../store/user/types';

export const useUser = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.data);
  const loading = useSelector((state: RootState) => state.user.loading);

  const fetchUser = () => {
    dispatch(userMutations.fetchUserAsync());
  };

  const updateUser = (userData: Partial<User>) => {
    dispatch(userMutations.updateUserAsync(userData));
  };

  return { user, loading, fetchUser, updateUser };
};
