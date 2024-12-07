

import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';
import { COOKIES_KEY } from './cookiesKey';
import TOASTER from '@components/common/Toaster';

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  public?: boolean;
}

const makeRequestWith = (BASE_TYPE?: 'BASE') => {
  const getBaseURL = (BASE_TYPE?: string) => {
    if (BASE_TYPE === 'BASE') {
      return process.env.NEXT_PUBLIC_BASE_URL;
    }
    return '';
  };

  const axiosInstance = axios.create({
    baseURL: getBaseURL(BASE_TYPE),
  });

  axiosInstance.interceptors.request.use((config: CustomAxiosRequestConfig) => {
    if (config && config.headers) {
      if (!config.headers.Authorization) {
        const token = getCookie(COOKIES_KEY.ACCESS_TOKEN);

        if (token && !config?.public) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
      } else {
        if (String(config.headers.Authorization).match('undefined')) {
          delete config.headers.Authorization;
        }
      }
      if (!config.headers['Content-Type']) {
        config.headers['Content-Type'] = 'application/json';
      }
    }
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {

      return error;
    },
  );
  return async (config: any) => {

    const configuration = {
      method: config.method || 'get',
      url: config.url,
      data: config.data,
      public: config.public,
      headers: config.headers ? config.headers : {},
      params: config.params,
      timeout: config.timeout ? config.timeout : 100000,
      cancelToken: config.cancelToken,
    };
    return axiosInstance(configuration)
      .then((result: AxiosResponse) => {
        if (result && result.status >= 200 && result.status < 300) {
        
          return { status: result.status, ...result.data };

        }
        throw result;
      })
      .catch((err: AxiosError) => {

        if (err?.response?.status == 401) {
          deleteCookie(COOKIES_KEY.ACCESS_TOKEN)
          deleteCookie(COOKIES_KEY.USER)
          window.location.href = '/login'
        }
        const error = err as unknown as {
          response: {
            data: { error?: string; message: string; code: number };
          };
        };
        TOASTER.failed({ message: error?.response?.data?.message });
        throw {
          error: {
            status: err?.response?.status,
            errorCode: error?.response?.data?.code,
            message: String(
              error?.response?.data?.message || 'Something went wrong',
            ),
          },
        };
      });
  };
};

const makeRequestClient = makeRequestWith('BASE');

export { makeRequestClient };
