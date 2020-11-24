import React from 'react'
import { Button } from '../button/Button'

import '../hero-section/HeroSection.css'
import '../../App.css'

export default function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Sites Cafe</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get Started
                </Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                    Watch Now <i className="far fa-play-circle" />
                </Button>
            </div>

        </div>
    )
}
