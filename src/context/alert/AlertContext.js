import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";
const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });
    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 5000);
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);
  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
