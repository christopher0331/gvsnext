import { getStaticProps } from 'next';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import DesktopMenu from './DesktopMenu';
import SidebarMenu from './SidebarMenu';
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

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
    <ErrorBoundary>
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
                src='/clearGVSLogo.webp'
                alt="GVS Logo"
                height={250}
                width={250}
                priority 
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
    </ErrorBoundary>
  );
}