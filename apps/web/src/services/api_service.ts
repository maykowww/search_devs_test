import axios from 'axios';
import { User } from './models/user_model';

export const apiService = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_BASE_URL,
});
