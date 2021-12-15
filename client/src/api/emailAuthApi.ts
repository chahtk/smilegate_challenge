import axios, { AxiosResponse } from 'axios';

export const emailAuthApi = async (email: string): Promise<number | boolean> => {
  const url = `http://localhost:3001/auth/email/${email}`;
  try {
    const response = await axios.get<AxiosResponse>(url);
    return response.status;
  } catch (e) {
    return false;
  }
};
