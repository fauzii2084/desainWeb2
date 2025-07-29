import api from '@/libs/axios'

export const getAllTodos = () => api.get('/todos')