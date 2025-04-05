import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaPhone, FaEnvelope, FaBars, FaTimes, FaFacebookSquare, FaGoogle, FaChevronDown } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { useImageIndex } from '../contexts/ImageIndexContext';
import styles from './HeaderNew.module.scss';

export default function HeaderNew({ heroContent = {}, postTitle, location }) {
  const [isScrolled, setIsScrolled] = useState(false); // Whether we've scrolled past navbar
  const [scrollProgress, setScrollProgress] = useState(0); // Value from 0 to -100 for smooth transitions
  const [showSticky, setShowSticky] = useState(false); // Whether to show the sticky version
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFloatingCta, setShowFloatingCta] = useState(false); // For floating mobile CTA buttons
  const [placeholderHeight, setPlaceholderHeight] = useState(0);
  const lastScrollYRef = useRef(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navbarRef = useRef(null);
  const scrollThresholdRef = useRef(50); // Pixels to scroll before navbar is fully hidden/shown
  const router = useRouter();
  const { imageIndex, images } = useImageIndex();

  // Ensure heroContent has all required properties
  const safeHeroContent = {
    title: heroContent?.title || '',
    description: heroContent?.description || '',
    features: Array.isArray(heroContent?.features) ? heroContent.features : []
  };

  // Navigation items
  const navItems = [
    { label: 'Home', path: '/' },
    { 
      label: 'Fencing Services', 
      path: '/fencing',
      dropdown: [
        { label: 'Wood Fence', path: '/wood-fences' },
        { label: 'Vinyl Fence', path: '/vinyl-fences' },
        { label: 'Chain Link Fence', path: '/chainlink-fence' }
      ]
    },
    { label: 'Outdoor Living', path: '/outdoor-living-new' },
    { label: 'Backflow Testing', path: '/denver/backflow-testing' },
    { 
      label: 'Resources', 
      path: '/resources',
      dropdown: [
        { label: 'Portfolio', path: '/portfolio' },
        { label: 'Forms', path: '/forms' },
        { label: 'News', path: '/blog' }
      ]
    },
    { label: 'Contact Us', path: '/contact' }
  ];

  // Get initial navbar height on mount and set up resize observer
  useEffect(() => {
    if (navbarRef.current) {
      // Set initial placeholder height
      const navbarHeight = navbarRef.current.getBoundingClientRect().height;
      setPlaceholderHeight(0); // Start with 0 height, will be updated during scroll
      
      // Create a ResizeObserver to update placeholder height if navbar size changes
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          if (entry.target === navbarRef.current && showSticky) {
            // Only update if sticky is showing
            setPlaceholderHeight(100); // Fixed height for sticky navbar
          }
        }
      });
      
      // Start observing the navbar
      resizeObserver.observe(navbarRef.current);
      
      // Clean up observer on unmount
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [showSticky]);

  useEffect(() => {
    // Removed dynamic scroll behavior to keep navbar static
    const staticNavbarHeight = 130; // fixed navbar height
    setPlaceholderHeight(staticNavbarHeight);
    setIsScrolled(false);
    setShowFloatingCta(false);
    // No scroll event listener attached
    return () => {};
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = (e) => {
    // Prevent event bubbling
    if (e) e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
    
    // When opening mobile menu, ensure navbar is fully visible
    if (!mobileMenuOpen) {
      if (navbarRef.current) {
        navbarRef.current.style.setProperty('--scroll-progress', '0%');
        navbarRef.current.style.setProperty('--opacity-progress', '1');
      }
    }
  };
  
  // Handle dropdown toggles
  const toggleDropdown = (dropdown, isMobile = false) => {
    // For mobile, we always want to toggle
    if (isMobile) {
      if (activeDropdown === dropdown + '-mobile') {
        setActiveDropdown(null);
      } else {
        setActiveDropdown(dropdown + '-mobile');
      }
    } else {
      // For desktop, we only toggle if it's already active
      if (activeDropdown === dropdown) {
        setActiveDropdown(null);
      } else {
        setActiveDropdown(dropdown);
      }
    }
  };
  
  // Close dropdowns when clicking outside or mouse leaves the dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Don't close if clicking inside a dropdown or on a dropdown toggle
      if (e.target.closest(`.${styles.hasDropdown}`) || 
          e.target.closest(`.${styles.mobileDropdownHeader}`) ||
          e.target.closest(`.${styles.dropdown}`) ||
          e.target.closest(`.${styles.mobileDropdown}`)) {
        return;
      }
      setActiveDropdown(null);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className={styles.headerContainer}>
      {/* Top Contact Bar */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <div className={styles.statusBadge}>
              Veteran Owned
            </div>
          </div>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/greenviewsolutions" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare />
            </a>
            <a href="https://www.instagram.com/greenview_solutions_llc" target="_blank" rel="noopener noreferrer">
              <FiInstagram />
            </a>
            <a href="https://www.google.com/maps/place/Greenview+Solutions/@39.9890046,-105.1713587,11z/data=!4m6!3m5!1s0x876bf5d9d671bf3f:0xe263da5d1b64b4a4!8m2!3d40.125623!4d-104.9541494!16s%2Fg%2F11j76mvz9t?coh=164777&entry=tt&shorturl=1" target="_blank" rel="noopener noreferrer">
              <FaGoogle />
            </a>
          </div>
          <div className={styles.phoneInfo}>
            <a href="tel:3033588168" className={styles.contactLink}>
              <FaPhone /> (303) 358-8168
            </a>
            <a href="tel:3033588168" className={styles.callNowLink}>
              CALL NOW!
            </a>
          </div>
        </div>
      </div>



      
      <nav 
        ref={navbarRef}
        className={`${styles.navbar} ${showSticky ? styles.scrolled : ''} ${styles.scrollProgress}`}>
        
        <div className={styles.navbarInner}>
          <div className={styles.logoContainer}>
            {/* Logo - Disappears on scroll */}
            <div className={`${styles.logo} ${isScrolled ? styles.logoScrolled : ''}`}>
              <Link href="/">
                <Image
                  src="https://imagedelivery.net/OHVtjf602XdHccCnziCADA/02e7e67e-6b3a-4a32-fa09-93175d0e1200/public"
                  alt="GVS Fencing Logo"
                  width={140}
                  height={140}
                  priority
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                />
              </Link>
            </div>
            
            {/* Sticky Contact Area - Appears when scrolled */}
            <div className={`${styles.stickyContact} ${isScrolled ? styles.showStickyContact : ''}`}>
              {/* Top row: Phone only */}
              <div className={styles.phoneNumber}>
                <a href="tel:3033585338">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18" height="18" fill="currentColor"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                  (303) 358-5338
                </a>
              </div>
              
              {/* Bottom row: All Icons (Social + Email) */}
              <div className={styles.allIcons}>
                <a href="https://www.facebook.com/GreenViewSolutions/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="20" height="20" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                </a>
                <a href="https://www.instagram.com/greenviewsolutions/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="22" height="22" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </a>
                <a href="https://www.youtube.com/channel/UCFEQWcVVKX0VXbRqS3x1_Sw" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="22" height="22" fill="currentColor"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                </a>
                <a href="mailto:chris@greenviewsolutions.net" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="currentColor"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Main Navigation Section */}
          <div className={styles.desktopNav}>
            <ul className={styles.navLinks}>
              {navItems.map((item, index) => (
                <li 
                  key={index} 
                  className={`${styles.navItem} ${item.dropdown ? styles.hasDropdown : ''}`}
                  onClick={(e) => item.dropdown && e.stopPropagation()}
                  onMouseEnter={(e) => { if (item.dropdown) { e.stopPropagation(); setActiveDropdown(item.label); } }}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <>
                      <span 
                        className={`${styles.dropdownButton} ${activeDropdown === item.label ? styles.active : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDropdown(item.label);
                        }}
                      >
                        {item.label}
                        <FaChevronDown className={`${styles.dropdownIcon} ${activeDropdown === item.label ? styles.active : ''}`} />
                      </span>
                      {activeDropdown === item.label && (
                        <ul className={styles.dropdown}>
                          {item.dropdown.map((dropdownItem, idx) => (
                            <li key={idx}>
                              <Link 
                                href={dropdownItem.path}
                                className={router.pathname === dropdownItem.path ? styles.active : ''}
                                onClick={(e) => { if (mobileMenuOpen) toggleMobileMenu(e); }}
                              >
                                {dropdownItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link 
                      href={item.path} 
                      className={router.pathname === item.path ? styles.active : ''}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button Section */}
          <div className={styles.ctaSection}>
            <Link href="/contact" className={styles.bookNowButton}>
              Book Now
            </Link>
            <Link href="/contact" className={styles.getQuoteButton}>
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.open : ''}`} style={{ pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}>
          <ul className={styles.mobileNavLinks}>
            {navItems.map((item, index) => (
              <li key={index} className={styles.mobileNavItem}>
                {item.dropdown ? (
                  <>
                    <div 
                      className={`${styles.mobileDropdownHeader} ${activeDropdown === item.label + '-mobile' ? styles.active : ''}`}
                      onClick={() => toggleDropdown(item.label, true)}
                    >
                      {item.label}
                      <FaChevronDown className={`${styles.mobileDropdownIcon} ${activeDropdown === item.label + '-mobile' ? styles.open : ''}`} />
                    </div>
                    {activeDropdown === item.label + '-mobile' && (
                      <ul className={styles.mobileDropdown}>
                        {item.dropdown.map((dropdownItem, idx) => (
                          <li key={idx}>
                            <Link 
                              href={dropdownItem.path} 
                              onClick={toggleMobileMenu}
                              className={router.pathname === dropdownItem.path ? styles.active : ''}
                            >
                              {dropdownItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link 
                    href={item.path} 
                    onClick={toggleMobileMenu}
                    className={router.pathname === item.path ? styles.active : ''}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className={styles.mobileCtaButtons}>
            <Link href="/contact" className={styles.mobileBookNow} onClick={toggleMobileMenu}>
              Book Now
            </Link>
            <Link href="/contact" className={styles.mobileGetQuote} onClick={toggleMobileMenu}>
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className={styles.heroSection}>
        {/* Hero Image */}
        <div className={styles.heroImageWrapper}>
          <div style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden' }}>
            <img 
              src={images[imageIndex] || "https://imagedelivery.net/OHVtjf602XdHccCnziCADA/208d8f03-ee93-4377-7600-08b1183c3d00/public"}
              alt={`${location ? location + ' ' : ''}Fencing Services Hero Image`}
              className={styles.heroImage}
            />
          </div>
          <div className={styles.overlay}></div>
        </div>

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <div className={styles.contentWrapper}>
              <h1>{safeHeroContent.title || `Professional Fencing Solutions${location ? ' in ' + location : ' in Colorado'}`}</h1>
              <p>{safeHeroContent.description || "Transform your property with high-quality, custom fencing from GVS - Colorado's trusted fencing contractor since 2014."}</p>
              
              {safeHeroContent.features.length > 0 ? (
                <ul className={styles.features}>
                  {safeHeroContent.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              ) : (
                <ul className={styles.features}>
                  <li>Free In-Person Consultations</li>
                  <li>Competitive Pricing</li>
                  <li>Quality Materials & Craftsmanship</li>
                  <li>Licensed & Insured</li>
                  <li>5-Year Workmanship Warranty</li>
                </ul>
              )}
              
              <div className={styles.heroCta}>
                <Link href="/contact" className={styles.primaryButton}>
                  Get a Free Quote
                </Link>
                <Link href="/fencing" className={styles.secondaryButton}>
                  Explore Fencing Options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating CTA buttons for mobile */}
      <div className={`${styles.floatingCtaBar} ${showFloatingCta ? styles.visible : ''}`}>
        <Link href="/contact" className={styles.mobileBookNow}>
          Book Now
        </Link>
        <Link href="/contact" className={styles.mobileGetQuote}>
          Get a Quote
        </Link>
      </div>
    </header>
    </>
  );
}
