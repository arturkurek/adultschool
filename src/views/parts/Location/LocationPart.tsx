
import "./LocationPart.scss";


export const LocationPart = () => {

    return <section className="container-full location-part">
        <div className='container'>
            <div className="bottom-info">
                <div className="info-part">
                    <div className="title">
                        <img src="/static/images/phone.png" alt="Contact phone" />
                        <span>Zadzwoń do nas</span>
                    </div>
                    <div className="content">
                        <p>(+48) 730 052 999</p>
                    </div>
                </div>
                <div className="info-part">
                    <div className="title">
                        <img src="/static/images/location.png" alt="Contact location" />
                        <span>Lokalizacja</span>
                    </div>
                    <div className="content">
                        <p>ul. Jórskiego 20, piętro I, Warszawa</p>
                    </div>
                </div>
                <div className="info-part">
                    <div className="title">
                        <img src="/static/images/clock.png" alt="Contact location" />
                        <span>Godziny otwarcia</span>
                    </div>
                    <div className="content">
                        <p>Wt - Czw 18:00-20:00</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
