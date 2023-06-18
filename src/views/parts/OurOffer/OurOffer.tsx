
import "./OurOffer.scss";


export const OurOffer = () => {

    return (
<section className="our-offer">
    <h1 className='section-title'>NASZA OFERTA</h1>

    <div className="offer-container">
        <h2>Poznaj naszą <a href="#">ofertę</a></h2>
    </div>

    <div className="offer-table-container">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Ilość zajęć</th>
                    <th>Cena za 60 min</th>
                    <th>Cena za miesiąc</th>
                    <th>Cena za semestr</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="col1">INTENSYWNY</td>
                    <td>2 x 90 min/tydzień</td>
                    <td>50 zł</td>
                    <td>400 zł</td>
                    <td>1800 zł</td>
                </tr>
                <tr>
                    <td className="col1">STANDARD I</td>
                    <td>1 x 120 min/tydzień</td>
                    <td>40 zł</td>
                    <td>320 zł</td>
                    <td>1440 zł</td>
                </tr>
                <tr>
                    <td className="col1">STANDARD II</td>
                    <td>1 x 60 min/tydzień</td>
                    <td>55 zł</td>
                    <td>220 zł</td>
                    <td>990 zł</td>
                </tr>
                <tr>
                    <td className="col1">OMDYWIDUALNY</td>
                    <td>do ustalenia</td>
                    <td>120 zł</td>
                    <td>zależy od ilości zajęć</td>
                    <td>zależy od ilości zajęć</td>
                </tr>
                <tr>
                    <td className="col1">EGZAMINACYJNY (B1, B2, C1, C2)</td>
                    <td>2 x 90 min/tydzień</td>
                    <td>55 zł</td>
                    <td>440 zł</td>
                    <td>1980 zł</td>
                </tr>
                <tr>
                    <td className="col1">BIZNESOWY I</td>
                    <td>2 x 90 min/tydzień</td>
                    <td>50 zł</td>
                    <td>400 zł</td>
                    <td>1800 zł</td>
                </tr>
                <tr>
                    <td className="col1">BIZNESOWY II</td>
                    <td>1 x 60 min/tydzień</td>
                    <td>55 zł</td>
                    <td>220 zł</td>
                    <td>990 zł</td>
                </tr>
                <tr>
                    <td className="col1">WAKACYJNY MAGAINTENSYWNY</td>
                    <td>7 x 60 min/tydzień</td>
                    <td>40 zł</td>
                    <td>1400 zł/tydzień</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>
    )

}
