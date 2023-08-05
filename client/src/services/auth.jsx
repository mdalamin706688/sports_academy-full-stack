// services/api.js

const API_BASE_URL = 'http://localhost:3000';

// Function to make a GET request to the API
export const get = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};