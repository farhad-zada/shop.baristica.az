import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  FavoritesPage,
  BlogsPage,
  BlogPage,
  ComparePage,
  QuizPage,
  LoginPage,
  CatalogPage,
  ProfilePage,
  ProfileInnerPage,
  CartPage,
  ProductDetailPage
} from "./pages/pages";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/products/:id"  element={<ProductDetailPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/compare" element={<ComparePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profileInner" element={<ProfileInnerPage />} />
    </Routes>
  );
}
