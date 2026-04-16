import { Link } from "react-router";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-white py-20">
        <div className="text-center animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <ShoppingBag className="w-12 h-12 text-foreground" />
          </div>
          <h2
            className="text-4xl md:text-5xl mb-4 text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Your Cart is Empty
          </h2>
          <p className="text-xl text-foreground/70 max-w-md mx-auto mb-8">
            Start adding some delicious treats to your cart!
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-foreground rounded-full font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-secondary to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1
            className="text-5xl md:text-6xl mb-4 text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Shopping Cart
          </h1>
          <p className="text-xl text-foreground/70">
            Review your items before checkout
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="divide-y divide-border">
            {cart.map((item) => (
              <div
                key={item.id}
                className="p-6 hover:bg-muted/30 transition-colors duration-200"
              >
                <div className="flex gap-6">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3
                        className="text-2xl mb-2 text-foreground"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-xl text-foreground/80 font-semibold">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-10 h-10 rounded-full bg-primary text-foreground flex items-center justify-center hover:bg-primary/80 transition-all duration-300 hover:scale-110 shadow-md"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                        <span className="text-xl font-semibold text-foreground min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-10 h-10 rounded-full bg-primary text-foreground flex items-center justify-center hover:bg-primary/80 transition-all duration-300 hover:scale-110 shadow-md"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-6">
                        <span className="text-2xl font-bold text-foreground">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-3 text-accent hover:bg-accent/10 rounded-full transition-all duration-300 hover:scale-110"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex justify-between items-center mb-6">
            <span className="text-2xl font-semibold text-foreground">
              Subtotal
            </span>
            <span className="text-2xl text-foreground/70">
              ${cartTotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-2xl font-semibold text-foreground">Tax (8%)</span>
            <span className="text-2xl text-foreground/70">
              ${(cartTotal * 0.08).toFixed(2)}
            </span>
          </div>
          <div className="border-t border-border pt-6 mb-6">
            <div className="flex justify-between items-center">
              <span
                className="text-3xl font-bold text-foreground"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Total
              </span>
              <span
                className="text-3xl font-bold text-foreground"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                ${(cartTotal * 1.08).toFixed(2)}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="flex-1 px-8 py-4 bg-white border-2 border-primary text-foreground rounded-full font-semibold hover:bg-primary/10 transition-all duration-300 text-center shadow-md"
            >
              Continue Shopping
            </Link>
            <Link
              to="/checkout"
              className="flex-1 px-8 py-4 bg-accent text-white rounded-full font-semibold hover:bg-accent/90 hover:scale-105 transition-all duration-300 text-center shadow-lg"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
