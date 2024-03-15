import React from 'react';
import logo from '../../assets/logo.png'; // Import the image

function Header() {
 return (
    <header className="bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Use the imported image directly */}
            <img src={logo} alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-bold ml-2">Your Shop</span>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <input type="text" placeholder="Search" className="border-2 border-gray-300 rounded-md px-3 py-2 mr-4" />
            </div>
            <div className="flex items-center">
              <a href="/Home" className="text-sm text-gray-700 hover:text-gray-900 mr-4">Home</a>
              <a href="/about" className="text-sm text-gray-700 hover:text-gray-900 mr-4">About</a>
              <a href="/login" className="text-sm text-gray-700 hover:text-gray-900 mr-4">Login</a>
              <a href="/logout" className="text-sm text-gray-700 hover:text-gray-900">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </header>
 );
}

export default Header;
