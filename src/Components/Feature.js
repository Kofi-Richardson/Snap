import React from 'react'
import './Components.css'
import { ReactComponent as Reminder } from '../images/icon-reminders.svg'
import { ReactComponent as Todo } from '../images/icon-todo.svg'
import { ReactComponent as Planning } from '../images/icon-planning.svg'
import { ReactComponent as Calander } from '../images/icon-calendar.svg'



export default function Feature(props) {
    return (
        <div className='dropDown'>
            <ul>
                <li><Todo />  Todo List</li>
                <li><Calander/>  Calender</li>
                <li><Reminder />  Reminder</li>
                <li><Planning/>  Planning</li>
            </ul>
        </div>
    )
}