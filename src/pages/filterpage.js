import './filter.css';
import './header.css';
function Filterpage () {
    let choices = ["餐飲臨售業", "科技業", "時薪", "月薪", "台北", "桃園", "新竹", "台中", "台南", "高雄"];
    let choosed = {
        "餐飲臨售業": 0,
        "科技業": 0,
        "時薪": 0,
        "月薪": 0,
        "台北": 0,
        "桃園": 0,
        "新竹": 0,
        "台中": 0,
        "台南": 0,
        "高雄": 0
    };

    return (
        <div className="Filter">
            <div className="header">
                <img src={require("../images/職人交響曲.png")} alt="職人交響曲"></img>
                <div className="title">2022 新竹地區科技業無紙化徵才活動</div>
            </div>
            <div className="body">
                <div className="bodyheader">工作篩選</div>
                <div className="choices">
                    <div className="title">行業類別</div>
                    {choosed[choices[0]] ? <div className="ch y">{choices[0]}</div> : <div className="ch">{choices[0]}</div>}
                    <div className="ch">{choices[1]}</div>
                </div>
                <div className="choices">
                    <div className="title">薪資分類</div>
                    <div className="ch">{choices[2]}</div>
                    <div className="ch">{choices[3]}</div>
                </div>
                <div className="choices">
                    <div className="title">工作地區</div>
                    <div className="ch">{choices[4]}</div>
                    <div className="ch">{choices[5]}</div>
                    <div className="ch">{choices[6]}</div>
                    <div className="ch">{choices[7]}</div>
                    <div className="ch">{choices[8]}</div>
                    <div className="ch">{choices[9]}</div>
                </div>
            </div>
        </div>
    );
};

export default Filterpage;