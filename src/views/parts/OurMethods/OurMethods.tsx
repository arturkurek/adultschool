import "./OurMethods.scss";


export const OurMethods = () => {

    const arrow = () => {
        return <img 
            src="data:image/png;base64,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"
            alt="arrow"
            className="arrow"
        ></img>
    }

    return (
        <section className="container-full our-methods" id="our-methods">
             <div className='container'>
                <h1 className='section-title'>NASZE METODY</h1>
                <div className="methods-container">
                    <div className="methods-tile">
                        <div className="tile-content">
                        Na naszych kursach łączymy metody tradycyjne z nowoczesnymi, ale przede wszystkim - dostosowujemy sposób nauczania do danej grupy, bądź kursantów. Kierujemy się zasadą: 
    „Nieważne, czy to metoda nowoczesna, czy tradycyjna - ważne, aby była skuteczna!”.
                        </div>
                        <div className="tile-arrow">{ arrow() }</div>
                    </div>
                    <div className="methods-tile">
                        <div className="tile-content">
                        Prowadzimy nasze lekcje świadomie, unikamy przypadkowości i chaosu, jesteśmy elastyczni - najważniejszy jest dla nas kursant i jego postępy w nauce.
                        </div>
                        <div className="tile-arrow">{ arrow() }</div>
                    </div>
                    <div className="methods-tile">
                        <div className="tile-content">
                        Każda minuta zajęć jest wykorzystana, uczymy się na zajęciach, a w domu jedynie utrwalamy przerobiony materiał.
                        </div>
                        <div className="tile-arrow">{ arrow() }</div>
                    </div>
                    <div className="methods-tile">
                        <div className="tile-content">
                        Dzięki pracy w grupach lub parach, każdy ma okazję pracować nad sztuką mówienia podczas zajęć.
                        </div>
                        <div className="tile-arrow">{ arrow() }</div>
                    </div>
                    <div className="methods-tile">
                        <div className="tile-content">
                        Podstawą naszych zajęć jest sprawdzony, polecany, ogólnodostępny kurs. Wzbogaciliśmy go jednak o nasze autorskie gry i zabawy językowe, które znacząco podnoszą efektywność nauki. Wierzymy, że jeśli nauka jest przyjemna, jest jednocześnie efektywna, a wiedza zdobyta w przyjaznej atmosferze pozostaje z nami na dłużej.
                        </div>
                        <div className="tile-arrow">{ arrow() }</div>
                    </div>
                    <div className="methods-tile">
                        <div className="tile-content">
                        Intensywnie ćwiczymy słuchanie i mówienie oraz inne umiejętności językowe, które są podstawą swobodnej komunikacji.
                        </div>
                        <div className="tile-arrow">{ arrow() }</div>
                    </div>
                    <div className="methods-tile">
                        <div className="tile-content">
                        Wszystko sprowadza się do tego, aby nasi kursanci mogli swobodnie komunikować się w języku angielskim, niezależnie od sytuacji w jakiej się znajdą.
                        </div>
                        <div className="tile-arrow">{ arrow() }</div>
                    </div>
                </div>
             </div>
        </section>
    )

}
