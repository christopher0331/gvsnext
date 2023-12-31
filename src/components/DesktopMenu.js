import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { IoIosMail } from 'react-icons/io';
import { MdPhoneForwarded } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

import { FiInstagram } from "react-icons/fi";


import '../app/globals.css'

export default function DesktopMenu() {

    const [isFencingDropdownOpen, setIsFencingDropdownOpen] = useState(false); // State for Fencing dropdown
    const [isOutdoorLivingDropdownOpen, setIsOutdoorLivingDropdownOpen] = useState(false); // State for Outdoor Living dropdown
    const [isRollOffDumpstersDropdownOpen, setIsRollOffDumpstersDropdownOpen] = useState(false);

    const handleDropdownToggle = (dropdownType) => {
        if (dropdownType === 'fencing') {
            setIsFencingDropdownOpen(!isFencingDropdownOpen);
            setIsOutdoorLivingDropdownOpen(false);
            setIsRollOffDumpstersDropdownOpen(false);
        } else if (dropdownType === 'outdoorLiving') {
            setIsFencingDropdownOpen(false);
            setIsOutdoorLivingDropdownOpen(!isOutdoorLivingDropdownOpen);
            setIsRollOffDumpstersDropdownOpen(false);
        } else if (dropdownType === 'rollOffDumpsters') {
            setIsFencingDropdownOpen(false);
            setIsOutdoorLivingDropdownOpen(false);
            setIsRollOffDumpstersDropdownOpen(!isRollOffDumpstersDropdownOpen);
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
        <div>
            <div className="contact-social-container">
                {/* Email and Phone */}
                <div className="contact-info">
                    <a href="mailto:admin@gvsco.net" className="email-phone-hover">
                        <IoIosMail className="icon-hover" style={{ fontSize: '2.3vw' }} />
                        <span>admin@gvsco.net</span>
                    </a>
                    <a href="tel:3033588168" className="email-phone-hover">
                        <MdPhoneForwarded className="icon-hover" style={{ fontSize: '2.3vw' }} />
                        <span>(303)358-8168</span>
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
                            <li><Link href="/vinyl-fences" className="menu-link">Vinyl Fence</Link></li>
                            <div className="menu-divider"></div>
                            <li><Link href="/wood-fences" className="menu-link">Wood Fence</Link></li>
                            <div className="menu-divider"></div>

                            <li><Link href="/chain-link-fences" className="menu-link">Chain Link Fence</Link></li>
                            <div className="menu-divider"></div>

                            <li><Link href="/cedar-fences" className="menu-link">Cedar Fence</Link></li>
                            <div className="menu-divider"></div>

                            <li><Link href="/steel-fences" className="menu-link">Steel Fence</Link></li>
                            <div className="menu-divider"></div>

                            <li><Link href="/aluminium-fences" className="menu-link">Aluminium Fence</Link></li>
                            <div className="menu-divider"></div>

                            <li><Link href="/railing" className="menu-link">Railing</Link></li>
                            <div className="menu-divider"></div>

                            <li><Link href="/gates-entry" className="menu-link">Gates and Entry</Link></li>
                            <div className="menu-divider"></div>

                            <li><Link href="/pool-fences" className="menu-link">Pool Fence</Link></li>
                            <div className="menu-divider"></div>

                            <li><Link href="/dog-fences" className="menu-link">Dog Fence</Link></li>
                            <div className="menu-divider"></div>

                            <li><Link href="/trex-fences" className="menu-link">Trex Fence</Link></li>
                        </ul>
                    )}
                </div>

                {/* GVS Outdoor Living */}

                <div className="relative inline-flex items-center" style={menuItemStyle}>
                    <button onClick={() => handleDropdownToggle('outdoorLiving')} className="menu-link-upper" style={dropdownMenuItemStyle}>
                        Outdoor Living <span className="caret">&#9660;</span>
                    </button>
                    {isOutdoorLivingDropdownOpen && (
                        <ul className="absolute left-0 top-full mt-1 bg-white border shadow-md" style={{ width: '100%' }}>
                            <li><Link href="/vinyl-fences" className="menu-link">Vinyl Fence</Link></li>
                            <div className="menu-divider"></div>

                            <li><Link href="/wood-fences" className="menu-link">Wood Fence</Link></li>
                            <div className="menu-divider"></div>

                            <li><Link href="/chain-link-fences" className="menu-link">Chain Link Fence</Link></li>
                            <div className="menu-divider"></div>

                            <li><Link href="/cedar-fences" className="menu-link">Cedar Fence</Link></li>
                        </ul>
                    )}
                </div>

                {/* GVS RollOff Dumpsters */}
                <div className="relative inline-flex items-center" style={menuItemStyle}>
                    <button onClick={() => handleDropdownToggle('rollOffDumpsters')} className="menu-link-upper" style={dropdownMenuItemStyle}>
                        Roll Off Dumpsters <span className="caret">&#9660;</span>
                    </button>
                    {isRollOffDumpstersDropdownOpen && (
                        <ul className="absolute left-0 top-full mt-1 bg-white border shadow-md" style={{ width: '100%' }}>
                            <li><Link href="/vinyl-fences" className="menu-link">Vinyl Fence</Link></li>
                            <div className="menu-divider"></div>

                            <li><Link href="/wood-fences" className="menu-link">Wood Fence</Link></li>
                        </ul>
                    )}
                </div>

                <Link href="/" className="menu-link-upper" style={menuItemStyle}>About Us</Link>
                <Link href="/" className="menu-link-upper" style={menuItemStyle}>Contact Us</Link>
            </div>
        </div>
    );
}
