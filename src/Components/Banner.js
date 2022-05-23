import React from 'react'
import { ReactComponent as Databiz } from '../images/client-databiz.svg'
import { ReactComponent as Audiophile } from '../images/client-audiophile.svg'
import { ReactComponent as Maker } from '../images/client-maker.svg'
import { ReactComponent as Meet } from '../images/client-meet.svg'
import HeroDesktop from '../images/image-hero-desktop.png'
import './Components.css'

export default function Banner() {
    return (
        <div className='container'>
            <div className='containerLettering'>
                <h1>Make remote work</h1>

                <p>
                    Get your team in sync, no matter your location. Streamline processes, 
                    create team rituals, and watch productivity soar.
                </p>

                <div className='containerLetteringButton'>
                <button className='buttons' id='learnMore'>Learn more</button>
                </div>

                <div className='containerSponsers'>
                    <ul>
                        <li><Databiz /></li>
                        <li><Audiophile /></li>
                        <li><Meet /></li>
                        <li><Maker/></li>
                    </ul>
                </div>

            </div>

            <div className='containerBanner'>
                <img src={HeroDesktop} alt =" banner" width="450px"/>
            </div>
        </div>
    )
}