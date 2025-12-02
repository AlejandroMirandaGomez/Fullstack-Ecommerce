import { Routes, Route } from "react-router-dom";

import Header from "./components/ui/Header/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full xl:px-40 lg:px-20 lg:gap-20 md:px-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
