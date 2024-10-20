import callAPI, { BASE_API_URL } from '..';
import { FormLoginAPI } from '../../types';

export const POST_TO_LOGIN = async (data: FormLoginAPI) => {
  const ENDPOINT = `auth/login`;
  const url = `${BASE_API_URL}/${ENDPOINT}`;

  return callAPI({
    url,
    method: 'POST',
    data,
  });
};
