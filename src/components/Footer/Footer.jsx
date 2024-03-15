import React from 'react';

function Footer() {
 return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">&copy; 2024 Your Shop. All rights reserved.</p>
          </div>
          <div>
            <a href="#" className="text-sm text-gray-300 hover:text-gray-100 mr-4">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-300 hover:text-gray-100">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
 );
}

export default Footer;
