import React, { useEffect } from "react";
import { logout } from "@/services/auth";
//import * as Mixpanel from "../../services/mixpanel";
import { useRouter, useSearchParams } from "next/navigation";

function Logout(){
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect (() => {
    async function signOutUser(){
      logout().then(() => {
        // fetch redirect url from query params
        const redirectUrl = searchParams.get('redirectUrl') || '/';
        router.push('/auth/login?redirectUrl=' + redirectUrl);
      });
    };
    signOutUser();
  },[router, searchParams]);

  return (
    <>
    </>
  );
}

export default Logout;
