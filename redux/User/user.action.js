import { LOGIN_USER, LOGOUT_USER } from "./user.types";
import { toast } from "react-toastify";

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});
export const logoutUser = () => {
  toast.success("Logout Scuccessfully");
  const storage = localStorage.clear();
  const refresh = window.location.reload();
  return {
    type: LOGOUT_USER,
    storage,
    refresh,
  };
};
