import { Link } from "react-router";
import { ArrowRight, Sparkles, Heart, Award } from "lucide-react";

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Golden Croissants",
      image: "https://img.freepik.com/premium-photo/golden-croissant-with-flaky-layers-bakery-fresh_1106454-19037.jpg",
      description: "Buttery, flaky perfection",
      price: 99.00,
    },
    {
      id: 2,
      name: "Strawberry Delight",
      image: "https://images.unsplash.com/photo-1737700087841-f2bc25eb0b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxiYWtlcnklMjBwYXN0cmllcyUyMGNyb2lzc2FudHN8ZW58MXx8fHwxNzc2MTQ3MjEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Fresh strawberries & cream",
      price: 149.00,
    },
    {
      id: 3,
      name: "Chocolate Dream",
      image: "https://amandascookin.com/wp-content/uploads/2023/11/Mint-Chocolate-Dream-Bars-V01-1100x1650.jpg",
      description: "Rich, decadent chocolate",
      price: 102.00,
    },
  ];

  return (
    <div>
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-muted to-background">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-md">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">Baked Fresh Daily</span>
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight text-foreground font-heading">
              Start Your Day on the
              <br />
              <span className="text-accent">Sunny Side</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-foreground/80 leading-relaxed">
              Delicious pastries and sweet treats that bring warmth and joy to
              every moment. Made with love, served with sunshine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-foreground rounded-full font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-foreground rounded-full font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4 text-foreground font-heading">
              Featured Pastries
            </h2>
            <p className="text-xl text-foreground/70">
              Our most loved treats, baked with care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`bg-card rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group animate-in fade-in slide-in-from-bottom-4 animation-delay-${index * 150}`}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-2 text-foreground font-heading">
                    {product.name}
                  </h3>
                  <p className="text-foreground/70 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">
                      ₱{product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-foreground rounded-full font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Sparkles className="w-8 h-8 text-foreground" strokeWidth={2} />
              </div>
              <h3 className="text-2xl mb-3 text-foreground font-heading">
                Fresh Daily
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Every pastry is baked fresh each morning using premium ingredients
                and traditional techniques.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Heart className="w-8 h-8 text-foreground" strokeWidth={2} />
              </div>
              <h3 className="text-2xl mb-3 text-foreground font-heading">
                Made with Love
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Each treat is crafted with passion and care, bringing warmth and
                happiness to your day.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Award className="w-8 h-8 text-foreground" strokeWidth={2} />
              </div>
              <h3 className="text-2xl mb-3 text-foreground font-heading">
                Quality Ingredients
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                We use only the finest ingredients to ensure every bite is
                absolutely delicious.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
