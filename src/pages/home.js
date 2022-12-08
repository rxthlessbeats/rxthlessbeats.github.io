import './home.css';
import './header.css';
function Homepage () {
    return (
        <div className="Home">
            <div className="header">
                <img src={require("../images/職人交響曲.png")} alt="職人交響曲"></img>
                <div className="title">
                    2022 新竹地區科技業無紙化徵才活動
                </div>
            </div>
            <div className="content">
                <img className="pic" src={require("../images/勞工處網站封面.png")} alt="勞工處網站封面"></img>
                <img className='btn' 
                    onClick={() => {window.location.href = '/filterpage'}} 
                    src={require("../images/尋找工作按鈕.png")} 
                    alt="start">
                </img>
            </div>
        </div>
    );
};

export default Homepage;