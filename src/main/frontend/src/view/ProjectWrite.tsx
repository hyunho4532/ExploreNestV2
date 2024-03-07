import { useState, useEffect } from 'react';
import axios from 'axios';
import '../@model/Language'
import '../@api/response/ApiResponse'
import './scss/ProductWrtie.scss'
import Select from "react-select";
import {s} from "vite/dist/node/types.d-AKzkD8vd";

function ProjectWrite() {

    const [languages, setLanguages] = useState([]);
    const [languagesFromData, setLanguagesFromData] = useState('');

    const projectStatus = [
        { value: "프로젝트", label: "프로젝트" },
        { value: "스터디", label: "스터디" },
        { value: "프로젝트/스터디", label: "프로젝트/스터디" },
    ]

    const [selectProject, setSelectProject] = useState(projectStatus[0]);

    const setSelectOption = (selectedOption: any) => {
        setSelectProject(selectedOption);
    }

    useEffect(() => {
        axios.get('http://localhost:8080/fetchData')
            .then(response => {
                setLanguages(response.data.study);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    return (
        <div>
            <h2 id="product-recruitment-title">프로젝트 모집을 원하시나요? 😎😎</h2>

            <div id="product-recruitment-group">

                <Select
                    id="product-recruitment-select"
                    options={languages.map((value, index) => ({ value: value, label: value }))}
                    onChange={setSelectOption}
                    placeholder={"프로젝트 진행 방식을 선택해주세요!"}
                />

                <Select
                    id="product-count-select"
                    options={projectStatus}
                    onChange={setSelectOption}
                    placeholder={"프로젝트 모집 인원을 선택해주세요!"}
                />
            </div>
        </div>
    );
}

export default ProjectWrite;