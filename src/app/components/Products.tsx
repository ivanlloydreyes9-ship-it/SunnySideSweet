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
      price: 4.5,
      image: "https://images.unsplash.com/photo-1737700087816-95c80570fba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxiYWtlcnklMjBwYXN0cmllcyUyMGNyb2lzc2FudHN8ZW58MXx8fHwxNzc2MTQ3MjEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Pastries",
    },
    {
      id: 2,
      name: "Strawberry Delight",
      description: "Fresh strawberries with cream filling",
      price: 6.0,
      image: "https://images.unsplash.com/photo-1737700087841-f2bc25eb0b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxiYWtlcnklMjBwYXN0cmllcyUyMGNyb2lzc2FudHN8ZW58MXx8fHwxNzc2MTQ3MjEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Pastries",
    },
    {
      id: 3,
      name: "Chocolate Dream",
      description: "Rich, decadent chocolate pastry",
      price: 5.5,
      image: "https://images.unsplash.com/photo-1737700088850-d0b53f9d39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxiYWtlcnklMjBwYXN0cmllcyUyMGNyb2lzc2FudHN8ZW58MXx8fHwxNzc2MTQ3MjEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Pastries",
    },
    {
      id: 4,
      name: "Almond Croissant",
      description: "Almond cream filled perfection",
      price: 5.25,
      image: "https://images.unsplash.com/photo-1737700087938-ebdf93f15b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxiYWtlcnklMjBwYXN0cmllcyUyMGNyb2lzc2FudHN8ZW58MXx8fHwxNzc2MTQ3MjEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Pastries",
    },
    {
      id: 5,
      name: "Vanilla Dream Cake",
      description: "Light vanilla sponge with buttercream",
      price: 42.0,
      image: "https://images.unsplash.com/photo-1624966436626-77482d9c7cc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0ZWQlMjBjYWtlc3xlbnwxfHx8fDE3NzYxNDcyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Cakes",
    },
    {
      id: 6,
      name: "Chocolate Cake",
      description: "Rich chocolate layers with ganache",
      price: 45.0,
      image: "https://images.unsplash.com/photo-1632946992443-a21009cb8cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkZWNvcmF0ZWQlMjBjYWtlc3xlbnwxfHx8fDE3NzYxNDcyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Cakes",
    },
    {
      id: 7,
      name: "Festive Celebration",
      description: "Multi-tiered celebration cake",
      price: 55.0,
      image: "https://images.unsplash.com/photo-1714386351168-2567bc57efad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxkZWNvcmF0ZWQlMjBjYWtlc3xlbnwxfHx8fDE3NzYxNDcyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Cakes",
    },
    {
      id: 8,
      name: "Strawberry Cake",
      description: "Fresh strawberry cake with cream",
      price: 48.0,
      image: "https://images.unsplash.com/photo-1737700087785-96e2225fb3a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8YmFrZXJ5JTIwcGFzdHJpZXMlMjBjcm9pc3NhbnRzfGVufDF8fHx8MTc3NjE0NzIxMnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Cakes",
    },
    {
      id: 9,
      name: "Artisan Sourdough",
      description: "Traditional sourdough with crispy crust",
      price: 8.0,
      image: "https://images.unsplash.com/photo-1565801776220-10bd41565980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWQlMjBsb2F2ZXN8ZW58MXx8fHwxNzc2MDg0NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Breads",
    },
    {
      id: 10,
      name: "French Baguette",
      description: "Classic crispy exterior, soft inside",
      price: 5.0,
      image: "https://images.unsplash.com/photo-1766872685733-dcf7393d485c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhcnRpc2FuJTIwYnJlYWQlMjBsb2F2ZXN8ZW58MXx8fHwxNzc2MDg0NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Breads",
    },
    {
      id: 11,
      name: "Multigrain Loaf",
      description: "Packed with wholesome seeds and grains",
      price: 7.5,
      image: "https://images.unsplash.com/photo-1774043213144-c74be4fd335b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhcnRpc2FuJTIwYnJlYWQlMjBsb2F2ZXN8ZW58MXx8fHwxNzc2MDg0NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Breads",
    },
    {
      id: 12,
      name: "Fresh Brown Bread",
      description: "Hearty and nutritious whole grain",
      price: 7.0,
      image: "https://images.unsplash.com/photo-1587912001191-0cd4f14fd89e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBwYXN0cmllcyUyMGNyb2lzc2FudHN8ZW58MXx8fHwxNzc2MTQ3MjEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
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
