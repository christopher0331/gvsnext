import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function SidebarMenu({ isSidebarOpen, setIsSidebarOpen }) {
    const [isFencingDropdownOpen, setIsFencingDropdownOpen] = useState(false)
    const [isOutdoorLivingDropdownOpen, setIsOutdoorLivingDropdownOpen] = useState(false)
    const [isRollOffDumpstersDropdownOpen, setIsRollOffDumpstersDropdownOpen] = useState(false)

    
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

    return (

        <div>
            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 h-full bg-white text-black p-4 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out z-[60] w-3/5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl transition duration-700`}>

                {/* Close Button */}
                <div style={{ zIndex: '155' }}>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="absolute top-0 right-0 m-4 text-lg"
                    >
                        X
                    </button>
                </div>

                {/* Logo */}
                <div className="flex justify-center items-center mb-4">
                    <Image
                        src="/gvsLogoGreen.png"
                        alt="GVS Logo"
                        width={300}
                        height={300}
                        priority // This prop indicates the image is to be preloaded
                    />
                </div>

                <ul className="space-y-2">
                    <li><Link href="/" className="block px-4 py-2 hover:bg-green-800">Home</Link></li>
                    <li><Link href="/about" className="block px-4 py-2 hover:bg-green-800">About Us</Link></li>
                    <li><Link href="/contact" className="block px-4 py-2 hover:bg-green-800">Contact Us</Link></li>


                    {/* Fencing Dropdown */}
                    <li className="relative">
                        <button onClick={() => setIsFencingDropdownOpen(!isFencingDropdownOpen)} className="hover:bg-green-700 p-2 rounded w-full text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                            GVS Fencing <span className="caret">&#9660;</span>
                        </button>
                        <ul style={isFencingDropdownOpen ? dropdownVisibleStyle : dropdownHiddenStyle}>
                            <li><Link href="/vinyl-fences" className="block px-4 py-2 hover:bg-green-800">Vinyl Fence</Link></li>
                            <li><Link href="/wood-fences" className="block px-4 py-2 hover:bg-green-800 w-200">Wood Fence</Link></li>
                            <li><Link href="/chain-link-fences" className="block px-4 py-2 hover:bg-green-800 w-200">Chain Link Fence</Link></li>
                            <li><Link href="/steel-fences" className="block px-4 py-2 hover:bg-green-800 w-200">Steel Fence</Link></li>
                            <li><Link href="/railing" className="block px-4 py-2 hover:bg-green-800 w-200">Railing</Link></li>
                        </ul>

                    </li>

                    {/* Outdoor Living Dropdown */}
                    <li className="relative">
                        <button onClick={() => setIsOutdoorLivingDropdownOpen(!isOutdoorLivingDropdownOpen)} className="hover:bg-green-700 p-2 rounded w-full text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl transition-transform duration-700 ease-in-out">
                            GVS Outdoor Living <span className="caret">&#9660;</span>
                        </button>
                        <ul style={isOutdoorLivingDropdownOpen ? dropdownVisibleStyle : dropdownHiddenStyle}>
                            <li><Link href="/vinyl-fences" className="block px-4 py-2 hover:bg-green-800">Vinyl Fence</Link></li>
                            <li><Link href="/wood-fences" className="block px-4 py-2 hover:bg-green-800 w-200">Wood Fence</Link></li>
                            <li><Link href="/chain-link-fences" className="block px-4 py-2 hover:bg-green-800 w-200">Chain Link Fence</Link></li>
                            <li><Link href="/cedar-fences" className="block px-4 py-2 hover:bg-green-800 w-200">Cedar Fence</Link></li>
                        </ul>
                    </li>

                    {/* RollOff Dumpster Living Dropdown */}
                    <li className="relative">
                        <button onClick={() => setIsRollOffDumpstersDropdownOpen(!isRollOffDumpstersDropdownOpen)} className="hover:bg-green-700 p-2 rounded w-full text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl transition-transform duration-700 ease-in-out">
                            GVS RollOff Dumpster <span className="caret">&#9660;</span>
                        </button>
                        <ul style={isRollOffDumpstersDropdownOpen ? dropdownVisibleStyle : dropdownHiddenStyle}>
                            <li><Link href="/vinyl-fences" className="block px-4 py-2 hover:bg-green-800">17 ft Bin </Link></li>
                            <li><Link href="/wood-fences" className="block px-4 py-2 hover:bg-green-800 w-200">Junk Removal</Link></li>
                            <li><Link href="/chain-link-fences" className="block px-4 py-2 hover:bg-green-800 w-200">Chain Link Fence</Link></li>
                            <li><Link href="/cedar-fences" className="block px-4 py-2 hover:bg-green-800 w-200">Cedar Fence</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

