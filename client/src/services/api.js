import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const sendContactInquiry = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contact`, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.error || 'Failed to send inquiry.');
    }
    throw new Error('Unable to send inquiry right now. Please email directly at bhatiagungun1111@gmail.com.');
  }
};
