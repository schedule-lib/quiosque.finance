import { ModalProvider } from "../context/ModalContext";
import { TransactionsProvider } from "../context/TransactionsContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <TransactionsProvider>
        <Component {...pageProps} />
      </TransactionsProvider>
    </ModalProvider>
  );
}

export default MyApp;
