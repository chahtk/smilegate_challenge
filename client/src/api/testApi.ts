import axios from 'axios';

export const getUserProfile = async () => {
  const response = await axios.get<UserProfile>('http://localhost:3001');
  return response.data;
};

export interface UserProfile {
  id: number;
  email: string;
}
