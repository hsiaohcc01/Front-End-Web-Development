export const SERVER = {
  AUTH_MISSING: 'auth-missing',
  AUTH_INSUFFICIENT: 'auth-insufficient',
  REQUIRED_USERNAME: 'required-username',
};

export const CLIENT = {
  NETWORK_ERROR: 'network-error',
  REQUIRED_MESSAGES: 'required-message',
  NO_SESSION: 'noSession',
};

export const MESSAGES = {
  [CLIENT.NETWORK_ERROR]: 'Error: Please check your network connection',
  [CLIENT.REQUIRED_MESSAGES]: 'Error: Message cannot be empty',
  [SERVER.AUTH_INSUFFICIENT]: 'Error: dog is invalid uersame',
  [SERVER.AUTH_MISSING]: 'Error: Your session is invalid or has expired',
  [SERVER.REQUIRED_USERNAME]: 'Error: Ensure the username is not empty and contains only letters and numbers',
  default: 'Unexpected error occurred. Please try again',
};
