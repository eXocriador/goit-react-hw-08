import axios from "axios";

export const clearAuthHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};
