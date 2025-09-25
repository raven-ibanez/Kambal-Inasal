import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-warm overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-inasal-orange rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-inasal-red rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-inasal-yellow rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slide-left">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold text-inasal-dark leading-tight">
                <span className="block">Bold Filipino</span>
                <span className="block text-grilled">Flavors</span>
                <span className="block text-4xl md:text-5xl text-inasal-brown mt-2">Kambal Inasal</span>
              </h1>
              <p className="text-xl text-warm max-w-lg leading-relaxed">
                Handcrafted marinades, perfectly grilled chicken, and authentic Filipino street-food favorites that bring families together.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#menu"
                className="btn-primary text-lg px-8 py-4 animate-pulse-glow"
              >
                🍗 Explore Menu
              </a>
              <a 
                href="#about"
                className="btn-secondary text-lg px-8 py-4"
              >
                Our Story
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-grilled">500+</div>
                <div className="text-sm text-warm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-grilled">50+</div>
                <div className="text-sm text-warm">Menu Items</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-grilled">5★</div>
                <div className="text-sm text-warm">Rating</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative animate-slide-right">
            <div className="relative">
              {/* Main Image Container */}
              <div className="card-grilled p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white/20 rounded-2xl p-6 text-center">
                  <div className="text-6xl mb-4">🍗</div>
                  <h3 className="text-2xl font-bold mb-2">Fresh Grilled</h3>
                  <p className="text-white/90">Every day, every order</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-inasal-yellow text-inasal-dark p-3 rounded-full animate-bounce-gentle">
                <span className="text-2xl">🔥</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-inasal-green text-white p-3 rounded-full animate-wiggle">
                <span className="text-2xl">🌶️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;