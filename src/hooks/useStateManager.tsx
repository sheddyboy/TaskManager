import { useContext } from "react";
import { actionValues } from "../defaultValues";
import { StateManagerCtx } from "../stateManager/StateManagerProvider";

const useStateManager = () => {
  const { state, dispatch } = useContext(StateManagerCtx);

  return { state, dispatch, actionValues };
};

export default useStateManager;
