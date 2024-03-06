import { useState, useEffect } from 'react';
import axios from 'axios';
import '../@model/Language'
import '../@api/response/ApiResponse'

function ProjectWrite() {

    const [languages, setLanguages] = useState([]);
    const [languagesFromData, setLanguagesFromData] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/fetchData')
            .then(response => {
                setLanguages(response.data);

                console.log(response.data);

            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    return (
        <div>
            <h5>Languages:</h5>
            { languages.map((value, index) => <li key={index}>{value}</li>)}
        </div>
    );
}

export default ProjectWrite;