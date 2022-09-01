import type { AppProps } from "next/app";
import StateManagerProvider from "../stateManager/StateManagerProvider";
import GlobalCSS from "../globalStyle/global";
import { Provider } from "react-redux";
import { store } from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <StateManagerProvider>
        <GlobalCSS />
        <Component {...pageProps} />
      </StateManagerProvider>
    </Provider>
  );
}

export default MyApp;
