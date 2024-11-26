import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// User APIs
export const fetchUsers = () => API.get('/users');
export const createUser = (user) => API.post('/users', user);
export const updateUser = (id, user) => API.put(`/users/${id}`, user);
export const deleteUser = (id) => API.delete(`/users/${id}`);

// Role APIs
export const fetchRoles = () => API.get('/roles');
export const createRole = (role) => API.post('/roles', role);
export const updateRole = (id, role) => API.put(`/roles/${id}`, role);
export const deleteRole = (id) => API.delete(`/roles/${id}`);
