import './filter.scss';
import Header from './global/header';
import { useState, useEffect } from 'react';

const choices = ["餐飲零售業", "科技業", "時薪", "月薪", "台北", "新北", "桃園", "新竹", "台中", "台南", "高雄"];
const food = ["儲備幹部", "銷售", "內場", "外場", "人資", "其他"];
const tech = ["軟體工程師","研發工程師","研發技術員","製程工程師","設備工程師","接案工程師","分析工程師","設計工程師","封裝工程師","助理工程師","客服工程師",
    "業務人員","技術工程師","測試工程師","行政人員","生產技術員","技術操作員","儲備幹部","品保工程師","品保人員","其他"];
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

    const fchoose = (idx) => {
        let newArr = [...foodc];
        newArr[idx] = !newArr[idx];
        setFoodc(newArr);
        if(newArr[idx] && !choosed[0]) { // choose
            let newArr2 = [...choosed];
            newArr2[0] = true;
            setChoosed(newArr2);
        } else if (!newArr[idx]) { // unchoose
            for(let i=0; i<newArr.length; i++) {
                if (newArr[i]) return;
            }
            let newArr2 = [...choosed];
            newArr2[0] = false;
            setChoosed(newArr2);
        }
    };
    const fchooseALL = () => {
        let canBeTrue = false;
        for (let i=0; i<foodc.length; i++) {
            if (!foodc[i]) {
                canBeTrue = true;
                break;
            }
        }
        if (canBeTrue) {
            let newArr = new Array(foodc.length).fill(true);
            setFoodc(newArr);
            let newArr2 = [...choosed];
            newArr2[0] = true;
            setChoosed(newArr2);
        } else {
            let newArr = new Array(foodc.length).fill(false);
            setFoodc(newArr);
            let newArr2 = [...choosed];
            newArr2[0] = false;
            setChoosed(newArr2);
        }
    }
    const tchoose = (idx) => {
        let newArr = [...techc];
        newArr[idx] = !newArr[idx];
        setTechc(newArr);
        if(newArr[idx] && !choosed[1]) { // choose
            let newArr2 = [...choosed];
            newArr2[1] = true;
            setChoosed(newArr2);
        } else if (!newArr[idx]) { // unchoose
            for(let i=0; i<newArr.length; i++) {
                if (newArr[i]) return;
            }
            let newArr2 = [...choosed];
            newArr2[1] = false;
            setChoosed(newArr2);
        }
    };
    const tchooseALL = () => {
        let canBeTrue = false;
        for (let i=0; i<techc.length; i++) {
            if (!techc[i]) {
                canBeTrue = true;
                break;
            }
        }
        if (canBeTrue) {
            let newArr = new Array(techc.length).fill(true);
            setTechc(newArr);
            let newArr2 = [...choosed];
            newArr2[1] = true;
            setChoosed(newArr2);
        } else {
            let newArr = new Array(techc.length).fill(false);
            setTechc(newArr);
            let newArr2 = [...choosed];
            newArr2[1] = false;
            setChoosed(newArr2);
        }
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
                                    <div className="ch y" onClick={() => {fchooseALL();}}>
                                        {choices[0]}
                                        <div className="down-line"></div>
                                    </div> : 
                                    <div className="ch" onClick={() => {fchooseALL();}}>
                                        {choices[0]}
                                        <div className="down-line"></div>
                                    </div>}
                                    {choosed[1]? 
                                    <div className="ch y" onClick={() => {tchooseALL();}}>
                                        {choices[1]}
                                        <div className="right-line"></div>
                                    </div> : 
                                    <div className="ch" onClick={() => {tchooseALL();}}>
                                        {choices[1]}
                                        <div className="right-line"></div>
                                    </div>}
                                </div>
                            </div>
                            <div className="more food">
                                {food.map((f, idx) => (
                                    (foodc[idx])?
                                    <div className="choice f y" onClick={() => {fchoose(idx)}}>{f}</div> :
                                    <div className="choice f" onClick={() => {fchoose(idx)}}>{f}</div>
                                ))}
                            </div>
                            <div className="more tech">
                                {tech.map((t, idx) => (
                                    (techc[idx]? 
                                    <div className="choice t y" onClick={() => {tchoose(idx)}}>{t}</div> :
                                    <div className="choice t" onClick={() => {tchoose(idx)}}>{t}</div>)
                                ))}
                            </div>
                        </div>
                        <div className="cancel" onClick={() => {
                                setMorejob(false);
                        }}>下一步</div>
                    </div>
                    :
                    <div className="allcat">
                        <div className="category job">
                            <div className="title">行業類別</div>
                            <div className="choices" onClick={() => {
                                    setMorejob(true);
                                }}>
                                {choosed[0]? 
                                <div className="ch y">
                                    {choices[0]}
                                </div> : 
                                <div className="ch">{choices[0]}</div>}
                                {choosed[1]? 
                                <div className="ch y">
                                    {choices[1]}
                                </div> : 
                                <div className="ch">{choices[1]}</div>}
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
                                    (idx >= 4 && idx <= 10)? 
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