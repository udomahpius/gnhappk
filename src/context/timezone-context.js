import React, {createContext} from "react";

export const TimezoneContext = createContext();

export const TimezoneProvider = ({children}) => {
  const [timezone, setTimezone] = React.useState("UTC");

  const contextValue = {
    timezone,
    setTimezone
  };

  return (
    <TimezoneContext.Provider value={contextValue}>
      {children}
    </TimezoneContext.Provider>
  );
}
