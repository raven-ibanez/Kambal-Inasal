import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useSiteSettings } from '../hooks/useSiteSettings';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick, onMenuClick }) => {
  const { siteSettings, loading } = useSiteSettings();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b-2 border-inasal-orange shadow-inasal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={onMenuClick}
            className="flex items-center space-x-3 text-inasal-dark hover:text-inasal-orange transition-all duration-300 group"
          >
            {loading ? (
              <div className="w-12 h-12 bg-inasal-lightGray rounded-2xl animate-pulse" />
            ) : (
              <div className="relative">
                <img 
                  src={siteSettings?.site_logo || "/logo.jpg"} 
                  alt={siteSettings?.site_name || "Kambal Inasal"}
                  className="w-12 h-12 rounded-2xl object-cover ring-4 ring-inasal-orange group-hover:ring-inasal-red transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "/logo.jpg";
                  }}
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-inasal-yellow rounded-full animate-pulse-glow"></div>
              </div>
            )}
            <div className="text-left">
              <h1 className="text-2xl font-bold text-inasal-dark group-hover:text-inasal-orange transition-colors duration-300">
                {loading ? (
                  <div className="w-32 h-6 bg-inasal-lightGray rounded animate-pulse" />
                ) : (
                  "Kambal Inasal"
                )}
              </h1>
              <p className="text-sm text-warm font-medium">Grilled to Perfection</p>
            </div>
          </button>

          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-3 text-inasal-dark hover:text-inasal-orange hover:bg-inasal-cream rounded-2xl transition-all duration-300 group"
            >
              <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-inasal text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-bounce-gentle shadow-inasal">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;