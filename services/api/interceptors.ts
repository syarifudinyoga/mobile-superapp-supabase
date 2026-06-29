import { apiClient } from "./client";

apiClient.interceptors.request.use((config) => {
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,

  (error) => {
    return Promise.reject(error);
  }
);