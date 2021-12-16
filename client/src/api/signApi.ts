import axios, { AxiosResponse } from 'axios';

export const signUpApi = async (email: string, pass: string, userName: string): Promise<number | boolean> => {
  const url = 'http://localhost:3001/sign';
  const data = { email, pass, userName };
  try {
    const response = await axios.post<AxiosResponse>(url, data);
    return response.status;
  } catch (e) {
    return false;
  }
};
