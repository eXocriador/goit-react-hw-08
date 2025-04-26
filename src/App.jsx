import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import RestrictedRoute from "./routes/RestrictedRoute";
import PrivateRoute from "./routes/PrivateRoute";
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
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
