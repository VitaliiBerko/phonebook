import { lazy, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { selectIsRefreshing } from "./redux/auth/auth.selectors";
import { refreshUser } from "./redux/auth/auth.operations";
import Loader from "./components/Loader/Loader";
import { PublicRoute } from "./components/AuthRouts/PublicRoute";
import { PrivateRoute } from "./components/AuthRouts/PrivatRout";
const HomePage = lazy(() => import("./pages/HpmePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const JoinPage = lazy(() => import("./pages/JoinPage/JoinPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

function App() {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          
          <Route path="" element={<PublicRoute />}>
            <Route path="/register" element={<JoinPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route path="" element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
