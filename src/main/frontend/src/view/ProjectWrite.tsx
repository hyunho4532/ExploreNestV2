import { useState, useEffect } from 'react';
import axios from 'axios';
import '../@model/Language'
import '../@api/response/ApiResponse'
import './scss/ProductWrtie.scss'
import Select from "react-select";
import {DayPicker} from "react-day-picker";
import {ko} from "date-fns/locale";
import buttonVisibility from "../util/visibility/Button.tsx";

function ProjectWrite() {

    const [languages, setLanguages] = useState([]);
    const [process, setProcess] = useState([]);
    const [stack, setStack] = useState([]);

    const countStatus = []
    const periodStatus = [];

    for (let i = 1; i <= 10; i++) {
        countStatus.push(i)
        periodStatus.push(i + "개월")
    }

    const [selectProject, setSelectProject] = useState(languages[0]);

    console.log(selectProject);

    const setSelectOption = (selectedOption: any) => {
        setSelectProject(selectedOption);
    }

    useEffect(() => {
        axios.get('http://localhost:8081/fetchData')
            .then(response => {
                setLanguages(response.data.study);
                setProcess(response.data.process);
                setStack(response.data.project);

            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div id="product-recruitment-main">

            <h2 id="product-recruitment-title-first">1. 프로젝트 어떤 식으로 진행 하나요? 😎😎</h2>

            <div id="product-recruitment-group-first">

                <Select
                    id="product-recruitment-select"
                    options={languages.map((value) => ({ value: value, label: value }))}
                    onChange={setSelectOption}
                    placeholder={"프로젝트 어떤 식으로 진행하나요?"}
                />

                <Select
                    id="product-count-select"
                    options={countStatus.map((value) => ({ value: value, label :value }))}
                    onChange={setSelectOption}
                    placeholder={"프로젝트 모집 인원을 선택해 주세요!"}
                />
            </div>

            <h2 id="product-recruitment-title-second">2. 프로젝트 진행 방식과 기간은 언제로 설정할까요? 🤔🤔</h2>

            <div id="product-recruitment-group-second">
                <Select
                    id="product-process-select"
                    options={process.map((value) => ({ value: value, label :value }))}
                    onChange={setSelectOption}
                    placeholder={"프로젝트 진행 방식을 선택해 주세요!"}
                />

                <Select
                    id="product-period-select"
                    options={periodStatus.map((value) => ({ value: value, label :value }))}
                    onChange={setSelectOption}
                    placeholder={"프로젝트 진행 방식을 선택해 주세요!"}
                />
            </div>

            <h2 id="product-recruitment-title-third">3. 프로젝트 기술 스택과 마감 기간을 선택해주세요! 😏😏</h2>

            <div id="product-recruitment-group-third">
                <Select
                    id="product-stack-select"
                    options={stack.map((value) => ({ value: value, label :value }))}
                    onChange={setSelectOption}
                    placeholder={"프로젝트 기술 스택을 선택해 주세요!"}
                />

                <button
                    id="product-recruitment-button"
                    onClick={buttonVisibility}>
                    마감 기간 선택하기
                </button>

            </div>

            <DayPicker
                id="product-recruitment-datepicker"
                mode="single"
                locale={ko}
            />
        </div>
    );
}

export default ProjectWrite;