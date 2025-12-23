import React from 'react'

function Navbar() {
    return (
        <>
            <nav class="w-full bg-gray-900 text-white fixed top-0 left-0 z-50">
                <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* <!-- Logo --> */}
                    <h1 class="text-2xl font-bold tracking-wide">
                        Render<span class="text-blue-500">Web</span>
                    </h1>

                    {/* <!-- Menu --> */}
                    <ul class="hidden md:flex gap-8 text-sm font-medium">
                        <li class="hover:text-blue-400 cursor-pointer">Home</li>
                        <li class="hover:text-blue-400 cursor-pointer">Services</li>
                        <li class="hover:text-blue-400 cursor-pointer">About</li>
                        <li class="hover:text-blue-400 cursor-pointer">Contact</li>
                    </ul>

                    {/* <!-- Button --> */}
                    <button class="hidden md:block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-sm font-semibold">
                        Get Started
                    </button>

                </div>
            </nav>

        </>
    )
}

export default Navbar
