import React from "react";
import axios from "axios";
const { useState, useCallback, useMemo, useEffect } = React;

export const ax = axios.create(); // export this and use it in all your components

export const useAxiosLoader = () => {
  const [counter, setCounter] = useState(0);

  const inc = useCallback(() => setCounter(counter => counter + 1), [
    setCounter
  ]); // add to counter
  const dec = useCallback(() => setCounter(counter => counter - 1), [
    setCounter
  ]); // remove from counter

  const interceptors = useMemo(
    () => ({
      request: config => {
        if(config?.disableLoading){
          return config;
        }
        inc();
        return config;
      },
      response: response => {
        if(response.config?.disableLoading){
          return response;
        }
        dec();
        return response;
      },
      error: error => {
        if(error.config?.disableLoading){
          return Promise.reject(error);
        }
        dec();
        return Promise.reject(error);
      }
    }),
    [inc, dec]
  ); // create the interceptors

  useEffect(() => {
    // add request interceptors
    ax.interceptors.request.use(interceptors.request, interceptors.error);
    // add response interceptors
    ax.interceptors.response.use(interceptors.response, interceptors.error);
    return () => {
      // remove all intercepts when done
      ax.interceptors.request.eject(interceptors.request);
      ax.interceptors.request.eject(interceptors.error);
      ax.interceptors.response.eject(interceptors.response);
      ax.interceptors.response.eject(interceptors.error);
    };
  }, [interceptors]);

  return [counter > 0];
};
