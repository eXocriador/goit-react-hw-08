import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar/AppBar";

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};
