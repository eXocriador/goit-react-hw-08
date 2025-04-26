import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import PrivateRoute from "./routes/PrivateRoute";
import RestrictedRoute from "./routes/RestrictedRoute";
import Layout from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const RegisterPage = lazy(() =>
  import("./pages/RegisterPage/RegisterPage.jsx")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));
const ContactsPage = lazy(() =>
  import("./pages/ContactsPage/ContactsPage.jsx")
);

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return (
      <p style={{ textAlign: "center", marginTop: "30px" }}>
        Refreshing user...
      </p>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                element={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute element={<LoginPage />} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute element={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
