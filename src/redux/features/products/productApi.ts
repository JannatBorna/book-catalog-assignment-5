import { api } from '../../api/apiSlice';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // product
    getProducts: builder.query({
      query: () => '/product',
    }),

    // single product
    singleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),

    // post comment
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comments'], //tagTypes
    }),
    // comment web show korar jonno
    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ['comments'], //tagTypes
    }),
  }),
});

export const {
  useGetProductsQuery,
  useSingleProductQuery,
  usePostCommentMutation,
  useGetCommentQuery,
} = productApi;
