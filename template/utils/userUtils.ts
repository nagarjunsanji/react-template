import { USER_ROLES, userStatusMessages } from '../constants/user';

// Check if the user role is valid
export const isValidUserRole = (role: string): boolean => {
  return Object.values(USER_ROLES).includes(role);
};

// Generate a friendly name for a user’s role
export const getRoleName = (role: string): string => {
  switch (role) {
    case USER_ROLES.ADMIN:
      return 'Administrator';
    case USER_ROLES.USER:
      return 'Standard User';
    case USER_ROLES.GUEST:
      return 'Guest User';
    default:
      return 'Unknown Role';
  }
};

// Determine if the user is active based on status
export const isUserActive = (isActive: boolean): string => {
  return isActive ? userStatusMessages.active : userStatusMessages.inactive;
};

// Format user’s name from first and last name
export const formatUserName = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
};

// Map status to corresponding message
export const mapStatusToMessage = (status: string): string => {
  return userStatusMessages[status] || 'Unknown Status';
};
