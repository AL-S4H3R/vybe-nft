import React, { FC } from 'react'
import Features from '../components/common/Features'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import Hero from '../components/common/Hero'

const Home: FC = () => {
    return(
        <div className="overflow-hidden">
            <Header />
            <Features />
            <Hero />
            <Footer />
        </div>
    )
}

export default Home