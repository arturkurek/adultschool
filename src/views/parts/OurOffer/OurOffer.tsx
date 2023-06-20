
import "./OurOffer.scss";


export const OurOffer = () => {

    return (
    <section className="our-offer">
        <h1 className='section-title'>NASZA OFERTA</h1>

        <div className="offer-container">
            <h2>Poznaj naszą <a href="#">ofertę</a></h2>
        </div>

        <div className="offer-table-container">

            <div className="table">
                
                <div className="data head"></div>
                <div className="data head">Ilość zajęć</div>
                <div className="data head">Cena za 60 min</div>
                <div className="data head">Cena za miesiąc</div>
                <div className="data head">Cena za semestr</div>

                <div className="data left">INTENSYWNY</div>
                <div className="data">2 x 90 min/tydzień</div>
                <div className="data">50 zł</div>
                <div className="data">400 zł</div>
                <div className="data">1800 zł</div>

                <div className="data left">STANDARD I</div>
                <div className="data">1 x 120 min/tydzień</div>
                <div className="data">40 zł</div>
                <div className="data">320 zł</div>
                <div className="data">1440 zł</div>

                <div className="data left">STANDARD II</div>
                <div className="data">1 x 60 min/tydzień</div>
                <div className="data">55 zł</div>
                <div className="data">220 zł</div>
                <div className="data">990 zł</div>

                <div className="data left">INDYWIDUALNY</div>
                <div className="data">do ustalenia</div>
                <div className="data">120 zł</div>
                <div className="data">zależy od ilości zajęć</div>
                <div className="data">zależy od ilości zajęć</div>

                <div className="data left">EGZAMINACYJNY (B1, B2, C1, C2)</div>
                <div className="data">2 x 90 min/tydzień</div>
                <div className="data">55 zł</div>
                <div className="data">440 zł</div>
                <div className="data">1980 zł</div>

                <div className="data left">BIZNESOWY I</div>
                <div className="data">2 x 90 min/tydzień</div>
                <div className="data">50 zł</div>
                <div className="data">400 zł</div>
                <div className="data">1800 zł</div>

                <div className="data left">BIZNESOWY II</div>
                <div className="data">1 x 60 min/tydzień</div>
                <div className="data">55 zł</div>
                <div className="data">220 zł</div>
                <div className="data">990 zł</div>

                <div className="data left">WAKACYJNY INTENSYWNY</div>
                <div className="data">3 x 120 min/tydzień</div>
                <div className="data">40 zł</div>
                <div className="data">720 zł / 3 tygodnie</div>
                <div className="data">-</div>

                <div className="data left">WAKACYJNY MEGAINTENSYWNY</div>
                <div className="data">7 x 60 min/dzień</div>
                <div className="data">40 zł</div>
                <div className="data">1400 zł / tydzień</div>
                <div className="data">-</div>
            </div>
        </div>
    </section>
    )

}
