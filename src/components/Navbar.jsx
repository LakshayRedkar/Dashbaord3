import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(prevState => !prevState);
    }

    return (
        <nav className="bg-black">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-14">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0">
                            <a href="#" className="text-white text-xl font-bold">Dashboard 3</a>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <a href="https://mumbai.nowastes.in/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Go to Homepage</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Help</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                            </div>
                        </div>
                    </div>

                    <div className="block sm:hidden">
                        <button
                            className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-300 hover:text-white hover:border-white"
                            onClick={toggleMenu}
                        >
                            <svg
                                className="fill-current h-3 w-3"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Menu</title>
                                <path
                                    d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="block sm:hidden bg-black" id="responsive-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="https://mumbai.nowastes.in/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Go to Homepage</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Help</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
