import { useState, useEffect } from 'react';
import { getAllStarships } from '../services/sw-api.js'
import './StarShipCard.css';

function StarShipCard () {

    const [starShips, setStarShips] = useState([]);  
    
    const handleClick = async (event) => {
        event.preventDefault()

    }


            useEffect(()=> {
                getAllStarships().then((res) => {
                    setStarShips(res);
                    console.log(res)
                    console.log('running...')
                })
                
            },[])
    

    return (
        <div >
            <h1>Star Wars Starships</h1>
           <ul>
                {(starShips).map((starShip, index) => {
                    const  { name, crew, url } = starShip;
                    return <li onClick = {(e) => handleClick(e)} key= {index}><a href={url}></a><strong>{name}</strong></li>
                })}
            </ul>
            {/* <img src='https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200' alt='Star Wars'/> */}
        </div>
    )
}

export default StarShipCard;



            