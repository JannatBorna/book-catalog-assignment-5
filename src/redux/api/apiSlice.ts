import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bookcatalog-server.onrender.com/',
    // baseUrl: 'http://localhost:3000/',
  }),
  //comment korar por jokhon comment refrace na korle show kore na.. jeno show kor tar jonno togTypes
  tagTypes: [
    'comments',
    'books',
    'reviews',
    'myBooks',
    'singleBook',
    'wishlist',
    'readinglist',
  ],

  endpoints: () => ({}),
});
// productApi.ts a injectEndpoints (code gulo neya hoise) kora hoyese
