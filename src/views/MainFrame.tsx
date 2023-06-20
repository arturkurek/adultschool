import { Navbar } from './parts/Navbar/Navbar';
import { AboutUs } from './parts/AboutUs/AboutUs';

import "./MainFrame.scss";
import { OurMethods } from './parts/OurMethods/OurMethods';
import { ContactUs } from './parts/ContactUs/ContactUs';
import { SignUp } from './parts/SignUp/SignUp';
import { OurLectors } from './parts/OurLectors/OurLectors';
import { OurOffer } from './parts/OurOffer/OurOffer';


// type Props = {
//     children: string | JSX.Element | JSX.Element[];
// }


export const MainFrame = () => {
    return <main className='app-container '>
        <Navbar></Navbar>
        <AboutUs></AboutUs>
        <OurMethods></OurMethods>
        <OurLectors></OurLectors>
        <OurOffer></OurOffer>
        <SignUp></SignUp>
        <ContactUs></ContactUs>
    </main>
}
