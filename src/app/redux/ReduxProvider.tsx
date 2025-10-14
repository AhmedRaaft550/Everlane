"use client";
import { Provider } from "react-redux";
import { presistStore, reduxStore } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={presistStore}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
