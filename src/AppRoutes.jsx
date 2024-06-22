import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, FavoritesPage, BlogsPage, BlogPage, ComparePage, QuizPage, LoginPage } from "./pages/pages";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/compare" element={<ComparePage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
