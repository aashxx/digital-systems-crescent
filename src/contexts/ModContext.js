import React, { createContext, useState } from 'react';
import csvToJson from 'csvtojson';
import axios from 'axios';

export const ModContext = createContext();

const ModState = (props) => {

    const [materials, setMaterials] = useState([]);
    const [load, setLoad] = useState(true);

    const fetchData = async (db) => {
        try {
            const response = await axios.get(db);
            setLoad(true);
            const jsonArray = await csvToJson().fromString(response.data);
            setMaterials(jsonArray);
            setLoad(false);
        } catch (error) {
            console.error(error);
        }
    };
    

    return (
        <ModContext.Provider value={{materials, load, fetchData}}>
            {props.children}
        </ModContext.Provider>
    )
}

export default ModState;
