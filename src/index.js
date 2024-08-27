import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UsersPage from "./pages/UsersPage";
import ContactPage from "./pages/ContactPage";
import RepositoriesListPage from "./pages/RepositoriesListPage";
import RepositoryShopAppPage from "./pages/RepositoryShopAppPage";
import RepositoryUseStateExercises from "./pages/RepositoryUseStateExercisesPage";
import RepositoryUseEffectExercises from "./pages/RepositoryUseEffectExercisesPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/repositories-list" element={<RepositoriesListPage />} />
      <Route path="/repository/shop_app" element={<RepositoryShopAppPage />} />
      <Route
        path="/repository/useEffect_exercises"
        element={<RepositoryUseEffectExercises />}
      />
      <Route
        path="/repository/useState_exercises"
        element={<RepositoryUseStateExercises />}
      />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  </BrowserRouter>
);
