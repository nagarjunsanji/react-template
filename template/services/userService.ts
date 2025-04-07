import { DEFAULT_USER, USER_ROLES, getUserStatusMessage } from '../constants/user';

// Simulated API call to get user data
export const getUserData = async (userId: string): Promise<any> => {
  try {
    const response = await fetch(`/api/users/${userId}`);
    if (!response.ok) throw new Error('Failed to fetch user data');
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return DEFAULT_USER;
  }
};

// Simulated API call to update user data
export const updateUserData = async (userId: string, updatedData: any): Promise<any> => {
  try {
    const response = await fetch(`/api/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) throw new Error('Failed to update user data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Check if the user has admin rights
export const isAdmin = (userRole: string): boolean => {
  return userRole === USER_ROLES.ADMIN;
};

// Get user status message based on status code
export const getUserStatus = (status: string) => {
  return getUserStatusMessage(status);
};
