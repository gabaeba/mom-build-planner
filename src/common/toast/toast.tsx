import { useEffect } from "react";
import { ModalTypes } from "./toast-context";
import { useToast } from "./use-toast";

const toastTypes = {
  success: {
    icon: 'success',
    toastClass: "success",
  },
  warning: {
    icon: 'warning',
    toastClass: "warning",
  },
  info: {
    icon: 'info',
    toastClass: "info",
  },
  error: {
    icon: 'error',
    toastClass: "error",
  },
};

export type ToastTypes = typeof toastTypes;

const Toast = ({ message, type, id }: {
  message: string,
  type: ModalTypes,
  id: number
}) => {
  const { icon, toastClass } = toastTypes[type];
  const toast = useToast();

  useEffect(() => {
    const timeout = setTimeout(function () {
      toast?.remove(id)
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [])
  return (
    <div className={`toast ${toastClass}`}>
      <img src={`./assets/icons/${icon}.svg`} />
      <p className="toast-message">{message}</p>
    </div>
  )
}

export default Toast;