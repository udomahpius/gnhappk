import { removeWorkspace, removeRole, getUserSession, removeUserSession, removeEmail } from "@/api/workspace";

let token = null;
let timer = null;


export async function retrieveToken() {
  if (token) return token;

  const maybeSession = getUserSession();

  return new Promise((resolve, reject) => {
    if(maybeSession) {
      const expiresIn = maybeSession?.expires_in;

      const response = {
        access_token: maybeSession?.access_token,
        refresh_token: maybeSession?.refresh_token,
        expires_in: maybeSession?.expires_in,
        expires_at: maybeSession?.expires_at,
      }

      

      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        token = null;
        retrieveToken();
      }, (expiresIn - 60)* 1000); 
      // refresh 1 minutes before expiration
      token = response;
      resolve(response);
    }
    reject();
  });
}


export async function logout(){
  removeUserSession();
  token = null;
}

