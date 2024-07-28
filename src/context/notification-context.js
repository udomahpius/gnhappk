import React, {createContext} from "react"
export const NotificationContext = createContext();

export const NotificationProvider = ({children}) => {
  const [notification, setNotification] = React.useState({
    message: {
      title: "",
      content: ""
    },
    type: "success",
    show: false
  });

  const showNotification = (message, type) => {
    setNotification({message, type, show: true});
    // hide after 3 seconds
    setTimeout(() => {
      hideNotification();
    }, 5000);
  };

  const hideNotification = () => {
    setNotification({...notification, show: false});
  };

  const contextValue = {
    notification,
    showNotification,
    hideNotification
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
}
