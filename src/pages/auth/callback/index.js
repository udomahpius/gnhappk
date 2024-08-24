import React, { useCallback } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useRequest from "@/api/useRequest";
import { createGetUserRequest } from "@/api/requestFactory/user";

function AuthCallback() {
  const router = useRouter();
  const { requestMaker } = useRequest();


  const finishLogin = useCallback(() => {
    requestMaker(createGetUserRequest()).then(
      (response) => {
        if(response.data.status === "onboarding") return router.push("/onboarding")

        const urlParams = new URLSearchParams(window.location.search);
        let redirectUrl = urlParams.get("redirectUrl");

        if (redirectUrl === "null" || redirectUrl === "undefined") {
          redirectUrl = "/";
        }

        if (redirectUrl) {
          router.push(redirectUrl);
        } else {
          router.push("/home");
        }
      }
    );
      
    }, [router, requestMaker])


  useEffect(() => {
    // let url = window.location.href;
    // if (url.includes("error=")) {
    //   //Mixpanel.track("LinkedIn Login Failed", { url: url });
    //   NiceModal.show(LoginErrorModel, { url: url });
    //   return;
    // }

    finishLogin();
  }, [requestMaker, finishLogin]);

  return <></>;
}
export default AuthCallback;



