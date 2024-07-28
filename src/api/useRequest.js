import { useCallback } from 'react';
import makeRequest from './axios';
import { retrieveToken } from '@/services/auth';

export const useRequest = () => {
  // memoized the function, as otherwise if the hook is used inside
  // a useEffect, it will lead to an infinite loop
  const memoizedFn = useCallback(
    async (request) => {
      try {
        let tokenResponse = await retrieveToken();
        let token = tokenResponse.access_token;
        const accessToken = token;
        const refreshToken = tokenResponse.refresh_token
        return makeRequest({
          ...request,
          headers: {
            ...request.headers,
            // Add the Authorization header to the existing headers
            Authorization: `Bearer ${accessToken}`,
            //ProviderToken: tokenResponse.provider_token,
            RefreshToken: refreshToken
          },
        });
      }
      catch (err) {
        console.log(err);
        return makeRequest({
          ...request,
          headers: {
            ...request.headers,
            // Add the Authorization header to the existing headers
            Authorization: `Bearer ${"annymous"}`
          },
        });
      }
    },
    []
  );
  return {
    requestMaker: memoizedFn,
  };
};

export default useRequest;
