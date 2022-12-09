import './jobs.scss';
import './header.scss';
import { useState, useEffect } from 'react';
// import Iframe from 'react-iframe';
const choices = ["餐飲臨售業", "科技業", "時薪", "月薪", "台北", "桃園", "新竹", "台中", "台南", "高雄"];
const food = ["儲備幹部", "銷售", "內場", "外場", "人資"];
const tech = ["軟體工程師","研發工程師","研發技術員","製成工程師","殷備工程師","接案工程師","分析工程師","設計工程師","封装工程師","助理工程師","客服工程師",
    "業務人員","技術工程師","測試工程師","行政人員","生產技術員","技術操作員","焊錫技術員","品保工程師","品保人員","品管包装員",];
function JobsPage () {

    const [choosed, setChoosed] = useState([false, false, false, false, false, false, false, false, false, false]);
    const [foodc, setFoodc] = useState([false, false, false, false, false]);
    const [techc, setTechc] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, 
        false, false, false, false, false, false]);
    const [filter, setFilter] = useState([]);

    const [joblist, setJoblist] = useState([
        {name: "圖控/PLC 工程師", require: "大學以上, 電機電子相關", "num": 12, 
        company: "宇辰系統科技股份有限公司", place: "新竹/台中/台南", salary: "月薪 32k~50k"},
        {name: "建造工程師", require: "經歷不拘", "num": 16, 
        company: "銳澤實業股份有限公司", place: "林口、新竹、台中、台南、高雄", salary: "月薪 38k以上"},
        {name: "軟體工程師", require: "大學以上, 理工科系佳", "num": 11, 
        company: "佳能半導體設備股份有限公司", place: "台中市大雅區", salary: "月薪 45k以上"},
        {name: "XXX 工程師", require: "大學以上, 電機電子相關", "num": 17, 
        company: "XXX股份有限公司", place: "XXXXXX", salary: "XXXXXX"},
    ])
    const [save, setSave] = useState([false, true, true, false])

    useEffect(() => {
        if (localStorage.getItem("choosed")) setChoosed(JSON.parse(localStorage.getItem("choosed")));
        if (localStorage.getItem("foodc")) setFoodc(JSON.parse(localStorage.getItem("foodc")));
        if (localStorage.getItem("techc")) setTechc(JSON.parse(localStorage.getItem("techc")));
    }, []);

    useEffect(() => {
        let newArr = [];
        var i;
        for (i=0; i<choosed.length; i++) {
            if (choosed[i]) newArr.push(choices[i]);
        }
        for (i=0; i<foodc.length; i++) {
            if (foodc[i]) newArr.push(food[i]);
        }
        for(i=0; i<techc.length; i++) {
            if (techc[i]) newArr.push(tech[i]);
        }
        // // console.log("?")
        setFilter(newArr);
    }, [setFilter, choosed, foodc, techc]);
    // }, []);

    const deleteFilter = (idx) => {
        console.log("Delete" + String(filter[idx]));
        let newArr = [...filter];
        newArr.splice(idx, 1); // 1 item from idx
        setFilter(newArr);
        // only set local storage when go to other pages
    };

    return (
        <div className="Jobs">
            <div className="header">
                <img src={require("../images/職人交響曲.png")} alt="職人交響曲"></img>
                <div className="title">
                    2022 新竹地區科技業無紙化徵才活動
                </div>
            </div>
            {/* <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14484.80482740578!2d121.02204164999999!3d24.82279185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346836f36414de07%3A0x805110a3b614b263!2z5Lqe5bC85YWLIOaWsOerueerueWMl-W6lw!5e0!3m2!1szh-TW!2stw!4v1670609998146!5m2!1szh-TW!2stw" 
            width="600" height="450"/> */}
            <div className="body">
                <div className="back" onClick={() => {
                    window.location.href = "./filter";
                }}>←重新篩選職缺</div>
                <div className="filters">
                    {filter.map((f, idx)=> (
                        <div className='f' key={idx} >
                            <div className='x' onClick={() => {deleteFilter(idx)}}>X</div>
                            {f}
                        </div>
                    ))}
                </div>
                <div className="jobs">
                    {joblist.map((j, idx) => (
                        <div className="j" key={idx}>
                            <div className='jc'>
                                <div className="name">{j.name}</div>
                                <div className="req">{j.require}</div>
                            </div>
                            <div className='jc'>
                                <div className="num">{j.num}</div>
                                <div className="comp">{j.company}</div>
                            </div> 
                            <div className='jc'>
                                <div className='pla'>{j.place}</div>
                                <div className='sal'>{j.salary}</div>
                            </div> 
                            {save[idx]?
                                <div className='save y'>SAVE</div> :
                                <div className='save'>NOT</div>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobsPage;