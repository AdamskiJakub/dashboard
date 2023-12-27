import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpisResponse,
  GetProductsResponse,
  GetPieChartResponse,
  GetTransactionsResponse,
} from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "PieChart"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products/",
      providesTags: ["Products"],
    }),
    getPie: build.query<Array<GetPieChartResponse>, void>({
      query: () => "pie/pies/",
      providesTags: ["PieChart"],
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => "transaction/transactions/",
      providesTags: ["PieChart"],
    }),
  }),
});

export const {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetPieQuery,
  useGetTransactionsQuery,
} = api;
// SETTING UP REDUX
// 1. we are importing createApi  and fetchBaseQuery from reduxjs
// 2. later we write a function where is baseQuery with fetchbasequery and base url beeing import meta
//witch we set before in env.local
// 3. reducerpath is a slice in redux and we don't care about the name it can be main or whatever
// 4. we write tagTypes those are tags used to keep informations and it's a name for each api data
// 5. endpoints from them we take the information if i want another one we just copy change the name and we are fine
// 6. last we need to export const { useGetKpisQuery } as api because it already exists so we grab the hook
// and if we want to use the hook we just go to whatever Row and use it as const { data } = useGetKpisQuery() we will get an error so we just use the < void, void >
