import axios, { AxiosError, AxiosResponse } from "axios";
import { APP_BASE_URL, EMPTY_STRING } from "../utilities/string_constants";
import { STATUS_CODE_ERROR_MESSAGE } from "../utilities/enums";
import { toast } from "react-toastify";

axios.defaults.baseURL = APP_BASE_URL;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

axios.interceptors.request.use(config => {
  const user = localStorage.getItem("user");
  const token = !!user ? JSON.parse(user).token : EMPTY_STRING;

  if (token) config.headers!.Authorization = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;

    switch (status) {
      case 400:
        if (data.error) {
          const modalStateErrors = [];

          for (const key in data.errors) {
            if (data.errors[key]) {
              modalStateErrors.push(data.errors[key])
            }
          }

          throw modalStateErrors.flat();
        }
        break;

      case 401:
        toast.error(STATUS_CODE_ERROR_MESSAGE.UNAUTHORIZED)
        break;

      case 403:
        toast.error(STATUS_CODE_ERROR_MESSAGE.FORBIDDEN)
        break;

      case 404:
        toast.error('Not Found')
        break;

      case 500:
        toast.error(STATUS_CODE_ERROR_MESSAGE.SERVER_ERROR)
        break;
    }

    return Promise.reject(error);
  });


export const request = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}