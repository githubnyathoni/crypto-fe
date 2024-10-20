import axios, { AxiosRequestConfig } from 'axios';

const checkLocationHostname = () => {
  const version = 'v1';
  const prefix = 'api';

  return `http://localhost:3000/${version}/${prefix}`;
};

export const BASE_API_URL = checkLocationHostname();

interface CallAPIProps extends AxiosRequestConfig {
  token?: string;
}

interface ErrorResponse {
  response: {
    data: {
      message: string;
    };
  };
}

export default async function callAPI({
  url,
  method,
  data,
  token,
}: CallAPIProps) {
  try {
    let headers = {};

    if (token) {
      headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    const response = await axios({
      url,
      method,
      data,
      headers,
    });

    return response.data;
  } catch (e) {
    const error = e as ErrorResponse;

    const response = {
      message: error.response.data.message,
      error: true,
    };
    return response;
  }
}
