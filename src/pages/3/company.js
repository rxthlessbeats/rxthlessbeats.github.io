import './company.scss';
import Header from '../global/header';
import { useParams } from "react-router-dom";

function HomePage () {
    const {compID} = useParams();
    return (
        <div className="Home" onClick={() => {window.location.href='/filter'}}>
            <Header/>
            {compID} {/* 哪間公司 */}
            <div className="body">
                聯絡人:

            </div>
        </div>
    );
};

const companylist = [
    {name: "佳能半導體設備股份有限公司", 
    contact: "聯絡人：張先生\n連絡電話：0919972389\nEmail：Chang.chengho@...",

    }
]

export default HomePage;