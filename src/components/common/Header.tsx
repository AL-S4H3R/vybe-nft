import React, { FC, useEffect, useState } from 'react'

// @ts-ignore
const globalSolanaObject = window.solana

const Header: FC = () => {
    const logo = 'VYBE.net'

    return(
        <nav className="font-museo px-4 py-6 w-screen md:px-8 lg:px-16 flex justify-between items-center">
            <h1 className=" text-black text-3xl">{logo}</h1>
            <button className="transform hover:-translate-y-2 bg-black p-2 text-white rounded hover:bg-gray-800 hover:text-gray-100 duration-200">
                Early Access
            </button>
        </nav>
    )
}

export default Header