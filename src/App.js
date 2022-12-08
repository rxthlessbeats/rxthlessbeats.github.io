import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home'
import FilterPage from './pages/filterpage'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/filterpage" element={<FilterPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
