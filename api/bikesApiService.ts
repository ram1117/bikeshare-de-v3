import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const APIURL = "http://api.citybik.es/v2/";

export const bikesApi = createApi({
  reducerPath: "bikes",
  baseQuery: fetchBaseQuery({
    baseUrl: APIURL,
    prepareHeaders: (headers) => {
      headers.set("Content", "Content-Type:application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getBikeNetworks: builder.query({
      query: () => ({
        method: "GET",
        url: "networks",
      }),
    }),
  }),
});

export const { useGetBikeNetworksQuery } = bikesApi;
