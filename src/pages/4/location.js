import './location.scss';
import Header from '../global/header';

function LocationPage () {
    return (
        <div className="location">
            <Header/>
            <div className='bg-color'>
                <div className='map'>
                    <div className='map-title'>
                        <div className='map-title1'>廠商位置圖</div>
                        <div className='map-title2'>歡迎根據位置圖去找公司諮詢</div>
                    </div>
                </div>
                <div className='save-all'></div>
            </div>
        </div>
    );
};

export default LocationPage;
