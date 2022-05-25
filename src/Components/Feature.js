import React from 'react'


export default function Feature(props) {
    return (
        <div className='dropdown'>
            <ul>
                <li><img src={props.icon } alt='icon'/> props.label</li>
            </ul>
        </div>
    )
}