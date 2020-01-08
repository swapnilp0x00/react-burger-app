import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-66bcf.firebaseio.com/'
});

export default instance;