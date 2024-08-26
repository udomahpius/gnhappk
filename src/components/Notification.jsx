import React from "react";
function Notification({show, type, message, onClose}) {
  return (
    <div className="fixed inset-0 z-50 flex items-end px-4 py-6 pointer-events-none sm:items-start sm:p-6">
      <div className="flex flex-col items-center w-full space-y-4 sm:items-end">
        {
          show && type === "success" &&
          <div
            className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg aria-hidden="true" className="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-semibold text-gray-900">
                    {message.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {message.content}
                  </p>
                  {
                    message.link &&
                  <div className="mt-3">
                    <a href={
                      message.link.url
                    } title=""
                      target={
                        message.link.type === "external" ? "_blank" : "_self"
                      }
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-blue-500 transition-all duration-150 hover:text-blue-400 hover:underline">
                      {message.link.text}
                      <svg aria-hidden="true" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  </div>
                  }
                </div>

                <div className="flex flex-shrink-0 ml-4">
                  <button type="button"
                    onClick={onClose}
                    className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="sr-only">
                      Close
                    </span>
                    <svg aria-hidden="true" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
        {
          show && type === "error" &&
          <div
            className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg aria-hidden="true" className="w-6 h-6 text-red-500" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-semibold text-gray-900">
                    {message.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {message.content}
                  </p>
                </div>

                <div className="flex flex-shrink-0 ml-4">
                  <button type="button"
                    onClick={onClose}
                    className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="sr-only">
                      Close
                    </span>
                    <svg aria-hidden="true" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        }

      </div>
    </div>
  );
}

export default Notification;
