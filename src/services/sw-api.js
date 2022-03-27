import axios from 'axios';
const end_point = 'starships/'
const CLIENT_URL = 'https://swapi.dev/api/'


export const getAllStarships = async() => {
    try {
        const response = await axios.get(`${CLIENT_URL}${end_point}`);
        // console.log(response);
        const result = [];
        result.push(response.data.results);
        // console.log(res)
        return result;      
        }catch(error) {
        console.log(error);
        
    }
    
    }
    
    getAllStarships()