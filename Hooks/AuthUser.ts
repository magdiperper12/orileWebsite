import BaseUrl from "./BaseUrl";
export const getUsers = async () => {
  const response = await BaseUrl.get('/users');
  return response.data;
};

export const Login = async (userData:any) => {
  const response = await BaseUrl.post('/login', userData);
  return response.data;
};