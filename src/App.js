import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./backend/CartContext"; 
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
import IndoorPlants from "./pages/IndoorPlants";
import MedicinalPlants from "./pages/MedicinalPlants";
import FloweringPlants from "./pages/FloweringPlants";
import AboutUs from "./pages/AboutUs";
import CartIndicator from "./pages/CartIndicator";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import "./styles.css";

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/category/indoor" element={<IndoorPlants />} />
          <Route path="/category/medicinal" element={<MedicinalPlants />} />
          <Route path="/category/flowering" element={<FloweringPlants />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <CartIndicator />
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
/* random to commit */