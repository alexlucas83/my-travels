import React from "react";
import Quote from "./Quote";
// src/Quotes.js
const travel = [
  {
          destination :"Rome Italie",
          country :"La superficie de l'italie est de 301 338 km²",
          distance :"distance entre toulon et le centre de l'italie ,9 h 2 min (854,2 km)",
          photo :"http://www.quotidiendutourisme.com/wp/wp-content/uploads/2018/01/Rome-Italie.jpg"
  },
  {
          destination :"La Corse",
          country :"La superficie de l'italie est de 8680 km²",
          distance :"distance entre toulon et la corse ,8 h 29 min (329,9 km) via Ajaccio - Toulon",
          photo:"https://cdn.officiel-des-vacances.com/files/styles/product_450x285/public/product/palombaggia_corse_fotolia_4.jpg?itok=CT0twui6"
},
  {
          destination :"Le Canada",
          country :"La superficie du Canada est de 9,985 millions de km²",
          distance :"distance entre toulon et le Canada , 7 288 km",
          photo :"https://images.salaun-holidays.com/(Image)-image-Canada-Alberta-Lac-Louise-96-fo_41183537-09032017.jpg"
},
  {
          destination :"La Guadeloupe",
          country :"La superficie de la Guadeloupe est de 1 628 km²",
          distance :"distance entre toulon et la Guadeloupe , 6 959 km",
          photo :"http://3.bp.blogspot.com/-69Sq2iSRQis/U8bhQvuO3TI/AAAAAAAAAxo/pCowF_AVuy4/s1600/plage.jpg"
},
  {    
          destination :"Les états unis",
          country :"La superficie des états unis est de 9,834 millions de km²",
          distance :"distance entre toulon et les états unis ,8 096 km",
          photo :"https://www.esta-formulaire.us/wp-content/uploads/2017/03/news4.jpg"


}
];

const Travelss = () => (
  <div>
    {travel.map(destination => (
      <Quote {...destination} />
    ))}
  </div>
);

export default Travelss;