import { 
    // useState, 
    useEffect 
} from 'react';
import './Navbar.scss';


// interface NavbarState {
//     opened: boolean;
// }


export const Navbar = () => {

    // const [ state, setState ] = useState<NavbarState>({
    //     opened: false
    // });

    const closeNav = () => {
        const nav = document.getElementById("myNav");
        if (nav) {
            nav.style.width = "0%";
        }
        // document.getElementById("myNav").style.width = "0%";
    }

    const openNav = () => {
        // document.getElementById("myNav").style.width = "100%";
        const nav = document.getElementById("myNav");
        if (nav) {
            nav.style.width = "100%";
        }
    }

    const homeLink = () => {
        window.location.href = window.location.href.split('#')[0];
    }

    const stickyHeader = () => {
        const navbar = document.getElementById("navbar");
        if (navbar ) {
            const sticky = navbar.offsetTop + 96;
            
            if (window.pageYOffset > sticky) {
                navbar.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky");
            }
        }
    }

    useEffect( () => {
        window.addEventListener('scroll', () => stickyHeader() );
        return window.removeEventListener('scroll', stickyHeader);
    }, []);

    return <section className="container-full navbar" id="navbar">
        <div className='container'>
            <nav className="navbar-container" data-testid="navbar-test-id">
                <div className="logo" onClick={ homeLink }>
                    <img src="/static/images/Logo_adult.png" alt="logo" data-testid="navbar-logo-test-id" />
                </div>
                <div className = "hamburger" onClick={ openNav }>
                    &#8801;
                </div>
            </nav>
            
            <div id="myNav" className="overlay">
                <span className="closebtn" onClick={ closeNav }>&times;</span>
                <div className="overlay-content">
                    <a href="#about-us" onClick={ closeNav }>O nas</a>
                    <a href="#our-methods" onClick={ closeNav }>Nasze metody</a>
                    <a href="#our-lectors" onClick={ closeNav }>Nasi lektorzy</a>
                    <a href="#our-offer" onClick={ closeNav }>Nasza oferta</a>
                    <a href="#sign-in" onClick={ closeNav }>Zapisz się</a>
                    <a href="#contact" onClick={ closeNav } >Kontakt</a>
                </div>
            </div>
            
        </div>
    </section>
}
