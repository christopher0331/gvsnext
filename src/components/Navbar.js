import { useState, useEffect } from 'react';
import Image from 'next/image';
import DesktopMenu from './DesktopMenu';
import SidebarMenu from './SidebarMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFencingDropdownOpen, setIsFencingDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0); // State for window width
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleFencingDropdown = () => {
    setIsFencingDropdownOpen(!isFencingDropdownOpen);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="navbar">
      <div className={`bg-green-800 text-white text-sm p-2 flex justify-end items-center ${isScrolled ? 'hidden' : ''}`}>
        <a href="tel:303-358-8168" style={{ marginRight: '15px', textDecoration: 'none', color: 'white' }} className="hover:contact-link">Phone: 303-358-8168</a>
        <a href="mailto:admin@gvsco.net" style={{ textDecoration: 'none', color: 'white' }} className="hover:contact-link">Email: admin@gvsco.net</a>
      </div>

      <nav className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content" style={{
          display: 'flex',
          alignItems: 'flex-end', // Align items to the bottom
          justifyContent: 'space-between',
          width: '100%'
        }}>

          <div className="logo-container" style={{ flexShrink: 0 }}>
            <Image
              src="https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/HomePage/FullSizedWebp/GVS-LOGO-GREEN.png"
              alt="GVS Logo"
              width={250} // Adjust width as needed
              height={250} // Adjust height as needed
              layout="intrinsic"
            />
          </div>

          {windowWidth > 868 && (
            <DesktopMenu
              isFencingDropdownOpen={isFencingDropdownOpen}
              toggleFencingDropdown={toggleFencingDropdown}
            />
          )}

          {/* Hamburger Menu Button */}
          {windowWidth <= 868 && (
            <div className={`hamburger ${isHamburgerOpen ? 'open' : ''} ${isSidebarOpen ? 'sidebar-open' : ''}`} onClick={toggleHamburger}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>

        {windowWidth <= 868 && (
          <SidebarMenu
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            isFencingDropdownOpen={isFencingDropdownOpen}
            toggleFencingDropdown={toggleFencingDropdown}
          />
        )}
      </nav>
    </header>
  );
}