import React from 'react';

import { Navbar } from './parts/Navbar/Navbar';
import { AboutUs } from './parts/AboutUs/AboutUs';

import "./MainFrame.scss";



type Props = {
    children: string | JSX.Element | JSX.Element[];
}



export const MainFrame = ( { children } : Props ) => {
    return <div className='app-container '>
        <Navbar></Navbar>
        <AboutUs></AboutUs>
        { children }
    </div>
}
