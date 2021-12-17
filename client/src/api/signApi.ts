import axios, { AxiosResponse } from 'axios';

const option = {
  withCredentials: true,
};

export const signUpApi = async (email: string, pass: string, userName: string): Promise<number | boolean> => {
  const url = 'http://localhost:3001/sign/up';
  const data = { email, pass, userName };
  try {
    const response = await axios.post<AxiosResponse>(url, data, option);
    return response.status;
  } catch (e) {
    return false;
  }
};

export const signInApi = async (email: string, pass: string): Promise<number | boolean> => {
  const url = 'http://localhost:3001/sign/in';
  const data = { email, pass };
  try {
    const response = await axios.post<AxiosResponse>(url, data, option);
    return response.status;
  } catch (e) {
    return false;
  }
};
