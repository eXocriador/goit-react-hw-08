import { NavLink } from "react-router-dom";

const AuthNav = () => (
  <div>
    <NavLink to="/register">Register</NavLink>
    <NavLink to="/login">Log In</NavLink>
  </div>
);

export default AuthNav;
