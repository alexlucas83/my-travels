import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
    <div>
    <img src={photo} />
    <h1>{destination}</h1>
    <p>{distance}</p>
    <p>{country}</p>
    <p>{distance}</p>
    </div>
);

export default Travel;