import axios from 'axios';

const orderController = {
  getAllOrders: async () => {
    try {
      const response = await axios.get('/orders');
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
  createOrder: async (orderData) => {
    try {
      const response = await axios.post('/orders', orderData);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default orderController;
