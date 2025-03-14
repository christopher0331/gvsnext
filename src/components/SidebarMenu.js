import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function SidebarMenu({ isSidebarOpen, setIsSidebarOpen }) {
    const [isFencingDropdownOpen, setIsFencingDropdownOpen] = useState(false)
    const [isOutdoorLivingDropdownOpen, setIsOutdoorLivingDropdownOpen] = useState(false)
    const [isRollOffDumpstersDropdownOpen, setIsRollOffDumpstersDropdownOpen] = useState(false)
    const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false)


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
            <div className={`fixed top-0 right-0 h-full bg-white text-black p-4 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out z-[500] w-3/5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`}>

                {/* Close Button */}
                {/* <div style={{ zIndex: '155' }}>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="absolute top-4 right-4 text-lg z-0"
                        style={{ zIndex: 155 }}
                    >
                        X
                    </button>
                </div> */}

                {/* Logo */}
                <div className="flex justify-center items-center mb-4">
                    <Image
                        src="https://imagedelivery.net/OHVtjf602XdHccCnziCADA/02e7e67e-6b3a-4a32-fa09-93175d0e1200/gvsLogoClear"
                        alt="GVS Logo"
                        width={300}
                        height={300}
                        quality={100}
                        priority
                        sizes="(max-width: 768px) 20vw, 
                               (max-width: 1200px) 10vw, 
                               5vw"                    />
                </div>

                <ul className="space-y-2">
                    <li><Link href="/" className="block px-4 py-2 hover:bg-green-800">Home</Link></li>

                    {/* Fencing Dropdown */}
                    <li className="relative">
                        <button onClick={() => setIsFencingDropdownOpen(!isFencingDropdownOpen)} className="hover:bg-green-700 p-2 rounded w-full text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                            GVS Fencing <span className="caret">&#9660;</span>
                        </button>
                        <ul style={isFencingDropdownOpen ? dropdownVisibleStyle : dropdownHiddenStyle}>
                            <li><Link href="/wood-fences" className="block px-4 py-2 hover:bg-green-800 w-200">Wood Fence</Link></li>
                            <li><Link href="/vinyl-fences" className="block px-4 py-2 hover:bg-green-800">Vinyl Fence</Link></li>
                            <li><Link href="/chainlink-fence" className="block px-4 py-2 hover:bg-green-800 w-200">Chain Link Fence</Link></li>
                        </ul>

                    </li>

                    {/* Outdoor Living */}
                    <li><Link href="/outdoor-living-new" className="block px-4 py-2 hover:bg-green-800">Outdoor Living</Link></li>
                    
                    {/* Backflow Testing */}
                    <li><Link href="/backflow-testing" className="block px-4 py-2 hover:bg-green-800">Backflow Testing</Link></li>
                    
                    {/* Resources Dropdown */}
                    <li className="relative">
                        <button onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)} className="hover:bg-green-700 p-2 rounded w-full text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                            Resources <span className="caret">&#9660;</span>
                        </button>
                        <ul style={isResourcesDropdownOpen ? dropdownVisibleStyle : dropdownHiddenStyle}>
                            <li><Link href="/portfolio" className="block px-4 py-2 hover:bg-green-800">Portfolio</Link></li>
                            <li><Link href="/forms" className="block px-4 py-2 hover:bg-green-800">Forms</Link></li>
                            <li><Link href="/blog" className="block px-4 py-2 hover:bg-green-800">News</Link></li>
                        </ul>
                    </li>
                    
                    <li><Link href="/contact" className="block px-4 py-2 hover:bg-green-800">Contact Us</Link></li>

                    {/* RollOff Dumpster Living Dropdown */}
                    {/* <li><Link href="/roll-off-bins" className="block px-4 py-2 hover:bg-green-800">RollOff Dumpsters</Link></li> */}
                </ul>
            </div>
        </div>
    );
}

