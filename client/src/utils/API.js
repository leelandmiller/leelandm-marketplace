import axios from 'axios';

const api = {
    // hit api route on server -- will query Amazon and get products
    getProducts: function() {
        return axios.get('/api');
    },
    getOneProduct: function(product) {
        return axios.get(`/api/${product}`);
    }
}

export default api;
