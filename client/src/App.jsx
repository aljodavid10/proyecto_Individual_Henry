import { useState } from 'react';
import './App.css'
import { Routes } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import Home from './components/home/Home';
import Cards from './components/cards/Cards';
import Detail from './components/detail/Details';
import Form from './components/form/Form';

function App() {
  return (
    <div className='App'>
        <Routes>
            <Route path="/" element={<LandingPage/>}/> 
            <Route path="/home" element={<Home/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/form" element={<Form/>}/>
        </Routes>
    </div>
  );
}

export default App
