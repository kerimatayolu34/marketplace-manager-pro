import { Link } from "react-router-dom";
import { User } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/lovable-uploads/9198dc57-587a-471c-9cf7-05237ba11d53.png" alt="Logo" className="h-8 w-auto" />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Anasayfa
              </Link>
              <Link to="/products" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Ürünler
              </Link>
              <Link to="/orders" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Siparişler
              </Link>
              <Link to="/integrations" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Entegrasyonlar
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-full text-gray-500 hover:text-gray-900">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};