import React, { Suspense } from "react";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";

const Layout = () => {
  return (
    <div className="app">
      <nav style={{ padding: 12 }}>
        <Link to="/" style={{ marginRight: 10 }}>
          Home
        </Link>
        |
        <Link to="basic" style={{ marginRight: 10 }}>
          Basic
        </Link>
        |
        <Link to="consumiendo_api" style={{ marginRight: 10 }}>
          Consumiendo API
        </Link>
        <Link to="users" style={{ marginRight: 10 }}>
          Users
        </Link>
        <Link to="about" style={{ marginRight: 10 }}>
          About
        </Link>
      </nav>
      <main>
        <Suspense fallback={<div>Loading ..</div>}>
          <Routes>
            <Route></Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Suspense>
        <Outlet />
        {/* Nested routes render her */}
      </main>
    </div>
  );
};

export default Layout;
