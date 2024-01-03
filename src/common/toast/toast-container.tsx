import Toast from "./toast";
import { Toast as ToastType } from "./toast-context";

const ToastsContainer = ({ toasts }: { toasts: ToastType[] }) => {
  return (
    <div className="toasts-container">
      {toasts.map((toast) => (
        <Toast key={String(toast.id)} {...toast} />
      ))}
    </div>
  );
};

export default ToastsContainer;
