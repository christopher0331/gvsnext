import Link from 'next/link';
import { useState } from 'react';
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
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        fontSize: '1.8vw'
    };

    // Styles for dropdown menu items
    const dropdownMenuItemStyle = {
        padding: '5px',
        borderRadius: '4px',
        textDecoration: 'none',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        fontSize: '.9em'
    };

    // Updated styles for the menu container to align items to the bottom
    const menuContainerStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end', // Align items to the bottom
        flexGrow: 0.5,
        gap: '12px',
        color: 'black'
    };



    return (
        <div>
            {/* Desktop Menu */}
            <div className="hidden" style={menuContainerStyle}>
                <Link href="/" className="menu-link" style={menuItemStyle}>Home</Link>


                {/* GVS Fencing */}
                <div className="relative inline-flex items-center" style={menuItemStyle}>
                    <button onClick={() => handleDropdownToggle('fencing')} style={dropdownMenuItemStyle}>
                        GVS Fencing <span className="caret">&#9660;</span>
                    </button>
                    {isFencingDropdownOpen && (
                        <ul className="absolute left-0 top-full mt-1 bg-white border shadow-md" style={{ width: '250px' }}>
                            <li><Link href="/vinyl-fences" className="menu-link">Vinyl Fence</Link></li>
                            <li><Link href="/wood-fences" className="menu-link">Wood Fence</Link></li>
                            <li><Link href="/chain-link-fences" className="menu-link">Chain Link Fence</Link></li>
                            <li><Link href="/cedar-fences" className="menu-link">Cedar Fence</Link></li>
                            <li><Link href="/steel-fences" className="menu-link">Steel Fence</Link></li>
                            <li><Link href="/aluminium-fences" className="menu-link">Aluminium Fence</Link></li>
                            <li><Link href="/railing" className="menu-link">Railing</Link></li>
                            <li><Link href="/gates-entry" className="menu-link">Gates and Entry</Link></li>
                            <li><Link href="/pool-fences" className="menu-link">Pool Fence</Link></li>
                            <li><Link href="/dog-fences" className="menu-link">Dog Fence</Link></li>
                            <li><Link href="/trex-fences" className="menu-link">Trex Fence</Link></li>
                        </ul>
                    )}
                </div>

                {/* GVS Outdoor Living */}

                <div className="relative inline-flex items-center" style={menuItemStyle}>
                    <button onClick={() => handleDropdownToggle('outdoorLiving')} style={dropdownMenuItemStyle}>
                        GVS Outdoor Living <span className="caret">&#9660;</span>
                    </button>
                    {isOutdoorLivingDropdownOpen && (
                        <ul className="absolute left-0 top-full mt-1 bg-white border shadow-md" style={{ width: '250px' }}>
                            <li><Link href="/vinyl-fences" className="menu-link">Vinyl Fence</Link></li>
                            <li><Link href="/wood-fences" className="menu-link">Wood Fence</Link></li>
                            <li><Link href="/chain-link-fences" className="menu-link">Chain Link Fence</Link></li>
                            <li><Link href="/cedar-fences" className="menu-link">Cedar Fence</Link></li>
                        </ul>
                    )}
                </div>

                {/* GVS RollOff Dumpsters */}
                <div className="relative inline-flex items-center" style={menuItemStyle}>
                    <button onClick={() => handleDropdownToggle('rollOffDumpsters')} className="menu-link" style={dropdownMenuItemStyle}>
                        GVS Fencing <span className="caret">&#9660;</span>
                    </button>
                    {isRollOffDumpstersDropdownOpen && (
                        <ul className="absolute left-0 top-full mt-1 bg-white border shadow-md" style={{ width: '250px' }}>
                            <li><Link href="/vinyl-fences" className="menu-link">Vinyl Fence</Link></li>
                            <li><Link href="/wood-fences" className="menu-link">Wood Fence</Link></li>
                        </ul>
                    )}
                </div>

                <Link href="/" className="menu-link" style={menuItemStyle}>About Us</Link>
                <Link href="/" className="menu-link" style={menuItemStyle}>Contact Us</Link>
            </div>
        </div>
    );
}
