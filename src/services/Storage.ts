export const getAccessToken = (): string | null => {
  return localStorage.getItem('token');
};

export const setAccessToken = (token: string): void => {
  localStorage.setItem('token', token);
};

export const clearAccessToken = (): void => {
  localStorage.removeItem('token');
};
