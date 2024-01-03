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
          <div className="flex items-center space-x-15">
            <Link href="/" className="hover:bg-green-700 p-2 rounded">Home</Link>

            {/* Dropdown Menu */}
            <div className="relative inline-flex items-center">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="hover:bg-green-700 p-2 rounded space-x-15">
                Services <span className="caret">&#9660;</span>
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 top-full mt-1 bg-green-700 border border-green-800 shadow-md space-x-15">
                  <li><Link href="/vinyl-fences"><a className="block px-4 py-2 hover:bg-green-800 space-x-15">Vinyl Fence</a></Link></li>
                  <li><Link href="/wood-fences"><a className="block px-4 py-2 hover:bg-green-800 space-x-15">Wood Fence</a></Link></li>
                  <li><Link href="/chain-link-fences"><a className="block px-4 py-2 hover:bg-green-800 space-x-15">Chain Link Fence</a></Link></li>
                  <li><Link href="/cedar-fences"><a className="block px-4 py-2 hover:bg-green-s800 space-x-15">Cedar Fence</a></Link></li>
                  <li><Link href="/steel-fences"><a className="block px-4 py-2 hover:bg-green-800 space-x-15">Steel Fence</a></Link></li>
                  <li><Link href="/aluminium-fences"><a className="block px-4 py-2 hover:bg-green-800 space-x-15">Aluminium Fence</a></Link></li>
                  <li><Link href="/railing"><a className="block px-4 py-2 hover:bg-green-800 space-x-15">Railing</a></Link></li>
                  <li><Link href="/gates-entry"><a className="block px-4 py-2 hover:bg-green-800 space-x-15">Gates and Entry</a></Link></li>
                  <li><Link href="/pool-fences"><a className="block px-4 py-2 hover:bg-green-800">Pool Fence</a></Link></li>
                  <li><Link href="/dog-fences"><a className="block px-4 py-2 hover:bg-green-800">Dog Fence</a></Link></li>
                  <li><Link href="/trex-fences"><a className="block px-4 py-2 hover:bg-green-800">Trex Fence</a></Link></li>
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

