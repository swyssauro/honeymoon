import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://discordhub.com/api/',
    headers: { 'X-API-KEY': 'RLQ_au3VXX1OW5Y-G5UJxZNI088' }
});

export default api;