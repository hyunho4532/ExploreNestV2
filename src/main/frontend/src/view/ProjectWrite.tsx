import { useState, useEffect } from 'react';
import axios from 'axios';
import '../@model/Language'
import '../@api/response/ApiResponse'

function ProjectWrite() {

    const [languages, setLanguages] = useState<Language[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/fetchData')
            .then(response => {
                setLanguages(response.data.language);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    return (
        <div>
            <h5>Languages:</h5>
            <ul>
                {languages.map(language => (
                    <li key={language.id}>{language.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectWrite;