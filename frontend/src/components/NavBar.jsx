import React from "react";
import { Leaf } from "lucide-react";

const NavBar = () => {
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Leaf className="w-8 h-8 text-leaf" />
          <span className="text-xl font-bold">PaddyGuard</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#how-it-works"
            className="text-gray-600 hover:text-leaf transition-colors"
          >
            How It Works
          </a>
          <a
            href="#benefits"
            className="text-gray-600 hover:text-leaf transition-colors"
          >
            Benefits
          </a>
          <a
            href="#try-now"
            className="text-gray-600 hover:text-leaf transition-colors"
          >
            Try Now
          </a>
        </nav>
        <div>
          <a
            href="#try-now"
            className="bg-leaf hover:bg-leaf-dark text-white px-4 py-2 rounded-md transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
