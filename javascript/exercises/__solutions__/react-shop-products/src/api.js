import axios from 'axios';

const instance = axios.create({
  timeout: 5000,
  baseURL: 'https://euri-test-api.now.sh/api',
});

// Add a request log interceptor
instance.interceptors.request.use(config => {
  console.log(config.method.toUpperCase(), config.url);
  return config;
});

// Add error log interceptor
instance.interceptors.response.use(
  response => response,
  error => {
    // https://github.com/axios/axios#handling-errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    return Promise.reject(error);
  },
);

export default instance;
