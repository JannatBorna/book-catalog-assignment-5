import { api } from '../../api/apiSlice';
// const parseToken = JSON.parse(token);

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

    // home product
    getHomeProducts: builder.query({
      query: () => '/homeProduct',
    }),

    addNewBook: builder.mutation({
      query: (data) => ({
        url: '/product',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['books', 'myBooks'],
    }),

    editBook: builder.mutation({
      query: ({ id, book }) => ({
        url: `/product/${id}`,
        method: 'PATCH',
        body: book,
      }),
      invalidatesTags: ['books', 'myBooks', 'singleBook'],
    }),
    deleteBook: builder.mutation({
      query: ({ bookId }) => ({
        url: `/product/${bookId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['books', 'myBooks'],
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

// export const {

// } = productApi;

export const {
  useGetProductsQuery,
  useSingleProductQuery,
  usePostCommentMutation,
  useGetCommentQuery,
  useAddNewBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
} = productApi;
