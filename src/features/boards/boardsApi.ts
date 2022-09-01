import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AddBoardProps,
  AddTaskProps,
  BoardProps,
  BoardsProps,
  PostBoardBody,
  TaskProps,
} from "../../types";

export const boardsApi = createApi({
  reducerPath: "boardsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getBoards: builder.query<BoardsProps[], void>({ query: () => "/boards" }),
    addBoard: builder.mutation<string, AddBoardProps>({
      query: (board) => ({
        url: "/boards",
        method: "POST",
        body: board,
      }),
    }),
    deleteBoard: builder.mutation<{ Message: string }, string>({
      query: (id) => ({
        url: `/boards${id}`,
        method: "DELETE",
      }),
    }),
    addTask: builder.mutation<
      { Message: string },
      Partial<PostBoardBody> & Pick<TaskProps, "t_id">
    >({
      query: ({ t_id, ...patch }) => ({
        url: `/boards${t_id}`,
        method: "PUT",
        body: patch,
      }),
    }),
  }),
});

export const {
  useGetBoardsQuery,
  useAddBoardMutation,
  useAddTaskMutation,
  useDeleteBoardMutation,
} = boardsApi;
