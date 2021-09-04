import { useEffect, useState } from 'react'
import { magic } from '../config/magic'
import { MagicUserMetadata } from 'magic-sdk'

const useMagic = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userMetadata, setUsermetadata] = useState<MagicUserMetadata>()
    
    useEffect(() => {
        initUser()
    }, [])

    const initUser = async () => {
        const loginStatus = await magic.user.isLoggedIn()
        setIsLoggedIn(loginStatus)
        if(loginStatus) {
            const meta = await magic.user.getMetadata()
            setUsermetadata(meta)
        }
    }

    return { isLoggedIn, userMetadata}
}

export default useMagic