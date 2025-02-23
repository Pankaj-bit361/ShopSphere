import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { cartItems } = useCart();
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">ShopQuest</h1>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/products" className="text-gray-700 hover:text-indigo-600 px-3 py-2">
                Products
              </Link>
              <Link to="/categories" className="text-gray-700 hover:text-indigo-600 px-3 py-2">
                Categories
              </Link>
              <Link to="/deals" className="text-gray-700 hover:text-indigo-600 px-3 py-2">
                Deals
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full sm:w-64 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <FaSearch className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>

            <div className="ml-4 flex items-center space-x-4">
              <Link to="/cart" className="relative text-gray-700 hover:text-indigo-600">
                <FaShoppingCart className="h-6 w-6" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItems.length}
                  </span>
                )}
              </Link>

              {user ? (
                <Link to="/account" className="text-gray-700 hover:text-indigo-600">
                  <FaUser className="h-6 w-6" />
                </Link>
              ) : (
                <Link to="/login" className="text-gray-700 hover:text-indigo-600">
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}