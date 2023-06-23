
import "./Footer.scss";


export const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <section className="container-full footer">
            <footer className="container">
                <div className="footer-content">
                    <span>Wszelkie prawa zastrzeżone &#xA9; { currentYear }</span>   
                </div>
            </footer>
        </section>
    )

}

