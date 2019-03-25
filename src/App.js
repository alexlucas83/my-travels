import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travel.React</h1>
        </header>
        <Travel
          destination ="Rome Italie"
          country ="La superficie de l'italie est de 301 338 km²"
          distance ="distance entre toulon et le centre de l'italie ,9 h 2 min (854,2 km)"
          photo="http://www.quotidiendutourisme.com/wp/wp-content/uploads/2018/01/Rome-Italie.jpg"
        />
        <Travel
          destination ="La Corse"
          country ="La superficie de l'italie est de 8680 km²"
          distance ="distance entre toulon et la corse ,8 h 29 min (329,9 km) via Ajaccio - Toulon"
          photo="https://cdn.officiel-des-vacances.com/files/styles/product_450x285/public/product/palombaggia_corse_fotolia_4.jpg?itok=CT0twui6"
        />
      </div>
    );
  }
}

export default App;