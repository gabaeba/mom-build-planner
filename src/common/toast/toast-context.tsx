import { createContext, useReducer, ReactNode} from "react";
import ToastsContainer from "./toast-container";
import { toastReducer } from "./toast-reducer";

export type InitialState = {
    toasts: Toast[] | []
}

export type Toast = {
    message: string,
    id: number,
    type: ModalTypes
}

export type ModalTypes = 'success' | 'warning' | 'info' | 'error'

export interface IToastContext {
    //addToast: (type: ModalTypes ,message: String) => void;
    remove: (id: number) => void;
    success: (message: string) => void;
    warning: (message: string) => void;
    info: (message: string) => void;
    error: (message: string) => void;
}

const initialState = {
    toasts: [],
  };

export const ToastContext = createContext<IToastContext | null>(null);

export const ToastContextProvider = ({ children }:{children: ReactNode}) => {
    const [state, dispatch] = useReducer(toastReducer, initialState);

    const addToast = (type: ModalTypes, message: String) => {
        const id = Math.floor(Math.random() * 10000000);
        dispatch({ type: "ADD_TOAST", payload: { id, message, type } });
    };

    const success = (message: string) => {
        addToast("success", message);
      };
    
      const warning = (message: string) => {
        addToast("warning", message);
      };
    
      const info = (message: string) => {
        addToast("info", message);
      };
    
      const error = (message: string) => {
        addToast("error", message);
      };

      const remove = (id: number) => {
        dispatch({ type: "DELETE_TOAST", payload: id });
      };

    return (
        <ToastContext.Provider value={{
          success,
          warning,
          info,
          error,
          remove
        }}>
            <ToastsContainer toasts={state.toasts} />
            {children}
        </ToastContext.Provider>
    );
};