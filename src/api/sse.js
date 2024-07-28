import { fetchEventSource } from '@microsoft/fetch-event-source';
import { retrieveToken } from '../services/auth';
import { getStoredWorkspace } from './workspace';

const baseURL = process.env.NEXT_PUBLIC_STREAMING_API_BASE_URL

class RetriableError extends Error { }
class FatalError extends Error { }


// async function startChat(question) {
//     //chatMessage.value = "";
//     //chatMessage.value = "Loading...";
//     try {
//         const response = await fetch(`http://localhost:3000/chatapi`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 message: question,
//             }),
//         });
//         console.log(response);
//     } catch (err) {
//         console.log(err);
//         //chatMessage.value = "I'm sorry, there was an error.";
//     }
// }

// async function send(params) {
//     let tokenResponse = await retrieveToken();
//     let token = tokenResponse.access_token;
//     const accessToken = token;
//     try {
//       const response = await fetch(baseURL + request.url, {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${accessToken}`,
//           // ProviderToken: tokenResponse.provider_token,
//           // ProviderRefreshToken: tokenResponse.provider_refresh_token,
//           WorkspaceID: getStoredWorkspace(),
//           Timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
//         },
//         body: params
//       });
        
//       //await streamToString(response.body);
//       return response.body;
//     } catch (err) {
//       console.log(err);
//     }
// }

async function 
send(request, onResponse, signal) {
  let tokenResponse = await retrieveToken();
  let token = tokenResponse.access_token;
  const accessToken = token;
  await fetchEventSource(baseURL + request.url, {
    method: request.method,
    openWhenHidden: true,
    signal: signal,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        // ProviderToken: tokenResponse.provider_token,
        // ProviderRefreshToken: tokenResponse.provider_refresh_token,
        WorkspaceID: getStoredWorkspace(),
        Timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    body: JSON.stringify(request.data),
    async onopen(response) {
        console.log(response);
        console.log(response.headers);
      if (response.ok && response.headers.get('content-type') === "text/event-stream") {
        return; // everything's good
      } else if (response.status >= 400 && response.status < 500 && response.status !== 429) {
        // client-side errors are usually non-retriable:
        if(response.status === 403) {
            window.location.href = "/blocked";
        }
        if(response.status === 402) {
            window.location.href = "/payments/trial-expired";
        }
        let errMessage = ""
        try {
            let body = await response.json();
            errMessage = body.message;
        } catch (error) {
            throw new FatalError();
        }
        throw new FatalError(errMessage);
      } else {
        throw new RetriableError();
      }
    },
    onmessage(msg) {
        // if the server emits an error message, throw an exception
        // so it gets handled by the onerror callback below:
        if (msg.event === 'FatalError') {
            throw new FatalError(msg.data);
        }
        onResponse(msg);
    },
    onclose() {
        // if the server closes the connection unexpectedly, retry:

    },
    onerror(err) {
        if (err instanceof FatalError) {
            throw err; // rethrow to stop the operation
        } else {
            // do nothing to automatically retry. You can also
            // return a specific retry interval here.
        }
  }
  });
}

export default send;
