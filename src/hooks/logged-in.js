import React, { useEffect, useState } from "react";
import { GlobalLoader, MobileNav, SmatNav } from "@/components";
import Notification from "@/components/Notification";
import { NotificationContext } from "@/context/notification-context";
import { TimezoneContext } from "@/context/timezone-context";
import { getUserData } from "@/services/auth";
import useRequest from "@/api/useRequest";
//import { createGetUserSettingsRequest } from "@/api/requestFactory/user-settings";
import { createGetUserRequest } from "@/api/requestFactory/user";
//import * as Mixpanel from "@/services/mixpanel";

function LoggedIn(props) {
  const { requestMaker } = useRequest();
  const [user, setUser] = useState(null);
  const { notification, hideNotification } =
    React.useContext(NotificationContext);
  const [userAccountStatus, setUserAccountStatus] = React.useState(null);

  useEffect(() => {
    requestMaker(createGetUserRequest())
      .then((response) => {
        setUser(response.data);
        setUserAccountStatus(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [requestMaker]);

  return (
    <>
      {userAccountStatus && (
        <>
          <Notification
            message={notification.message}
            type={notification.type}
            show={notification.show}
            onClose={hideNotification}
          ></Notification>
          {/* dynamic-height is custom class in index.css */}
          <div className="dynamic-height h-[100dvh]">

            <main className= "scroll flex-1 min-w-0">
              <SmatNav user={user}  />
              {props.children}
            </main>
            
            {/* <div className="relative flex flex-grow h-[calc(100%-60px)] pb-[60px] lg:pb-0 z-0">

              
            </div> */}
          </div>
          <MobileNav />
          <GlobalLoader></GlobalLoader>
        </>
      )}
    </>
  );
}

export default LoggedIn;
