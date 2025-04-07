export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest',
};
  
export const DEFAULT_USER = {
  id: '',
  username: '',
  email: '',
  role: USER_ROLES.USER,
  isActive: true,
};
  
export const userStatusMessages = {
  active: 'User is active',
  inactive: 'User is inactive',
  banned: 'User is banned',
};
  
export const getUserStatusMessage = (status: string) => {
  return userStatusMessages[status] || 'Unknown status';
};
  