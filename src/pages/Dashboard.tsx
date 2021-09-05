import React, { FC , useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { magic } from '../config/magic'
import { useState } from 'react'
import { MagicUserMetadata } from 'magic-sdk'
import Loader from '../components/common/Loading'
import Avatar from '../components/Dashboard/Avatar'
import Wallet from '../components/Dashboard/Wallet'
import Footer from '../components/common/Footer'

const Dashboard: FC = () => {

    // const { userMetadata, isLoggedIn } = useMagic()
    const history = useHistory()
    const [, setIsLoggedIn] = useState(false)
    const [userMetadata, setUsermetadata] = useState<MagicUserMetadata>()
    const [loading, setLoading] = useState(true)

    const welcomeMessage = `Hi ${userMetadata?.email?.split('@')[0]}, welcome to vybe`

    useEffect(() => {
        getUserStatus()
    }, [userMetadata])


    const getUserStatus = async () => {
        const loginStatus = await magic.user.isLoggedIn()
        setIsLoggedIn(loginStatus)
        if(loginStatus === true) {
            const data = await magic.user.getMetadata()
            setUsermetadata(data)
            setLoading(false)
        }
        else {
            history.push('/')
        }
    }

    if(loading) {
        return <Loader />
    }

    const logout = async () => {
        await magic.user.logout()
    }

    return(
        <div className="font-museo px-4 py-6 w-screen md:px-8 lg:px-16 h-screen overflow-auto space-y-8">
            <nav className="flex items-center justify-between">
                <h1 className="text-4xl font-bold">VYBE.net</h1>
                <button onClick={logout} className="p-2 bg-gray-900 text-gray-200 rounded shadow">
                    Logout
                </button>
            </nav>
            {/* <div className="flex items-center justify-center mt-12">
                <p className="text-gray-800 text-3xl font-mono">{welcomeMessage}</p>
            </div> */}
            <div className="md:flex justify-evenly space-y-4 md:space-y-0">
                <div className="space-y-4 font-mono">
                    <h2 className="font-mono text-4xl italic font-bold text-center md:text-left">bienvenido,</h2>
                    <p className="text-center md:text-left tracking-tighter text-lg leading-tight">Enjoy exclusive rewards and discounts whenever you shop</p>
                    <p className="text-center md:text-left tracking-tighter text-lg leading-tight">We'll be launching really soon.</p>
                    <p className="text-center md:text-left font-mono">- Ciao.</p>
                </div>
                {
                    userMetadata && userMetadata.publicAddress && userMetadata.email &&
                    (
                        <div className="flex justify-center">
                            <Wallet 
                                pubKey={userMetadata.publicAddress}
                                username={userMetadata.email}
                            />
                        </div>
                    )
                }
            </div>
            <p className="text-center text-gray-600">Coming very soon.</p>
        </div>
    )
}

export default Dashboard