import { getStaticProps } from 'next';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import DesktopMenu from './DesktopMenu';
import SidebarMenu from './SidebarMenu';
import React from 'react';
import { IoIosMail } from 'react-icons/io';
import { MdPhoneForwarded } from "react-icons/md";
import styles from './Navbar.module.scss';


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
      <header className="navbar" style={{ zIndex: '500' }}>
        <div className={styles.contactInfo}>
          <a href="tel:3033588168" className={styles.emailPhoneHover}>
            <MdPhoneForwarded className="icon-hover" />
            <span>(303)358-8168</span>
          </a>
        </div>

        {/* Existing Nav Content */}
        <nav className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>

          <div className="nav-content" style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            width: '100%',
            zIndex: '654'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>

              <div className="logo-container" style={{ flexShrink: 0, zIndex: '254', width: '200px', marginLeft: '10%', marginBottom: '0%' }}>
                <Image
                  src= 'https://imagedelivery.net/OHVtjf602XdHccCnziCADA/e17c9569-a336-4893-bf7b-260b2789d400/gvsLogoClear'
                  alt="GVS Logo"
                  height={200}
                  width={200}
                  quality={100}
                  priority
                />
              </div>
              <div>
                Veteran Owned
              </div>
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