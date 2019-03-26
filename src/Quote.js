import React from "react";

const Quote = ({ destination, country, photo, distance }) => (
    <div>
    <img src={photo} alt={destination}/>
    <h1>{destination}</h1>
    <p>{distance}</p>
    <p>{country}</p>
    
    </div>
);

export default Quote;