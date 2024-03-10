import { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { DayPicker } from 'react-day-picker';
import { ko } from 'date-fns/locale';
import './scss/ProductWrtie.scss';
import {useDispatch, useSelector} from "react-redux";
import {toggleButton} from "../features/buttonVisibility.ts";

function ProjectWrite () {

    const [languages, setLanguages] = useState([]);
    const [process, setProcess] = useState([]);
    const [stack, setStack] = useState([]);
    const [position, setPosition] = useState([]);

    const buttonState = useSelector((state: any) => state.buttonStatus.value);
    const buttonDispatch = useDispatch();

    const countStatus = []
    const periodStatus = [];
    const [remainingPeriodStatus, setRemainingPeriodStatus] = useState<Date>();

    const year = remainingPeriodStatus?.getFullYear();
    const month = remainingPeriodStatus ? remainingPeriodStatus?.getMonth() + 1 : 0;
    const day = remainingPeriodStatus?.getDate();

    const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

    for (let i = 1; i <= 10; i++) {
        countStatus.push(i)
        periodStatus.push(i + "개월")
    }

    const [, setSelectProject] = useState(languages[0]);

    const setSelectOption = (selectedOption: any) => {
        setSelectProject(selectedOption);
    }

    useEffect(() => {
        axios.get('http://localhost:8081/fetchData')
            .then(response => {
                setLanguages(response.data.study);
                setProcess(response.data.process);
                setStack(response.data.project);
                setPosition(response.data.position);

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
                    onClick={() => buttonDispatch(toggleButton())}>
                    { buttonState === false ? (
                        "마감 날짜 열기"
                    ) : "마감 날짜 닫기"}
                </button>

            </div>

            <p id="product-recruitment-date-format">
                { formattedDate === "undefined-00-undefined" ? (
                    <p>
                        날짜를 선택해 주세요!
                    </p>
                ) : (
                    <div>
                        { formattedDate }
                    </div>
                )}
            </p>

            { buttonState && (
                <DayPicker
                    id="product-recruitment-datepicker"
                    mode="single"
                    locale={ko}
                    selected={remainingPeriodStatus}
                    onSelect={setRemainingPeriodStatus}
                />
            )}

            <div id="product-recruitment-group-four">
                <Select
                    id="product-position-select"
                    options={position.map((value) => ({ value: value, label :value }))}
                    onChange={setSelectOption}
                    placeholder={"Frontend? Backend? .."}
                />

                <div>
                    <input 
                        id="product-communication-input"
                        placeholder="연락 방법을 입력해주세요. ex) 카카오톡 오픈 채팅방"
                    />
                </div>

            </div>

            <button
                id="product-write-button">
                    프로젝트 모집 등록
            </button>

            <button
                id="product-cancel-button">
                프로젝트 모집 취소
            </button>

        </div>
    );
}

export default ProjectWrite;