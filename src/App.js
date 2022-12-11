import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import Filter from './pages/filter';
import Jobs from './pages/3/jobs';
import Job from './pages/3/job';
import Company from './pages/3/company';

function App() {
    return (
        <BrowserRouter>
            <Routes>   
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/filter" element={<Filter/>} />
                <Route exact path="/jobs" element={<Jobs/>}/>
                <Route exact path="/job/:jobID" element={<Job/>}/>
                <Route exact path="/company/:compID" element={<Company/>}/>   
            </Routes>
        </BrowserRouter>
    );
}

export default App;
