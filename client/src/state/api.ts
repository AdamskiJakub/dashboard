import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis"],
  endpoints: (build) => ({
    getKpis: build.query<void, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
  }),
});

export const { useGetKpisQuery } = api;
// SETTING UP REDUX
// 1. we are importing createApi  and fetchBaseQuery from reduxjs
// 2. later we write a function where is baseQuery with fetchbasequery and base url beeing import meta
//witch we set before in env.local
// 3. reducerpath is a slice in redux and we don't care about the name it can be main or whatever
// 4. we write tagTypes those are tags used to keep informations and it's a name for each api data
// 5. endpoints from them we take the information if i want another one we just copy change the name and we are fine
// 6. last we need to export const { useGetKpisQuery } as api because it already exists so we grab the hook
// and if we want to use the hook we just go to whatever Row and use it as const { data } = useGetKpisQuery() we will get an error so we just use the < void, void >
