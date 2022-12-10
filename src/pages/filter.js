import './filter.scss';
import Header from './global/header';
import { useState, useEffect } from 'react';
const choices = ["餐飲零售業", "科技業", "時薪", "月薪", "台北", "桃園", "新竹", "台中", "台南", "高雄"];
const food = ["儲備幹部", "銷售", "內場", "外場", "人資"];
const tech = ["軟體工程師","研發工程師","研發技術員","製成工程師","殷備工程師","接案工程師","分析工程師","設計工程師","封装工程師","助理工程師","客服工程師",
    "業務人員","技術工程師","測試工程師","行政人員","生產技術員","技術操作員","焊錫技術員","品保工程師","品保人員","品管包装員",];
function FilterPage () {
    const [choosed, setChoosed] = useState([false, false, false, false, false, false, false, false, false, false]);
    const [morejob, setMorejob] = useState(false);
    const [foodc, setFoodc] = useState([false, false, false, false, false]);
    const [techc, setTechc] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, 
        false, false, false, false, false, false]);

    useEffect(() => {
        if (localStorage.getItem("choosed")) setChoosed(JSON.parse(localStorage.getItem("choosed")));
        if (localStorage.getItem("foodc")) setFoodc(JSON.parse(localStorage.getItem("foodc")));
        if (localStorage.getItem("techc")) setTechc(JSON.parse(localStorage.getItem("techc")));
    }, []);

    const choose = (idx) => {
        let newArr = [...choosed];
        newArr[idx] = !newArr[idx];
        setChoosed(newArr);
    };

    // const fchoose = (idx) => {
    //     let newArr = [...foodc];
    //     newArr[idx] = !newArr[idx];
    //     setFoodc(newArr);
    // };
    const fchooseALL = () => {
        let newArr = new Array(foodc.length).fill(true);
        setFoodc(newArr);
    }
    // const tchoose = (idx) => {
    //     let newArr = [...techc];
    //     newArr[idx] = !newArr[idx];
    //     setTechc(newArr);
    // };
    const tchooseALL = () => {
        let newArr = new Array(techc.length).fill(true);
        setTechc(newArr);
    }

    const expand = (id) => {
        let newArr = [...choosed];
        if (id === 0) { // food 
            newArr[0] = !newArr[0];
            if (newArr[1]) newArr[1] = 0; // disable tech
            fchooseALL();
            let newArr2 = new Array(techc.length).fill(false);
            setTechc(newArr2);
        } else { // tech
            newArr[1] = !newArr[1];
            if (newArr[0]) newArr[0] = 0; // disable food
            tchooseALL();
            let newArr2 = new Array(foodc.length).fill(false);
            setFoodc(newArr2);
        }
        setChoosed(newArr);
        setMorejob(true);
    }

    const save_filter = () => {
        localStorage.setItem("choosed", JSON.stringify(choosed));
        localStorage.setItem("foodc", JSON.stringify(foodc));
        localStorage.setItem("techc", JSON.stringify(techc));
    }

    return (
        <div className="Filter">
            <Header/>
            <div className="body">
                <div className="bodyheader">工作篩選</div>
                {morejob === true?
                    <div className="morejob">
                        <div className="job-con">
                            <div className="category">
                                <div className="title">行業類別</div>
                                <div className="choices">
                                    {choosed[0]? 
                                    <div className="ch y">
                                        {choices[0]}
                                        <div className="down-line"></div>
                                    </div> : 
                                    <div className="ch" onClick={() => {
                                        expand(0);
                                    }}>
                                        {choices[0]}
                                        <div className="down-line"></div>
                                    </div>}
                                    {choosed[1]? 
                                    <div className="ch y">
                                        {choices[1]}
                                        <div className="right-line"></div>
                                    </div> : 
                                    <div className="ch" onClick={() => {
                                        expand(1);
                                    }}>
                                        {choices[1]}
                                        <div className="right-line"></div>
                                    </div>}
                                </div>
                            </div>
                            <div className="more food">
                                {food.map((f, idx) => (
                                    (foodc[idx])?
                                    <div className="choice f y">{f}</div> :
                                    <div className="choice f">{f}</div>
                                ))}
                            </div>
                            <div className="more tech">
                                {tech.map((t, idx) => (
                                    (techc[idx]? 
                                    <div className="choice t y">{t}</div> :
                                    <div className="choice t">{t}</div>)
                                ))}
                            </div>
                            <div className="cancel" onClick={() => {
                                setMorejob(false);
                                let newArr = [...choosed];
                                newArr[0] = false;
                                newArr[1] = false;
                                setChoosed(newArr);
                            }}>V</div>
                        </div>
                    </div>
                    :
                    <div className="allcat">
                        <div className="category job">
                            <div className="title">行業類別</div>
                            <div className="choices">
                                {choosed[0]? 
                                <div className="ch y">
                                    {choices[0]}
                                </div> : 
                                <div className="ch" onClick={() => {
                                    expand(0);
                                }}>{choices[0]}</div>}

                                {choosed[1]? 
                                <div className="ch y">
                                    {choices[1]}
                                </div> : 
                                <div className="ch" onClick={() => {
                                    expand(1);
                                }}>{choices[1]}</div>}
                            </div>
                        </div>
                        <div className="category wage">
                            <div className="title">薪資分類</div>
                            <div className="choices">
                                {choices.map((c, idx) => (
                                    (idx === 2 || idx === 3)? 
                                    <>{choosed[idx]? 
                                    <div className="ch y" onClick={() => {choose(idx)}}>{c}</div> : 
                                    <div className="ch" onClick={() => {choose(idx)}}>{c}</div>}</>
                                    :
                                    <></>
                                ))}
                            </div>
                        </div>
                        <div className="category place">
                            <div className="title">工作地區</div>
                            <div className='choices'>
                                {choices.map((c, idx) => (
                                    (idx >= 4 && idx <= 9)? 
                                    <>{choosed[idx]? 
                                    <div className="ch y" onClick={() => {choose(idx)}}>{c}</div> : 
                                    <div className="ch" onClick={() => {choose(idx)}}>{c}</div>}</>
                                    :
                                    <></>
                                ))}
                            </div>
                        </div>
                        <div className="continue" onClick={() => {
                            save_filter();
                            window.location.href="/jobs";
                        }}>繼續</div>
                    </div>
                }
            </div>
        </div>
    );
};

export default FilterPage;