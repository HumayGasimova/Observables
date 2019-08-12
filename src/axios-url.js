/**
 * Libraries
 */

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e5837.firebaseio.com/'
});

export default instance;