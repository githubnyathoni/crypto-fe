import callAPI, { BASE_API_URL, GET_ACCESS_TOKEN } from '..';

export const GET_ALL_TRANSACTIONS = async (
  sender: string,
  receiver: string,
  startDate: string,
  endDate: string,
  page: number
) => {
  const ENDPOINT = `transaction/list`;
  const url = `${BASE_API_URL}/${ENDPOINT}?sender=${sender}&receiver=${receiver}&start_date=${startDate}&end_date=${endDate}&page=${page}`;
  const accessToken = GET_ACCESS_TOKEN();

  return callAPI({
    url,
    method: 'GET',
    token: accessToken,
  });
};
