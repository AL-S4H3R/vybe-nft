import React, { FC } from 'react'
import Avatar from './Avatar'
import { 
    RedditShareButton, 
    RedditIcon, 
    FacebookShareButton, 
    FacebookIcon, 
    TwitterIcon, 
    TwitterShareButton 
} from 'react-share'

interface Props {
    pubKey: string,
    username: string
}

const Wallet: FC<Props> = ({ pubKey, username }) => {

    return(
        <div className="flex justify-center items-center w-auto">
            <div className="border px-8 py-6 rounded-md border-gray-300 shadow justify-between block md:flex items-center">
                <div className="space-y-4">
                    <p className="text-center font-semibold text-gray-800 italic text-lg">💰 {pubKey.slice(0,10).concat(' ...')} {pubKey.slice(40, )}</p>
                    <div className="flex justify-center">
                        <Avatar pubKey={pubKey}/>
                    </div>
                    <div className="space-y-0">
                        <p className="text-center font-mono font-black text-gray-700 text-md">🚀<span className="text-xl text-black font-normal">{username.split('@')[0]}</span></p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <RedditShareButton url="https://vybenet.netlify.app/"> 
                                    <RedditIcon className="w-12 h-12 rounded-full"/>
                                </RedditShareButton>
                            </div>
                            <div>
                                <FacebookShareButton url="https://vybenet.netlify.app/"> 
                                    <FacebookIcon className="w-12 h-12 rounded-full"/>
                                </FacebookShareButton>
                            </div>
                            <div>
                                <TwitterShareButton url="https://vybenet.netlify.app/"> 
                                    <TwitterIcon className="w-12 h-12 rounded-full"/>
                                </TwitterShareButton>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="px-16 space-y-2 md:space-y-4">
                    <h1 className="text-md text-gray-600"><GiWallet /> 
                        <span className="font-mono text-xl text-black">
                           {' '} {pubKey.slice(0,30).concat(' ...')} {pubKey.slice(42,)}
                        </span>
                    </h1>
                    <h1 className="text-md text-gray-600">Registered Email: 
                        <span className="font-mono text-xl text-black">
                           {' '} {username}
                        </span>
                    </h1>
                </div> */}
            </div>
        </div>
    )
}

export default Wallet