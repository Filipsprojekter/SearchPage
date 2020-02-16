import axios from 'axios';
require('dotenv').config();

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: process.env.ClientId
    }
});