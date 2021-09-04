import React, { FC } from 'react'
import account from '../../assets/account.svg'

const Features: FC = () => {
    return(
        <div className="font-museo px-4 w-screen md:px-8 lg:px-16 space-y-4">
            <div className="flex items-center justify-center">
                <div>
                    <img 
                        src={account} 
                        alt="account" 
                        className="h-64"
                    />            
                </div>
            </div>
        </div>
    )
}

export default Features