import "@/styles/globals.css";
import Script from "next/script"
import "react-quill/dist/quill.snow.css";
import { AuthProvider } from "@/hooks/auth";
import AppLayout from "@/layout/AppLayout";
import AuthStateChanged from "@/layout/AuthStateChanged";

export default function App({ Component, pageProps }) {
  //return <Component {...pageProps} />

  return (
    <>
      <AuthProvider>
        <AppLayout>
          <AuthStateChanged>
            <Component {...pageProps} />
          </AuthStateChanged>
        </AppLayout>
      </AuthProvider>
      <Script id="show-banner">
        {`window.$crisp=[];window.CRISP_WEBSITE_ID="4e4637e1-4825-4cc4-bb35-cbff40330f7a";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}
      </Script>
    </>
  )
}
