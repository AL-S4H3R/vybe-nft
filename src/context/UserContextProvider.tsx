import { MagicUserMetadata } from 'magic-sdk'
import React, { createContext, FC } from 'react'

const defaultValues: MagicUserMetadata = {
    email: '',
    issuer: '',
    publicAddress: ''
}

const UserContext = createContext<MagicUserMetadata>(defaultValues)

const UserContextProvider: FC = ({ children }) => {
    return(
        <UserContext.Provider value={defaultValues}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider