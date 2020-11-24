import React from 'react'
import HeroSection from '../components/hero-section/HeroSection'
import CardList from '../components/card-list/CardList'
import Footer from '../components/footer/Footer'

import '../App.css'

export default function Home() {
    return (
        <div>
            <HeroSection />
            <CardList />
            <Footer />
        </div>
    )
}
