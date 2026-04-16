import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Mail, Lock, User, Phone, Sun } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    navigate("/products");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-muted to-background py-20 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Sun className="w-12 h-12 text-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-3 text-foreground font-heading">
            Join Us
          </h1>
          <p className="text-lg text-foreground/70">
            Create your Sunny Side Sweet account
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-8 animate-in fade-in slide-in-from-bottom-8 duration-1000"
        >
          <div className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-foreground font-medium"
              >
                Full Name
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <User className="w-5 h-5 text-foreground/40" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-muted border-2 border-transparent rounded-xl focus:outline-none focus:border-primary transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-foreground font-medium"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Mail className="w-5 h-5 text-foreground/40" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-muted border-2 border-transparent rounded-xl focus:outline-none focus:border-primary transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-foreground font-medium"
              >
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Phone className="w-5 h-5 text-foreground/40" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-muted border-2 border-transparent rounded-xl focus:outline-none focus:border-primary transition-all duration-200"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-foreground font-medium"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Lock className="w-5 h-5 text-foreground/40" />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-muted border-2 border-transparent rounded-xl focus:outline-none focus:border-primary transition-all duration-200"
                  placeholder="Create a password"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-foreground font-medium"
              >
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Lock className="w-5 h-5 text-foreground/40" />
                </div>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-muted border-2 border-transparent rounded-xl focus:outline-none focus:border-primary transition-all duration-200"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                required
                className="w-4 h-4 mt-1 rounded accent-primary"
              />
              <label htmlFor="terms" className="text-sm text-foreground/70">
                I agree to the{" "}
                <a href="#" className="text-foreground hover:text-primary">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-foreground hover:text-primary">
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-8 px-8 py-4 bg-primary text-foreground rounded-xl font-semibold hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-lg"
          >
            Create Account
          </button>

          <div className="mt-6 text-center">
            <p className="text-foreground/70">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-foreground font-semibold hover:text-primary transition-colors"
              >
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
