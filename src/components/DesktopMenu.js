import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { IoIosMail } from 'react-icons/io';
import { MdPhoneForwarded } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import '../app/globals.css'
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


export default function DesktopMenu() {

    const [isFencingDropdownOpen, setIsFencingDropdownOpen] = useState(false); // State for Fencing dropdown
    const [isOutdoorLivingDropdownOpen, setIsOutdoorLivingDropdownOpen] = useState(false); // State for Outdoor Living dropdown
    const [isRollOffDumpstersDropdownOpen, setIsRollOffDumpstersDropdownOpen] = useState(false);
    const [isFormsDropdownOpen, setIsFormsDropdownOpen] = useState(false);

    const handleDropdownToggle = (dropdownType) => {
        if (dropdownType === 'fencing') {
            setIsFencingDropdownOpen(!isFencingDropdownOpen);
            setIsOutdoorLivingDropdownOpen(false);
            setIsRollOffDumpstersDropdownOpen(false);
            setIsFormsDropdownOpen(false);
        } else if (dropdownType === 'outdoorLiving') {
            setIsFencingDropdownOpen(false);
            setIsOutdoorLivingDropdownOpen(!isOutdoorLivingDropdownOpen);
            setIsRollOffDumpstersDropdownOpen(false);
            setIsFormsDropdownOpen(false);
        } else if (dropdownType === 'rollOffDumpsters') {
            setIsFencingDropdownOpen(false);
            setIsOutdoorLivingDropdownOpen(false);
            setIsRollOffDumpstersDropdownOpen(!isRollOffDumpstersDropdownOpen);
            setIsFormsDropdownOpen(false);
        }
        else if (dropdownType === 'forms') {
            setIsFencingDropdownOpen(false);
            setIsOutdoorLivingDropdownOpen(false);
            setIsRollOffDumpstersDropdownOpen(!false);
            setIsFormsDropdownOpen(!isFormsDropdownOpen);
        }
    };

    const menuItemStyle = {
        padding: '.5em',
        borderRadius: '4px',
        textDecoration: 'none',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        fontSize: '2.1vw',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Example shadow
        zIndex: '150',

    };

    // Styles for dropdown menu items
    const dropdownMenuItemStyle = {
        padding: '1px',
        borderRadius: '4px',
        textDecoration: 'none',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        fontSize: '2.1vw',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)', // Example shadow
        zIndex: '150',


    };

    // Updated styles for the menu container to align items to the bottom
    const menuContainerStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end', // Align items to the bottom
        flexGrow: 0.5,
        gap: '.3vw',
        color: 'black',
        zIndex: '150',
    };



    return (
        <ErrorBoundary>
            <div>
                <div className="contact-social-container">
                    {/* Email and Phone */}
                    <div className="contact-info">
                        <a href="mailto:admin@gvsco.net" className="email-phone-hover">
                            <IoIosMail className="icon-hover" />
                            <span className="contactInfoNavbar">admin@gvsco.net</span>
                        </a>
                        <a href="tel:3033588168" className="email-phone-hover">
                            <MdPhoneForwarded className="icon-hover"  />
                            <span className="contactInfoNavbar">(303)358-8168</span>
                        </a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="social-icons">
                        <a href="https://www.facebook.com/greenviewsolutions" target="_blank" rel="noopener noreferrer" className="icon-hover">
                            <FaSquareFacebook style={{ fontSize: '2.3vw' }} />
                        </a>
                        <a href="https://www.instagram.com/greenview_solutions_llc" target="_blank" rel="noopener noreferrer" className="icon-hover">
                            <FiInstagram style={{ fontSize: '2.3vw' }} />
                        </a>
                        <a href="https://www.google.com/maps/place/Greenview+Solutions/@39.9890046,-105.1713587,11z/data=!4m6!3m5!1s0x876bf5d9d671bf3f:0xe263da5d1b64b4a4!8m2!3d40.125623!4d-104.9541494!16s%2Fg%2F11j76mvz9t?coh=164777&entry=tt&shorturl=1" target="_blank" rel="noopener noreferrer" className="icon-hover">
                            <FaGoogle style={{ fontSize: '2.3vw' }} />
                        </a>
                    </div>
                </div>


                {/* Desktop Menu */}
                <div className="hidden" style={menuContainerStyle}>

                    <Link href="/" className="menu-link-upper" style={menuItemStyle}>Home</Link>

                    {/* GVS Fencing */}
                    <div className="relative inline-flex items-center" style={menuItemStyle}>
                        <button onClick={() => handleDropdownToggle('fencing')} className="menu-link-upper" style={dropdownMenuItemStyle}>
                            Fencing <span className="caret">&#9660;</span>
                        </button>
                        {isFencingDropdownOpen && (
                            <ul className="absolute left-0 top-full mt-1 border shadow-md bg-white" style={{ width: '120%' }}>
                                <li><Link href="/wood-fences" className="menu-link">Wood Fence</Link></li>
                                <div className="menu-divider"></div>

                                <li><Link href="/vinyl-fences" className="menu-link">Vinyl Fence</Link></li>
                                <div className="menu-divider"></div>

                                <li><Link href="/chainlink-fence" className="menu-link">Chain Link Fence</Link></li>
                                <div className="menu-divider"></div>

                            </ul>
                        )}
                    </div>

                    {/* GVS Outdoor Living */}
                    <Link href="/outdoor-living" className="menu-link-upper" style={menuItemStyle}>Outdoor Living</Link>

                    {/* GVS RollOff Dumpsters */}
                    {/* <Link href="/rolloff-dumpsters" className="menu-link-upper" style={menuItemStyle}>RollOff Dumpsters</Link> */}

                    <Link href="/portfolio" className="menu-link-upper" style={menuItemStyle}>Portfolio</Link>

                    <Link href="/forms" className="menu-link-upper" style={menuItemStyle}>Forms</Link>

                    <Link href="/contact" className="menu-link-upper" style={menuItemStyle}>Contact Us</Link>
                    <Link href="/blog" className="menu-link-upper" style={menuItemStyle}>News</Link>

                </div>
            </div>
        </ErrorBoundary>
    );
}
