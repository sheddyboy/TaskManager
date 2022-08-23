import type { AppProps } from "next/app";
import StateManagerProvider from "../stateManager/StateManagerProvider";
import GlobalCSS from "../globalStyle/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateManagerProvider>
      <GlobalCSS />
      <Component {...pageProps} />
    </StateManagerProvider>
  );
}

export default MyApp;
