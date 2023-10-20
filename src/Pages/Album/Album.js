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

        </div>
    );
}

export default Album;

