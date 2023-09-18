import "@/styles/globals.css";
import "react-quill/dist/quill.snow.css";
import { AuthProvider } from "@/hooks/auth";
import AppLayout from "@/layout/AppLayout";
import AuthStateChanged from "@/layout/AuthStateChanged";

export default function App({ Component, pageProps }) {
  //return <Component {...pageProps} />

  return (
    <AuthProvider>
      <AppLayout>
        <AuthStateChanged>
          <Component {...pageProps} />
        </AuthStateChanged>
      </AppLayout>
    </AuthProvider>
  )
}
