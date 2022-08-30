import type { AppProps } from "next/app";
import StateManagerProvider from "../stateManager/StateManagerProvider";
import GlobalCSS from "../globalStyle/global";
import useStateManager from "../hooks/useStateManager";
import Modal from "../components/UI/Modal";

function MyApp({ Component, pageProps }: AppProps) {
  const { state, dispatch, actionValues } = useStateManager();
  const { MODAL_TOGGLE, MODAL_TRACKER, COLUMN_INPUT, BOARD_NAME_INPUT } =
    actionValues;

  return (
    <StateManagerProvider>
      {/* {state.toggleModal && (
        <Modal
          onClick={() => {
            dispatch({ type: MODAL_TOGGLE });
          }}
        />
      )} */}
      <GlobalCSS />
      <Component {...pageProps} />
    </StateManagerProvider>
  );
}

export default MyApp;
