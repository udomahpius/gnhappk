import React from "react";
import { useAxiosLoader } from "@/api/useAxiosLoader";
import loader from "@/assets/spinner.svg";
import Image from "next/image";

const GlobalLoader = () => {
  const [loading] = useAxiosLoader();
  return (
    <>
    {
      loading &&
      <div className="fixed inset-0 z-50 grid w-screen h-screen p-4 bg-slate-600 place-items-center sm:p-6 lg:p-8 opacity-30">
        <Image width={30} height={30} className="w-auto h-16" src={loader} alt="" />
      </div>
      }
    </>
  )
};

export default GlobalLoader;
