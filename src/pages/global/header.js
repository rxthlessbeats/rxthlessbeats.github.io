import './header.scss';

function HeaderPage () {
    return (
        <div className="header">
            <img src={require("../../images/職人交響曲.png")} alt="職人交響曲"></img>
            <div className="title">
                2022 新竹地區科技業無紙化徵才活動
            </div>
        </div>
    );
};
export default HeaderPage;