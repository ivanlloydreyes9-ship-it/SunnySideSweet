import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export default function Products() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("All");
  const [addedToCart, setAddedToCart] = useState<number | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "Golden Croissant",
      description: "Buttery, flaky layers of perfection",
      price: 99.00,
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
      category: "Pastries",
    },
    {
      id: 2,
      name: "Strawberry Delight",
      description: "Fresh strawberries with cream filling",
      price: 149.00,
      image: "https://images.unsplash.com/photo-1488477304112-4944851de03d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
      category: "Pastries",
    },
    {
      id: 3,
      name: "Chocolate Dream",
      description: "Rich, decadent chocolate pastry",
      price: 120.00,
      image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      category: "Pastries",
    },
    {
      id: 4,
      name: "Almond Croissant",
      description: "Almond cream filled perfection",
      price: 149.00,
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
      category: "Pastries",
    },
    {
      id: 5,
      name: "Vanilla Dream Cake",
      description: "Light vanilla sponge with buttercream",
      price: 420.0,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80",
      category: "Cakes",
    },
    {
      id: 6,
      name: "Chocolate Cake",
      description: "Rich chocolate layers with ganache",
      price: 450.0,
      image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
      category: "Cakes",
    },
    {
      id: 7,
      name: "Festive Celebration",
      description: "Multi-tiered celebration cake",
      price: 550.0,
      image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80",
      category: "Cakes",
    },
    {
      id: 8,
      name: "Strawberry Cake",
      description: "Fresh strawberry cake with cream",
      price: 480.0,
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
      category: "Cakes",
    },
    {
      id: 9,
      name: "Artisan Sourdough",
      description: "Traditional sourdough with crispy crust",
      price: 99.00,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
      category: "Breads",
    },
    {
      id: 10,
      name: "French Baguette",
      description: "Classic crispy exterior, soft inside",
      price: 120.00,
      image: "https://images.unsplash.com/photo-1549931319-a545dcf61133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
      category: "Breads",
    },
    {
      id: 11,
      name: "Multigrain Loaf",
      description: "Packed with wholesome seeds and grains",
      price: 110.00,
      image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80",
      category: "Breads",
    },
    {
      id: 12,
      name: "Fresh Brown Bread",
      description: "Hearty and nutritious whole grain",
      price: 100.0,
      image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80",
      category: "Breads",
    },
  ];

  const categories = ["All", "Pastries", "Cakes", "Breads"];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-secondary via-white to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl md:text-6xl mb-6 text-foreground font-heading">
            Our Products
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Freshly baked with love every morning. Choose from our delicious
            selection of pastries, cakes, and breads.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-foreground shadow-lg scale-105"
                  : "bg-white text-foreground/70 hover:bg-primary/20 hover:scale-105 shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group animate-in fade-in slide-in-from-bottom-4 animation-delay-${index * 100}`}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-foreground font-heading">
                  {product.name}
                </h3>
                <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground font-heading">
                    ₱{product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 shadow-md ${
                      addedToCart === product.id
                        ? "bg-green-500 text-white"
                        : "bg-primary text-foreground hover:bg-primary/90 hover:scale-105"
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {addedToCart === product.id ? "Added!" : "Add"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
