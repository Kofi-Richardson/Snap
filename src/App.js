import React from "react"
// import ReactDOM from "react-dom"
import Header from './Components/Header'
import Banner from './Components/Banner'
import Feature from "./Components/Feature"
import {ReactComponet as Icon} from './images/icons-todo.svg'

export default function App() {
   

  return (
    <div>
      <Header />
      <Banner />
      <Feature icon='./images/icon-todo.svg'/>
    </div>
  )
}