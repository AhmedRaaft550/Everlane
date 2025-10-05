import toast from "react-hot-toast";

const myToaster = {
  success: (msg: string, options?: object) => toast.success(msg, options),
  error: (msg: string, options?: object) => toast.error(msg, options),
  loading: (msg: string, options?: object) => toast.loading(msg, options),
  custom: (msg: string, options?: object) => toast(msg, options),
};

export default myToaster;
