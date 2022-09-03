import { useAppSelector } from "../app/hooks";
import { defaultBoards } from "../defaultValues";
import { useGetBoardsQuery } from "../features/boards/boardsAPI";

const useGetCurrentBoard = () => {
  const { data, isSuccess } = useGetBoardsQuery();
  const { currentBoardIndex } = useAppSelector((state) => state.boards);
  const currentBoardId = isSuccess
    ? data[currentBoardIndex].id
    : defaultBoards.id;
  const currentBoardData = isSuccess
    ? data[currentBoardIndex].data
    : defaultBoards.data;
  const currentBoardName = isSuccess
    ? data[currentBoardIndex].data.name
    : defaultBoards.data.name;
  const currentBoardStatus = isSuccess
    ? data[currentBoardIndex].data.status
    : defaultBoards.data.status;
  const currentBoardTasks =
    isSuccess && data[currentBoardIndex].data.tasks
      ? data[currentBoardIndex].data.tasks
      : defaultBoards.data.tasks;
  const currentBoardSubtasks =
    isSuccess && data[currentBoardIndex].data.subtasks
      ? data[currentBoardIndex].data.subtasks
      : defaultBoards.data.subtasks;
  return {
    currentBoardId,
    currentBoardData,
    currentBoardName,
    currentBoardStatus,
    currentBoardTasks,
    currentBoardSubtasks,
  };
};

export default useGetCurrentBoard;
