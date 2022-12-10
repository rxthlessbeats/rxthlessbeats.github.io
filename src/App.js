import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';

import Home from './pages/home';
import Filter from './pages/filter';
import Jobs from './pages/3/jobs';
import Job from './pages/3/job';
import Company from './pages/3/company';

function App() {
    return (
        <BrowserRouter>
        {/* <HashRouter> */}
            <Routes>   
                <Route exact path="/Job-Searching-Web/" element={<Home/>} />
                <Route exact path="/Job-Searching-Web/filter" element={<Filter/>} />
                <Route exact path="/Job-Searching-Web/jobs" element={<Jobs/>}/>
                <Route exact path="/Job-Searching-Web/job/:jobID" element={<Job/>}/>
                <Route exact path="/Job-Searching-Web/company/:compID" element={<Company/>}/>   
            </Routes>
        {/* </HashRouter> */}
        </BrowserRouter>
    );
}

export default App;
