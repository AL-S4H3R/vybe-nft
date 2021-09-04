import React, { FC } from 'react'

const Footer: FC = () => {
    const logo = 'VYBE.net'

    return(
        <footer className="bg-black text-white py-6 font-museo px-4 w-screen md:px-8 lg:px-16 space-y-4">
            <div className="flex items-center justify-between">
                <h1 className="text-xl">&copy;2021 {logo}</h1>
                <p>A web3 company</p>
            </div>
        </footer>
    )
}

export default Footer