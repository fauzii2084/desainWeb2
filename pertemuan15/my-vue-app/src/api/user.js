import api from '@/libs/axios'

export const getAllUsers = () => api.get('/users')
