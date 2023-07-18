import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:2000/' }),
  //comment korar por jokhon comment refrace na korle show kore na.. jeno show kor tar jonno togTypes
  tagTypes: ['comments'],

  endpoints: () => ({}),
});
// productApi.ts a injectEndpoints (code gulo neya hoise) kora hoyese