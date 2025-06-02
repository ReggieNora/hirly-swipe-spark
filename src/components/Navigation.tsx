
import { useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-purple-200 hover:text-white transition-all duration-300 hover:scale-105 relative group font-light text-lg"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Link 
              to="/login"
              className="flex items-center space-x-2 text-purple-200 hover:text-white transition-all duration-300 hover:scale-105 relative group font-light text-lg bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10"
            >
              <LogIn size={18} />
              <span>Login</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 p-6 bg-black/20 backdrop-blur-md rounded-2xl border border-white/10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-purple-200 hover:text-white transition-colors font-light"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Link 
              to="/login"
              className="flex items-center space-x-2 w-full py-3 text-purple-200 hover:text-white transition-colors font-light"
              onClick={() => setIsOpen(false)}
            >
              <LogIn size={18} />
              <span>Login</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
