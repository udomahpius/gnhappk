import {ax as axios} from './useAxiosLoader';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL

// Todo: handle errors
const handleApiErrors = (err) => {
  if (!err.response) {
    // 'You are offline. Please reconnect to the internet';
    throw err;
  } else if (err.response.status === 401) {
   window.location.href = `/logout?redirectUrl=${window.location.pathname}`;
    throw err;
  }else if (err.response.status === 403) {
    window.location.href = "/blocked";
    throw err;
  }else if (err.response.status === 422) {
    // check for linkedin account not connected error
    const errors = err.response.data?.errors;
    if(errors && errors.length > 0){
      const error = errors[0];
      if(error === "No LinkedIn account found"){
        window.location.href = "/integrations/linkedin";
        throw err;
      }
    }
    throw err;
  }
  else {
    throw err;
  }
};


const makeRequest = async (request) => axios({
    baseURL,
    ...request,
  })
    .catch(handleApiErrors)
    .then((response) => response.data);

export default makeRequest;
