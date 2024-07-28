import React from "react";
import Editor from "@/pages/ai/carousels/[id]";
import Write from "@/pages/ai/carousels/write";

import LoggedIn from "./logged-in";
import { GlobalLoader } from "@/components";
export const getLoggedInContainer = (Component) => {
  return  (
    <React.Fragment>
      <LoggedIn isView={Component === Write || Component === Editor}>
        <Component></Component>
      </LoggedIn>
    </React.Fragment>
  );
};

export const getComponentForAuthPages = (Component) => {
  return  (
    <div className="h-full font-sans antialiased text-gray-900 bg-white">
      <Component />
      <GlobalLoader></GlobalLoader>
    </div>
  );
};

export const getComponentForPublicPages = (Component) => {
  return  (
    <div className="h-screen flex flex-col">
      <div className="relative flex flex-grow h-[calc(100%-60px)] pb-[60px] lg:pb-0">
        <main
          className={

              "flex-1 min-w-0 overflow-y-auto bg-white lg:border-l lg:border-gray-200"
          }
        >
          <Component />
        </main>
      </div>
    </div>
  );
};
