import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Mail, Lock, Sun } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/products");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-muted to-background py-20 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Sun className="w-12 h-12 text-foreground" />
          </div>
          <h1
            className="text-4xl md:text-5xl mb-3 text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Welcome Back
          </h1>
          <p className="text-lg text-foreground/70">
            Login to your Sunny Side Sweet account
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl p-8 animate-in fade-in slide-in-from-bottom-8 duration-1000"
        >
          <div className="space-y-6">
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
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded accent-primary"
                />
                <span className="text-foreground/70">Remember me</span>
              </label>
              <a
                href="#"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-8 px-8 py-4 bg-primary text-foreground rounded-xl font-semibold hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-lg"
          >
            Login
          </button>

          <div className="mt-6 text-center">
            <p className="text-foreground/70">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-foreground font-semibold hover:text-primary transition-colors"
              >
                Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
