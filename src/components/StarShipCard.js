import { useState, useEffect } from 'react';
import { getAllStarships } from '../services/sw-api.js'

function StarShipCard () {

    const [starShips, setStarShips] = useState([]);

    

    
    useEffect(()=> {
        getAllStarships()
        console.log(getAllStarships())
        console.log('running...')
    },[])
    
    // setStarShips(getAllStarships())
    

    return (
        <div>
            <h1> Howdy, Partner!</h1>
            <ul>
                {(starShips || []).map((starShip, index) => {
                    const  { name } = starShip
                    return <li>name = {name} key={index}</li>
                })}
            </ul>
        </div>
    )
}

export default StarShipCard;