import { Advice } from '@/types/Advice';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://localhost:7206/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  async getAdvices() {
    return apiClient.get<Advice[]>('/Advice');
  },
  async getAdvice(externalId: number) {
    return apiClient.get<Advice>(`/Advice/${externalId}`);
  }
};