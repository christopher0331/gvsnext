import { getStaticProps } from 'next';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import DesktopMenu from './DesktopMenu';
import SidebarMenu from './SidebarMenu';
import logo from '../../public/clearGVSLogo.webp';

export default function Navbar({ data }) {

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

      {/* Existing Nav Content */}
      <nav className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content" style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          width: '100%'
        }}>

          <div className="logo-container" style={{ flexShrink: 0, zIndex: '154', zIndex: "50" }}>
            <Image
              src={logo}
              alt="GVS Logo"
              width={250}
              height={250}
              style="intrinsic"
              priority // This prop indicates the image is to be preloade
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