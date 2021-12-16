import axios, { AxiosResponse } from 'axios';

export const emailSendApi = async (email: string): Promise<number | boolean> => {
  const url = `http://localhost:3001/auth/email/${email}`;
  try {
    const response = await axios.get<AxiosResponse>(url);
    return response.status;
  } catch (e) {
    return false;
  }
};

export const codeSendApi = async (code: string): Promise<number | boolean> => {
  const url = `http://localhost:3001/auth/code/${code};`;
  try {
    const response = await axios.get<AxiosResponse>(url);
    return response.status;
  } catch (e) {
    return false;
  }
};
