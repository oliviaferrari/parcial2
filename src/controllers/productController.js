import axios from 'axios';

const productController = {
  getAllProducts: async () => {
    try {
      const response = await axios.get('/products');
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  createProduct: async (productData) => {
    try {
      const response = await axios.post('/products', productData);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default productController;
