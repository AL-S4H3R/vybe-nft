import React from 'react'
import Loading from '../../assets/loading.json'
import Lottie from 'lottie-react'

const Loader = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center overflow-hidden">
            <Lottie animationData={Loading}/>
        </div>
    )
}

export default Loader