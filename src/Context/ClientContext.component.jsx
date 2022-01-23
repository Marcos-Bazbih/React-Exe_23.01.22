import React from 'react';

export const ClientContext = React.createContext();

export function ClientProvider(props) {
  return (
    <ClientContext.Provider value="kids">
        {props.childComponent}
    </ClientContext.Provider>
  );
}