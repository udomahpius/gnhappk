import React, { useEffect } from "react";
import { logout } from "@/services/auth";
//import * as Mixpanel from "../../services/mixpanel";
import { useRouter, useSearchParams } from "next/navigation";

function Logout(){
  const router = useRouter();
  useEffect (() => {
    async function signOutUser(){
      logout().then(() => {
        router.push("/");
      });
    };
    signOutUser();
  },[router]);

  return (
    <>
    </>
  );
}

export default Logout;
