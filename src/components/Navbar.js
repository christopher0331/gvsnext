import { useState, useEffect } from 'react';
import  Image from 'next/image';
import Link from 'next/link';
import '../app/globals.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFencingDropdownOpen, setIsFencingDropdownOpen] = useState(false); // State for Fencing dropdown
  const [isOutdoorLivingDropdownOpen, setIsOutdoorLivingDropdownOpen] = useState(false); // State for Outdoor Living dropdown
  const [isRollOffDumpstersDropdownOpen, setIsRollOffDumpstersDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);  // State for the sidebar


  // Event handler for scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };


  // Dropdown initial state (hidden)
  const dropdownHiddenStyle = {
    maxHeight: 0,
    overflow: 'hidden',
    transition: 'max-height 700ms ease-in-out, visibility 0s linear 700ms, opacity 700ms linear',
    visibility: 'hidden',
    opacity: 0
  };


  const dropdownVisibleStyle = {
    maxHeight: '500px', // Adjust as needed
    overflow: 'visible',
    transition: 'max-height 700ms ease-in-out, visibility 0s linear 0s, opacity 700ms linear',
    visibility: 'visible',
    opacity: 1
  };
  

  // Adding and removing the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative">
      <div className={`bg-white text-black text-sm p-2 flex justify-between items-center ${isScrolled ? 'hidden' : ''}`}>
        <span>Contact us for a quality fence - Phone: 303-358-8168</span>
        <span>Email: admin@gvsco.net</span>
      </div>
      <nav className={`bg-white text-black p-4 sticky top-0 z-50 shadow-md ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            <Link href="/" className="hover:bg-green-700 p-2 rounded">Home</Link>

            {/* GVS Fencing */}
            <div className="relative inline-flex items-center">
              <button onClick={() => setIsFencingDropdownOpen(!isFencingDropdownOpen)} className="hover:bg-green-700 p-2 rounded text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                GVS Fencing <span className="caret">&#9660;</span>
              </button>
              {isFencingDropdownOpen && (
                <ul className="absolute left-0 top-full mt-1 bg-green-700 border border-green-800 shadow-md" style={{ width: '200px' }}>
                  <li><Link href="/vinyl-fences"><a className="block px-4 py-2 hover:bg-green-800">Vinyl Fence</a></Link></li>
                  <li><Link href="/wood-fences"><a className="block px-4 py-2 hover:bg-green-800">Wood Fence</a></Link></li>
                  <li><Link href="/chain-link-fences"><a className="block px-4 py-2 hover:bg-green-800">Chain Link Fence</a></Link></li>
                  <li><Link href="/cedar-fences"><a className="block px-4 py-2 hover:bg-green-800">Cedar Fence</a></Link></li>
                  <li><Link href="/steel-fences"><a className="block px-4 py-2 hover:bg-green-800">Steel Fence</a></Link></li>
                  <li><Link href="/aluminium-fences"><a className="block px-4 py-2 hover:bg-green-800">Aluminium Fence</a></Link></li>
                  <li><Link href="/railing"><a className="block px-4 py-2 hover:bg-green-800">Railing</a></Link></li>
                  <li><Link href="/gates-entry"><a className="block px-4 py-2 hover:bg-green-800">Gates and Entry</a></Link></li>
                  <li><Link href="/pool-fences"><a className="block px-4 py-2 hover:bg-green-800">Pool Fence</a></Link></li>
                  <li><Link href="/dog-fences"><a className="block px-4 py-2 hover:bg-green-800">Dog Fence</a></Link></li>
                  <li><Link href="/trex-fences"><a className="block px-4 py-2 hover:bg-green-800">Trex Fence</a></Link></li>
                </ul>
              )}
            </div>

            {/* GVS Outdoor Living */}

            <div className="relative inline-flex items-center">
              <button onClick={() => setIsOutdoorLivingDropdownOpen(!isOutdoorLivingDropdownOpen)} className="hover:bg-green-700 p-2 rounded text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl transition duration-700">
                GVS Outdoor Living <span className="caret">&#9660;</span>
              </button>
              {isOutdoorLivingDropdownOpen && (
                <ul className="absolute left-0 top-full mt-1 bg-green-700 border border-green-800 shadow-md" style={{ width: '200px' }}>
                  <li><Link href="/vinyl-fences"><a className="block px-4 py-2 hover:bg-green-800">Vinyl Fence</a></Link></li>
                  <li><Link href="/wood-fences"><a className="block px-4 py-2 hover:bg-green-800">Wood Fence</a></Link></li>
                  <li><Link href="/chain-link-fences"><a className="block px-4 py-2 hover:bg-green-800">Chain Link Fence</a></Link></li>
                  <li><Link href="/cedar-fences"><a className="block px-4 py-2 hover:bg-green-800">Cedar Fence</a></Link></li>
                </ul>
              )}
            </div>

            {/* GVS RollOff Dumpsters */}
            <div className="relative inline-flex items-center">
              <button onClick={() => setIsRollOffDumpstersDropdownOpen(!isRollOffDumpstersDropdownOpen)} className="hover:bg-green-700 p-2 rounded text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl transition duration-700">
                GVS Fencing <span className="caret">&#9660;</span>
              </button>
              {isRollOffDumpstersDropdownOpen && (
                <ul className="absolute left-0 top-full mt-1 bg-green-700 border border-green-800 shadow-md" style={{ width: '200px' }}>
                  <li><Link href="/vinyl-fences"><a className="block px-4 py-2 hover:bg-green-800">Vinyl Fence</a></Link></li>
                  <li><Link href="/wood-fences"><a className="block px-4 py-2 hover:bg-green-800">Wood Fence</a></Link></li>
                </ul>
              )}
            </div>

            <Link href="/about"><a className="hover:bg-green-700 p-2 rounded">About Us</a></Link>
            <Link href="/contact"><a className="hover:bg-green-700 p-2 rounded">Contact Us</a></Link>
          </div>
  
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              Menu 
            </button>
          </div>
  
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:bg-green-700 p-2 rounded">FB</a>
            <a href="#" className="hover:bg-green-700 p-2 rounded">IN</a>
            <a href="#" className="hover:bg-green-700 p-2 rounded">IG</a>
          </div>
        </div>
      </nav>
      
        {/* Mobile Sidebar */}
        <div className={`fixed top-0 right-0 h-full bg-white text-black p-4 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out z-[60] w-3/5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl transition duration-700`}>
          {/* Logo */}
          <div className="flex justify-center items-center mb-4">
              <Image 
                  src="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/HomePage/FullSizedWebp/GVS-LOGO-GREEN.png"
                  alt="GVS Logo"
                  width={300}
                  height={300} 
                  layout="intrinsic" 
                />
            </div>

            <ul className="space-y-2">
              <li><Link href="/"><a className="block px-4 py-2 hover:bg-green-800">Home</a></Link></li>
              <li><Link href="/about"><a className="block px-4 py-2 hover:bg-green-800">About Us</a></Link></li>
              <li><Link href="/contact"><a className="block px-4 py-2 hover:bg-green-800">Contact Us</a></Link></li>
              
              
              {/* Fencing Dropdown */}
              <li className="relative">
              <button onClick={() => setIsFencingDropdownOpen(!isFencingDropdownOpen)} className="hover:bg-green-700 p-2 rounded w-full text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  GVS Fencing <span className="caret">&#9660;</span>
                </button>
                  <ul style={isFencingDropdownOpen ? dropdownVisibleStyle : dropdownHiddenStyle}>
                    <li><Link href="/vinyl-fences"><a className="block px-4 py-2 hover:bg-green-800">Vinyl Fence</a></Link></li>
                    <li><Link href="/wood-fences"><a className="block px-4 py-2 hover:bg-green-800 w-200">Wood Fence</a></Link></li>
                    <li><Link href="/chain-link-fences"><a className="block px-4 py-2 hover:bg-green-800 w-200">Chain Link Fence</a></Link></li>
                    <li><Link href="/cedar-fences"><a className="block px-4 py-2 hover:bg-green-800 w-200">Cedar Fence</a></Link></li>
                    <li><Link href="/steel-fences"><a className="block px-4 py-2 hover:bg-green-800 w-200">Steel Fence</a></Link></li>
                    <li><Link href="/aluminium-fences"><a className="block px-4 py-2 hover:bg-green-800 w-200">Aluminium Fence</a></Link></li>
                    <li><Link href="/railing"><a className="block px-4 py-2 hover:bg-green-800 w-200">Railing</a></Link></li>
                    <li><Link href="/gates-entry"><a className="block px-4 py-2 hover:bg-green-800 w-200">Gates and Entry</a></Link></li>
                    <li><Link href="/pool-fences"><a className="block px-4 py-2 hover:bg-green-800 w-200">Pool Fence</a></Link></li>
                    <li><Link href="/dog-fences"><a className="block px-4 py-2 hover:bg-green-800 w-200">Dog Fence</a></Link></li>
                    <li><Link href="/trex-fences"><a className="block px-4 py-2 hover:bg-green-800 w-200">Trex Fence</a></Link></li>
                  </ul>

              </li>

              {/* Outdoor Living Dropdown */}
              <li className="relative">
                <button onClick={() => setIsOutdoorLivingDropdownOpen(!isOutdoorLivingDropdownOpen)} className="hover:bg-green-700 p-2 rounded w-full text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl transition-transform duration-700 ease-in-out">
                  GVS Outdoor Living <span className="caret">&#9660;</span>
                </button>
                <ul style={isOutdoorLivingDropdownOpen ? dropdownVisibleStyle : dropdownHiddenStyle}>
                    <li><Link href="/vinyl-fences"><a className="block px-4 py-2 hover:bg-green-800">Vinyl Fence</a></Link></li>
                    <li><Link href="/wood-fences"><a className="block px-4 py-2 hover:bg-green-800 w-200">Wood Fence</a></Link></li>
                    <li><Link href="/chain-link-fences"><a className="block px-4 py-2 hover:bg-green-800 w-200">Chain Link Fence</a></Link></li>
                    <li><Link href="/cedar-fences"><a className="block px-4 py-2 hover:bg-green-800 w-200">Cedar Fence</a></Link></li>
                  </ul>
              </li>

              {/* RollOff Dumpster Living Dropdown */}
              <li className="relative">
                <button onClick={() => setIsRollOffDumpstersDropdownOpen(!isRollOffDumpstersDropdownOpen)} className="hover:bg-green-700 p-2 rounded w-full text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl transition-transform duration-700 ease-in-out">
                  GVS RollOff Dumpster <span className="caret">&#9660;</span>
                </button>
                  <ul style={isRollOffDumpstersDropdownOpen ? dropdownVisibleStyle : dropdownHiddenStyle}>
                    <li><Link href="/vinyl-fences"><a className="block px-4 py-2 hover:bg-green-800">Vinyl Fence</a></Link></li>
                    <li><Link href="/wood-fences"><a className="block px-4 py-2 hover:bg-green-800 w-200">Wood Fence</a></Link></li>
                    <li><Link href="/chain-link-fences"><a className="block px-4 py-2 hover:bg-green-800 w-200">Chain Link Fence</a></Link></li>
                    <li><Link href="/cedar-fences"><a className="block px-4 py-2 hover:bg-green-800 w-200">Cedar Fence</a></Link></li>
                  </ul>
            </li>
            </ul>
        </div>

    </header>
  );
  
}

