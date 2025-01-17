import { forwardRef, useImperativeHandle } from "react";
import toast, {
  type Toast,
  ToastBar,
  Toaster,
  type ToastPosition,
} from "react-hot-toast";

export type ToastComponentFunction = {
  showToast: () => void;
};

type Props = {
  message: string;
  title?: string;
  position?: ToastPosition;
  duration?: number;
};

const ToastComponent = forwardRef<ToastComponentFunction, Props>(
  ({ message, title, position = "top-right", duration = 5000 }, ref) => {
    const renderCustomToast = (toast: Toast) => (
      <ToastBar toast={toast}>
        {() => (
          <div className="p-2">
            {title && <p className="font-semibold md:text-lg">{title}</p>}
            <p className="text-sm md:text-base">{message}</p>
          </div>
        )}
      </ToastBar>
    );

    const showToast = () => {
      toast.custom((toast) =>
        renderCustomToast({ ...toast, message, duration }),
      );
    };

    useImperativeHandle(ref, () => ({
      showToast,
    }));

    return <Toaster position={position} />;
  },
);

export default ToastComponent;
