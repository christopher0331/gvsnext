import { useState, useEffect } from 'react';
import Link from 'next/link';
import '../app/globals.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Event handler for scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Adding and removing the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <div className={`bg-blue-800 text-white text-sm p-2 flex justify-between items-center ${isScrolled ? 'hidden' : ''}`}>
        <span>Contact us for a quality fence - Phone: 303-358-8168</span>
        <span>Email: admin@gvsco.net</span>
      </div>
      <nav className={`bg-green-600 text-white p-4 sticky top-0 z-50 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <Link href="/"><a className="hover:bg-green-700 p-2 rounded">Home</a></Link>

            {/* Dropdown Menu */}
            <div className="relative inline-block">
               <div className="relative inline-block text-center">
                  <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="inline-flex items-center hover:bg-green-700 p-2 rounded">
                     Services <span className="caret">&#9660;</span>
                  </button>
	        </div>
              {isDropdownOpen && (
                <ul className="absolute left-0 w-56 mt-2 bg-green-700 border border-green-800 shadow-md">
                  <li><Link href="/wood-fences"><a className="block px-4 py-2 hover:bg-green-800">Wood Fences</a></Link></li>
                  <li><Link href="/chain-link-fences"><a className="block px-4 py-2 hover:bg-green-800">Chain Link Fences</a></Link></li>
                  <li><Link href="/wrought-iron-fences"><a className="block px-4 py-2 hover:bg-green-800">Wrought Iron Fences</a></Link></li>
                  {/* ... More items */}
                </ul>
              )}
            </div>

            <Link href="/about"><a className="hover:bg-green-700 p-2 rounded">About Us</a></Link>
            <Link href="/contact"><a className="hover:bg-green-700 p-2 rounded">Contact Us</a></Link>
          </div>

          {/* Social Media Icons (placeholder, replace with actual icons) */}
          <div className="flex space-x-4">
            <a href="#" className="hover:bg-green-700 p-2 rounded">FB</a>
            <a href="#" className="hover:bg-green-700 p-2 rounded">IN</a>
            <a href="#" className="hover:bg-green-700 p-2 rounded">IG</a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden p-4 flex justify-end">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="text-white hover:text-gray-200 focus:outline-none"
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-green-700 p-4`}>
        <ul className="space-y-2">
          <li><Link href="/"><a className="block text-white hover:bg-green-800 p-2 rounded">Home</a></Link></li>
          <li><Link href="/about"><a className="block text-white hover:bg-green-800 p-2 rounded">About</a></Link></li>
          <li><Link href="/contact"><a className="block text-white hover:bg-green-800 p-2 rounded">Contact</a></Link></li>
          {/* Additional links as necessary */}
        </ul>
      </div>
    </header>
  );
}

