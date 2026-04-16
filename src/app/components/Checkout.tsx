import { useState } from "react";
import { useNavigate } from "react-router";
import { MapPin, CreditCard, Truck, CheckCircle2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [deliveryInfo, setDeliveryInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    notes: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    paymentMethod: "card",
  });

  const handleDeliveryChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDeliveryInfo({
      ...deliveryInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const tax = cartTotal * 0.08;
  const delivery = 5.0;
  const total = cartTotal + tax + delivery;

  if (cart.length === 0 && !orderPlaced) {
    navigate("/cart");
    return null;
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-white py-20">
        <div className="text-center animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <CheckCircle2 className="w-16 h-16 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground font-heading">
            Order Placed Successfully!
          </h2>
          <p className="text-xl text-foreground/70 max-w-md mx-auto">
            Thank you for your order! We'll deliver your delicious treats soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-secondary to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl md:text-6xl mb-4 text-foreground font-heading">
            Checkout
          </h1>
          <p className="text-xl text-foreground/70">
            Complete your order and enjoy your treats
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-3xl shadow-xl p-8 animate-in fade-in slide-in-from-left-8 duration-1000">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-md">
                    <Truck className="w-6 h-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    Delivery Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block mb-2 text-foreground font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={deliveryInfo.fullName}
                      onChange={handleDeliveryChange}
                      required
                      className="w-full px-4 py-3 bg-muted border-2 border-transparent rounded-xl focus:outline-none focus:border-primary transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-foreground font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={deliveryInfo.email}
                      onChange={handleDeliveryChange}
                      required
                      className="w-full px-4 py-3 bg-muted border-2 border-transparent rounded-xl focus:outline-none focus:border-primary transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-foreground font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={deliveryInfo.phone}
                      onChange={handleDeliveryChange}
                      required
                      className="w-full px-4 py-3 bg-muted border-2 border-transparent rounded-xl focus:outline-none focus:border-primary transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block mb-2 text-foreground font-medium">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={deliveryInfo.address}
                      onChange={handleDeliveryChange}
                      required
                      className="w-full px-4 py-3 bg-muted border-2 border-transparent rounded-xl focus:outline-none focus:border-primary transition-all duration-200"
                      placeholder="123 Main Street"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-foreground font-medium">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={deliveryInfo.city}
                      onChange={handleDeliveryChange}
                      required
                      className="w-full px-4 py-3 bg-muted border-2 border-transparent rounded-xl focus:outline-none focus:border-primary transition-all duration-200"
                      placeholder="Sweet Town"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-foreground font-medium">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={deliveryInfo.zipCode}
                      onChange={handleDeliveryChange}
                      required
                      className="w-full px-4 py-3 bg-muted border-2 border-transparent rounded-xl focus:outline-none focus:border-primary transition-all duration-200"
                      placeholder="12345"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block mb-2 text-foreground font-medium">
                      Delivery Notes (Optional)
                    </label>
                    <textarea
                      name="notes"
                      value={deliveryInfo.notes}
                      onChange={handleDeliveryChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-muted border-2 border-transparent rounded-xl focus:outline-none focus:border-primary transition-all duration-200 resize-none"
                      placeholder="Any special instructions for delivery..."
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8 animate-in fade-in slide-in-from-left-8 duration-1000">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-md">
                    <CreditCard className="w-6 h-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    Payment Information
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="paymentMethod" className="block mb-2 text-foreground font-medium">
                      Payment Method *
                    </label>
                    <select
                      id="paymentMethod"
                      name="paymentMethod"
                      value={paymentInfo.paymentMethod}
                      onChange={handlePaymentChange}
                      className="w-full px-4 py-3 bg-muted border-2 border-transparent rounded-xl focus:outline-none focus:border-primary transition-all duration-200"
                    >
                      <option value="card">Credit/Debit Card</option>
                      <option value="cash">Cash on Delivery</option>
                    </select>
                  </div>

                  {paymentInfo.paymentMethod === "card" && (
                    <>
                      <div>
                        <label className="block mb-2 text-foreground font-medium">
                          Cardholder Name *
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          value={paymentInfo.cardName}
                          onChange={handlePaymentChange}
                          required
                          className="w-full px-4 py-3 bg-muted border-2 border-transparent rounded-xl focus:outline-none focus:border-primary transition-all duration-200"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-foreground font-medium">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={paymentInfo.cardNumber}
                          onChange={handlePaymentChange}
                          required
                          maxLength={19}
                          className="w-full px-4 py-3 bg-muted border-2 border-transparent rounded-xl focus:outline-none focus:border-primary transition-all duration-200"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block mb-2 text-foreground font-medium">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={paymentInfo.expiryDate}
                            onChange={handlePaymentChange}
                            required
                            placeholder="MM/YY"
                            maxLength={5}
                            className="w-full px-4 py-3 bg-muted border-2 border-transparent rounded-xl focus:outline-none focus:border-primary transition-all duration-200"
                          />
                        </div>

                        <div>
                          <label className="block mb-2 text-foreground font-medium">
                            CVV *
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={paymentInfo.cvv}
                            onChange={handlePaymentChange}
                            required
                            maxLength={4}
                            className="w-full px-4 py-3 bg-muted border-2 border-transparent rounded-xl focus:outline-none focus:border-primary transition-all duration-200"
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-24 animate-in fade-in slide-in-from-right-8 duration-1000">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">
                          {item.name}
                        </h4>
                        <p className="text-sm text-foreground/70">
                          Qty: {item.quantity}
                        </p>
                        <p className="text-sm font-semibold text-foreground">
                          ₱{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-6 space-y-3">
                  <div className="flex justify-between text-foreground/70">
                    <span>Subtotal</span>
                    <span>₱{cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-foreground/70">
                    <span>Tax (8%)</span>
                    <span>₱{tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-foreground/70">
                    <span>Delivery</span>
                    <span>₱{delivery.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="text-xl font-bold text-foreground">
                      Total
                    </span>
                    <span className="text-xl font-bold text-foreground">
                      ₱{total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 px-8 py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 hover:scale-[1.02] transition-all duration-300 shadow-lg"
                >
                  Place Order
                </button>

                <p className="text-xs text-center text-foreground/60 mt-4">
                  By placing your order, you agree to our Terms & Conditions
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
