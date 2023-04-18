
function Navbar() {
    return (
        <>
            <nav class="bg-black">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div class="relative flex items-center justify-between h-16">
                        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="flex-shrink-0">
                                <a href="#" class="text-white text-xl font-bold">Dashboard 3</a>
                            </div>
                            <div class="hidden sm:block sm:ml-6">
                                <div class="flex space-x-4">
                                    <a href="https://mumbai.nowastes.in/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Go to Homepage</a>
                                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Help</a>
                                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>)
}

export default Navbar
