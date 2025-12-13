import { Routes, Route } from "react-router-dom";

import Header from "./components/ui/header/Header";
import Home from "./pages/home/Home";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import Shop from "./pages/shop/Shop";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </main>
      <footer className="h-52"></footer>
    </>
  );
}

export default App;
