import './home.scss';
import Header from './global/header';
function HomePage () {
    return (
        <div className="Home" onClick={() => {window.location.href='/Job-Searching-Web/filter'}}>
            <Header/>
            <div className="content">
                <img className="pic" src={require("../images/勞工處網站封面.png")} alt="勞工處網站封面"></img>
            </div>
        </div>
    );
};

export default HomePage;