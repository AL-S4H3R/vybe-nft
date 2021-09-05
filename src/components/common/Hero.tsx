import React, { useState, useCallback} from 'react'
import { magic } from '../../config/magic'
import { useHistory } from 'react-router-dom'

const paraMsg1 = `Get an NFT everytime you shop.`
const paraMsg2 = `No extensions, No private keys, No BS.`

const Hero: React.FC = () => {

    const [email, setEmail] = useState('')
    const history = useHistory()
    
    const sendMagicLink = useCallback(async () => {
        await magic.auth.loginWithMagicLink({ email })
        history.push("/dashboard")
    }, [email]);

    return(
        <div className="font-museo px-4 py-6 w-screen md:px-8 lg:px-16 lg:py-8 space-y-4">
            <div className="flex items-center justify-center">
                <div>
                    <div className="space-y-4">
                        <h1 className="text-center text-4xl md:text-6xl font-bold bg-clip-text bg-gradient-to-br from-indigo-800 to-blue-800">
                            Free NFT's for all.
                        </h1>
                        <div>
                            <p className="text-center text-xl opacity-80 font-mono">{paraMsg1}</p>
                            <p className="text-center text-xl opacity-80 font-mono">{paraMsg2}</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter your best email & start vybing"
                            className="w-full border px-4 py-2 text-center mt-4 rounded border-black"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            onClick={sendMagicLink} 
                            className="w-full transform hover:-translate-y-2 bg-black p-2 text-white rounded hover:bg-gray-800 hover:text-gray-100 duration-200">
                            Early Access
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero