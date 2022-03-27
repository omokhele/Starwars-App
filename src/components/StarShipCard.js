import { useState, useEffect } from 'react';
import { getAllStarships } from '../services/sw-api.js'

function StarShipCard () {

    const [starShips, setStarShips] = useState([]);

    useEffect(()=> {
        getAllStarships()
        console.log('running...' + getAllStarships())
    },[])

    setStarShips(getAllStarships())

    return (
        <div>
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