import "@/styles/globals.css";
import { NotificationProvider } from "@/context/notification-context";
import NiceModal from "@ebay/nice-modal-react";


export default function App({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <NiceModal.Provider>
        <Component {...pageProps} />
      </NiceModal.Provider>
    </NotificationProvider>
  );
}
