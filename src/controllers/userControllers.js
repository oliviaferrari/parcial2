
import axios from 'axios';

const userController = {
  getAllUsers: async () => {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  createUser: async (userData) => {
    try {
      const response = await axios.post('/users', userData);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },

};

export default userController;


