import React from 'react'

const paraMsg = `Enjoy crispy NFT's for doing your finances right.`

const Hero: React.FC = () => {
    return(
        <div className="font-museo px-4 py-6 w-screen md:px-8 lg:px-16 lg:py-8 space-y-4">
            <div className="flex items-center justify-center">
                <div>
                    <div className="space-y-4">
                        <h1 className="text-center text-4xl md:text-6xl font-bold bg-clip-text bg-gradient-to-br from-indigo-800 to-blue-800">
                            NFT's done right
                        </h1>
                        <p className="text-center text-xl opacity-80 font-mono">{paraMsg}</p>
                    </div>
                    <div className="space-y-3">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter your best email & start vybing"
                            className="w-full border px-4 py-2 text-center mt-4 rounded border-black"
                        />
                        <button className="w-full transform hover:-translate-y-2 bg-black p-2 text-white rounded hover:bg-gray-800 hover:text-gray-100 duration-200">
                            Early Access
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero