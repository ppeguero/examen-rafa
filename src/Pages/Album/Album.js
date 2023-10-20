import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Album = () => {

    const API = 'https://perenual.com/api/species-list?key=sk-xWzT65328798683312571';

	const [plants, setPlants] = useState([]);

        const getData = async () => {
            const response = await axios(API)
            setPlants(response.data.data);
            console.log(response.data.data);

        };

        useEffect(()=>{
            getData()
        }, [])

    return (
        <div>
<<<<<<< HEAD
            <h1>Hola Misael</h1>
=======

            
>>>>>>> 029a6e359df09c92424c33d115d5f770e8a59dfc
        </div>
    );
}

export default Album;
