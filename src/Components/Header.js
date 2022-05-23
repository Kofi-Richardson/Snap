import React from 'react'
import './Components.css'

export default function Header() {
    return (
        <div className='header'>
            <div className='Logo headerSpacing'>
                <h1>snap</h1>
            </div>

            <div className='navBar headerSpacing'>
                <ul>
                    <li className='pointer'><a href>Feature <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4" /></svg></a></li>
                    
                    <li className='pointer'><a href>Company <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4" /></svg></a></li>
                    
                    <li className='pointer'><a href>Careers</a></li>
                    
                    <li className='pointer'><a href>About</a></li>
                </ul>
            </div>

            <div className='headerButtons headerSpacing'>
                <button className='buttons pointer' id='loginButton'>Login</button>
                <button className='buttons pointer' id='registerButton'>Register</button>
            </div>

        </div>
    )
}