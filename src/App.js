import React from "react";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import MobileMenu from "./Components/MobileMenu";
// import Feature from "./Components/Feature"
import "./App.css";

export default function App() {
  //  const fetchData = ()=> fetch('https://catfact.ninja/fact')
  //     .then(res=> res.json())
  //     .then(data=> console.log(data))
  //     .catch(res=> console.log('ERROR'))

  //   fetchData()

  return (
    <div className="appContainer">
      <Header />
      <Banner />
    </div>
  );
}
