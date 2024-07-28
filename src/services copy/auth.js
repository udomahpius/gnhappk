import { createClient } from '@supabase/supabase-js';
import { removeWorkspace, removeRole, getUserSession, removeUserSession, removeEmail } from "@/api/workspace";


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY
);


let token = null;
let timer = null;

export function getLinkedInScopes(){
  return 'openid email profile w_member_social';//r_liteprofile r_emailaddress
}

// function decodeBase64URL(value) {
//   const key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
//   let base64 = ''
//   let chr1, chr2, chr3
//   let enc1, enc2, enc3, enc4
//   let i = 0
//   value = value.replace('-', '+').replace('_', '/')

//   while (i < value.length) {
//     enc1 = key.indexOf(value.charAt(i++))
//     enc2 = key.indexOf(value.charAt(i++))
//     enc3 = key.indexOf(value.charAt(i++))
//     enc4 = key.indexOf(value.charAt(i++))
//     chr1 = (enc1 << 2) | (enc2 >> 4)
//     chr2 = ((enc2 & 15) << 4) | (enc3 >> 2)
//     chr3 = ((enc3 & 3) << 6) | enc4
//     base64 = base64 + String.fromCharCode(chr1)

//     if (enc3 != 64 && chr2 != 0) {
//       base64 = base64 + String.fromCharCode(chr2)
//     }
//     if (enc4 != 64 && chr3 != 0) {
//       base64 = base64 + String.fromCharCode(chr3)
//     }
//   }
//   return base64
// }

// Taken from: https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library
// function decodeJWTPayload(token) {
//   // Regex checks for base64url format
//   const base64UrlRegex = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i

//   const parts = token.split('.')

//   if (parts.length !== 3) {
//     throw new Error('JWT is not valid: not a JWT structure')
//   }

//   if (!base64UrlRegex.test(parts[1])) {
//     throw new Error('JWT is not valid: payload is not in base64url format')
//   }

//   const base64Url = parts[1]
//   return JSON.parse(decodeBase64URL(base64Url))
// }
// const payload = decodeJWTPayload(currentSession.access_token)
//       if (payload.exp) {
//         expiresAt = payload.exp
//         hasExpired = expiresAt <= timeNow
//       }

//       if (hasExpired) {
//         const { session: refreshedSession, error } = await this._callRefreshToken(
//           currentSession.refresh_token
//         )
//         if (error) {
//           return { data: { user: null, session: null }, error: error }
//         }

//         if (!refreshedSession) {
//           return { data: { user: null, session: null }, error: null }
//         }
//         session = refreshedSession
//       } else {
//         const { data, error } = await this._getUser(currentSession.access_token)
//         if (error) {
//           throw error
//         }
//         session = {
//           access_token: currentSession.access_token,
//           refresh_token: currentSession.refresh_token,
//           user: data.user,
//           token_type: 'bearer',
//           expires_in: expiresAt - timeNow,
//           expires_at: expiresAt,
//         }
//         await this._saveSession(session)
//         await this._notifyAllSubscribers('SIGNED_IN', session)
//       }



// export async function retrieveToken() {
//   if (token) return token;

//   return new Promise((resolve, reject) => {
//     supabase.auth.getSession().then((value) => {
//       if(value.data?.session) {
//         const expiresIn = value.data.session.expires_in;
//         const response = {
//           provider_token: value.data.session.provider_token,
//           provider_refresh_token: value.data.session.provider_refresh_token,
//           access_token: value.data.session.access_token,
//           refresh_token: value.data.session.refresh_token,
//         }
//         if (timer) clearTimeout(timer);
//         timer = setTimeout(() => {
//           token = null;
//           retrieveToken();
//         }, (expiresIn - 60)* 1000); // refresh 1 minutes before expiration
//         token = response;
//         resolve(response);
//       }
//       reject();
//     });
//   });
// }

export async function retrieveToken() {
  if (token) return token;

  const maybeSession = getUserSession();

  return new Promise((resolve, reject) => {
    // const timeNow = Date.now() / 1000;
    // let expiresAt = timeNow;
    // let hasExpired = true;
    // const payload = decodeJWTPayload(maybeSession?.access_token);
    // console.log(payload);
    // if (payload.exp) {
    //   expiresAt = payload.exp
    //   hasExpired = expiresAt <= timeNow
    // }

    // if (hasExpired) {
    //   removeUserSession();
    // }

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

//https://dsjcqehyidzmsrpzxwtu.supabase.co/auth/v1/callback

export async function logout(){
  removeWorkspace();
  removeRole();
  removeUserSession();
  removeEmail();
  token = null;
}

export async function loginWithLinkedIn(redirectUrl){
  if(redirectUrl.indexOf('login') !== -1 || redirectUrl.indexOf('signup') !== -1){
    redirectUrl = '/';
  }
  await supabase.auth.signInWithOAuth({
    provider: 'linkedin_oidc',
    options: {
      scopes: getLinkedInScopes(),
      redirectTo: `${window.location.origin}/auth/linkedin/callback?redirectUrl=${  redirectUrl}`,
    },
  });
}

export async function signupWithEmailPassword(email, password) {
  return supabase.auth.getSession({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/email/callback`,
    },
  })
}

export async function loginWithEmailPassword(email, password) {
  return supabase.auth.signInWithPassword({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin  }/auth/email/callback`,
    },
  })
}

export async function updatePassword(password) {
  return supabase.auth.updateUser({
    password,
  })
}

export async function resetPasswordForEmail(email) {
  return supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin  }/auth/email/update-password`,
  })
}


export async function getUserData(){
  return new Promise((resolve, reject) => {
    supabase.auth.getUser().then((value) => {
      if(value.data?.user) {
        resolve(value.data.user);
      }
      reject();
    })
  })
}

