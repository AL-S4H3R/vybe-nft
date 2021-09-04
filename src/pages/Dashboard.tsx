import React, { FC , useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { magic } from '../config/magic'
import { useState } from 'react'
import { MagicUserMetadata } from 'magic-sdk'

const Dashboard: FC = () => {

    // const { userMetadata, isLoggedIn } = useMagic()
    const history = useHistory()
    const [, setIsLoggedIn] = useState(false)
    const [userMetadata, setUsermetadata] = useState<MagicUserMetadata>()
    
    const welcomeMessage = `Hi ${userMetadata?.email?.split('.')[0]}, welcome to vybe`

    useEffect(() => {
        getUserStatus()
    }, [])


    const getUserStatus = async () => {
        const loginStatus = await magic.user.isLoggedIn()
        setIsLoggedIn(loginStatus)
        if(loginStatus === true) {
            const data = await magic.user.getMetadata()
            setUsermetadata(data)
        }
        else {
            history.push('/')
        }
    }

    return(
        <div className="font-museo px-4 py-6 w-screen md:px-8 lg:px-16 h-screen overflow-hidden space-y-8">
            <nav className="flex items-center justify-between">
                <h1 className="text-4xl font-bold">VYBE.net</h1>
                <p className="p-2 bg-gray-200 text-gray-900 rounded shadow">
                    {userMetadata?.publicAddress?.slice(0,6).concat('...')} 
                    {userMetadata?.publicAddress?.slice(40,45)}
                </p>
            </nav>
            <div className="flex items-center justify-center mt-12">
                <p className="text-gray-800 text-3xl font-mono">{welcomeMessage}</p>
            </div>
            <p className="text-center text-gray-600">Coming very soon.</p>
        </div>
    )
}

export default Dashboard