import React from 'react';
import {Routes,Route} from "react-router-dom"
import { Home } from '../Pages/Home';
import { About } from './../Pages/About';
import { Contect } from './../Pages/Contect';
import { Project } from './../Pages/Project';
import {Resume }from "./../Pages/Resume"
import {Skills} from "./../Pages/Skills"

const MainRouts = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contect/>}></Route>
            <Route path="/project" element={<Project/>}></Route>
            <Route path="/" element={<Resume/>}></Route>
            <Route path="/skills" element={<Skills/>}></Route>
            
        </Routes>
    );
};

export default MainRouts;