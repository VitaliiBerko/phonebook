import { lazy } from "react";

import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
const HomePage = lazy(() => import("./pages/HpmePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const JoinPage = lazy(() => import("./pages/JoinPage/JoinPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/register" element={<JoinPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/contacts" element={<ContactsPage />} />

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
