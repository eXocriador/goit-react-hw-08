import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";

const RestrictedRoute = ({
  component: Component,
  redirectTo = "/contacts"
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return null;
  }

  return !isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default RestrictedRoute;
