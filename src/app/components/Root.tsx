import { Outlet } from "react-router";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { CartProvider } from "../context/CartContext";

export default function Root() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
