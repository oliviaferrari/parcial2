import axios from 'axios';

const categoryController = {
  getAllCategories: async () => {
    try {
      const response = await axios.get('/categories');
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  createCategory: async (categoryData) => {
    try {
      const response = await axios.post('/categories', categoryData);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  
};

export default categoryController;
