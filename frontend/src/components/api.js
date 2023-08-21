// api.js
import axios from 'axios';

// Define the base URL of your backend server
const BASE_URL = 'https://commuspace-5xfj.onrender.com'; // Replace with your actual backend URL

export const getUserCommunities = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/user-communities`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
