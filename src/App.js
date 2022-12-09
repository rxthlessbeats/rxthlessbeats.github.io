import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';

import Home from './pages/home';
import Filter from './pages/filter';
import Jobs from './pages/jobs';

function App() {
    return (
        <BrowserRouter>
        {/* <HashRouter> */}
            <Routes>   
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/filter" element={<Filter/>} />
                <Route exact path="/jobs" element={<Jobs/>}/>  
            </Routes>
        {/* </HashRouter> */}
        </BrowserRouter>
    );
}

export default App;
