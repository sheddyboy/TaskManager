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
  tagTypes: ["Boards"],
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getBoards: builder.query<BoardsProps[], void>({
      query: () => "/boards",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Boards" as const, id })),
              { type: "Boards", id: "LIST" },
            ]
          : [{ type: "Boards", id: "LIST" }],
    }),
    addBoard: builder.mutation<string, AddBoardProps>({
      query: (board) => ({
        url: "/boards",
        method: "POST",
        body: board,
      }),
      invalidatesTags: [{ type: "Boards", id: "LIST" }],
    }),
    deleteBoard: builder.mutation<{ Message: string }, string>({
      query: (id) => ({
        url: `/boards/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Boards", id }],
    }),
    addTask: builder.mutation<
      PostBoardBody,
      Pick<BoardsProps, "id"> & Partial<PostBoardBody>
    >({
      query: ({ id, ...patch }) => ({
        url: `/boards/${id}`,
        method: "PUT",
        body: patch,
      }),
      invalidatesTags: [{ type: "Boards", id: "LIST" }],
    }),
  }),
});

export const {
  useGetBoardsQuery,
  useAddBoardMutation,
  useAddTaskMutation,
  useDeleteBoardMutation,
} = boardsApi;
