/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { eventBus } from '@/main';
import { ServerError, ClientError, NoConnectionError } from '../models/httpError';

export const apiConfig = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});

apiConfig.interceptors.request.use(config => {
  console.log('config log url', config.url);
  return config;
});

apiConfig.interceptors.response.use(
  res => res,
  err => {
    console.log(err.status, err.message, err.details, err.response.status);
    if (err.response) {
      if (err.response.status >= 400 && err.response.status <= 499) {
        console.error(`Error Occurred with status ${err.response.status} and body ${JSON.stringify(err.message)}`);
        eventBus.$emit('error', new ClientError(err.response.status, err.response.message, err.response));
      }
      if (err.response.status >= 500) {
        console.error(`Error Occurred with status ${err.response.status} and body ${JSON.stringify(err.message)}`);
        eventBus.$emit('error', new ServerError(err.response.status, err.response.message, err.response));
      } else if (err.response.status === 0) {
        console.error(`Error Occurred with status ${err.response.status} and body ${JSON.stringify(err.message)}`);
        throw new NoConnectionError();
      }
    } else {
      console.error(`Something horrible went wrong, ${err}`);
    }
    return Promise.reject(err);
  },
);
