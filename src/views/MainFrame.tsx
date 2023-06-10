import React from 'react';

import { Navbar } from './parts/Navbar/Navbar';
import { AboutUs } from './parts/AboutUs/AboutUs';

import "./MainFrame.scss";
import { OurMethods } from './parts/OurMethods/OurMethods';
import { ContactUs } from './parts/ContactUs/ContactUs';
import { SignUp } from './parts/SignUp/SignUp';
import { OurLectors } from './parts/OurLectors/OurLectors';



type Props = {
    children: string | JSX.Element | JSX.Element[];
}



export const MainFrame = ( { children } : Props ) => {
    return <main className='app-container '>
        <Navbar></Navbar>
        <AboutUs></AboutUs>
        <OurMethods></OurMethods>
        <OurLectors></OurLectors>
        <SignUp></SignUp>
        <ContactUs></ContactUs>
        { children }
    </main>
}
