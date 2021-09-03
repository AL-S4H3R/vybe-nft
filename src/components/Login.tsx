import React, { FC, useEffect, useState } from 'react'
import { magic } from '../config/magic'
import * as web3 from '@solana/web3.js'
import * as splToken from '@solana/spl-token'

const Login: FC = () => {

    const [email, setEmail] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [solanaPubKey, setSolanaPubKey] = useState('')

    return(
        <div className="px-8 py-4 font-museo">
            <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
            />
            <button onClick={() => {}}>Send Magic Link</button>
            Public key: 
            {
                solanaPubKey ? <p>{solanaPubKey}</p> : 'empty'
            }
            <button onClick={() => {}}>Mint</button>
        </div>
    )
}

export default Login