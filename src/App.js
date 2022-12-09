import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import Filter from './pages/filter';
import Jobs from './pages/jobs';

function App() {
    return (
        <div className="App">
            {/* <BrowserRouter> */}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/filter" element={<Filter/>} />
                <Route path="/jobs" element={<Jobs/>}/>
            </Routes>
            {/* </BrowserRouter> */}
        </div>
    );
}

export default App;
