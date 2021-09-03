import React, { FC, useEffect, useState } from 'react'

// @ts-ignore
const globalSolanaObject = window.solana

const Header: FC = () => {
    const logo = 'VYBE.net'
    const [isUserConnected, setIsUserConnected] = useState(false)
    const [publicKey, setPublicKey] = useState('')

    useEffect(() => {
        refreshConnect()
    }, [])
    
    // used for initially connecting to the app
    const connectWallet = async () => {
        if(typeof globalSolanaObject !== 'undefined') {
            await globalSolanaObject.request({ method: "connect" })
        }
    }
    
    // each time the page refreshes, checks if the wallet is connected to the app
    const refreshConnect = async () => {
        if(typeof globalSolanaObject !== 'undefined') {
            await globalSolanaObject.connect({ onlyIfTrusted: true})
            let pubKey = globalSolanaObject.publicKey.toString()
            console.log("Public Key: ", pubKey)
            setPublicKey(pubKey)
        }
    }

    return(
        <nav className="font-museo px-4 py-2 w-screen md:px-8 lg:px-16 lg:py-4 flex justify-between items-center">
            <h1 className=" text-black text-3xl">{logo}</h1>
            {
                publicKey && publicKey !== '' ? (<p>{publicKey}</p>) : (
                    <button className="bg-black p-2 text-white rounded hover:bg-gray-800 hover:text-gray-100 duration-200" onClick={connectWallet}>
                        Sign In
                    </button>
                )
            }
        </nav>
    )
}

export default Header