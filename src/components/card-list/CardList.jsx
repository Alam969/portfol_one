import React from 'react'
import Card from '../card/Card'
import './CardList.css'

export default function CardList() {
    return (
        <div className="cards">
            <h1>Let's Find Out Something Amazing</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Card
                        src='/images/Taj-Mahal.jpg'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        label='whats up'
                        path='/services'
                        />
                        <Card 
                        src='/images/Boat.jpg'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        label='Boat'
                        path='/services'
                        />
                        <Card 
                        src='/images/Canal.jpg'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        label='Canal'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <Card 
                        src='/images/Snow.jpg'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        label='Snow'
                        path='/services'
                        />
                        <Card 
                        src='/images/Bridge.jpg'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        label='Bridge'
                        path='/services'
                        />
                        <Card 
                        src='/images/Horse.jpg'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        label='Horse'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
