const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const getToken = () => localStorage.getItem('token');

const apiCall = async (method, endpoint, data = null) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`
  };

  const config = {
    method,
    headers,
    url: `${API_BASE_URL}${endpoint}`
  };

  if (data) config.data = data;

  try {
    const response = await fetch(config.url, {
      method: config.method,
      headers: config.headers,
      body: config.data ? JSON.stringify(config.data) : undefined
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const auth = {
  register: (email, password, name) =>
    apiCall('POST', '/auth/register', { email, password, name }),
  login: (email, password) => apiCall('POST', '/auth/login', { email, password }),
  getProfile: () => apiCall('GET', '/users/profile'),
  updateProfile: (data) => apiCall('PUT', '/users/profile', data)
};

export const projects = {
  getAll: () => apiCall('GET', '/projects'),
  create: (data) => apiCall('POST', '/projects', data),
  get: (id) => apiCall('GET', `/projects/${id}`),
  update: (id, data) => apiCall('PUT', `/projects/${id}`, data),
  delete: (id) => apiCall('DELETE', `/projects/${id}`)
};

export const tasks = {
  getByProject: (projectId) => apiCall('GET', `/tasks/project/${projectId}`),
  create: (data) => apiCall('POST', '/tasks', data),
  update: (id, data) => apiCall('PUT', `/tasks/${id}`, data),
  delete: (id) => apiCall('DELETE', `/tasks/${id}`)
};
