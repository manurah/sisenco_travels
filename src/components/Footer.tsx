import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">Sisenco Travels</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted local travel partner. We handle all responsibilities for your perfect tour experience, 
              creating unforgettable memories with our carefully crafted travel packages.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61579262134875 " 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/YourPageName" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              </a>
              <a 
                href="https://twitter.com/YourPageName" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/packages" className="text-gray-300 hover:text-white transition-colors">Our Packages</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/4 md:text-right">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-end space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+94778403773" className="text-gray-300">
                  +94 778 403 773
                </a>
              </div>
              <div className="flex items-center justify-end space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:infosisencotravels.com" className="text-gray-300">
                  infosisencotravels.com
                </a>
              </div>
              <div className="flex items-start justify-end space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-gray-300">123 Main Street, Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4">
          <div className="flex items-center justify-between">
            {/* Left side: copyright */}
            <p className="text-gray-400">
              © {new Date().getFullYear()} Sisenco Travels. All rights reserved.
            </p>
            {/* Right side: logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/Logo.crop.png"
                alt="Sisenco Travels Logo"
                style={{ height: '80px', width: 'auto' }}
              />
            </Link>
          </div>
        </div> 
      </div>
    </footer>
  );
};

export default Footer;
