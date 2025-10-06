import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { Basic } from "../pages/Basic";
import Layout from "../components/Layout";
import Users from "../pages/Users";
import Pokemon from "../components/Pokemon";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/basic" element={<Basic />}></Route>
          <Route path="/consumiendo_api" element={<Pokemon />}></Route>

          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
