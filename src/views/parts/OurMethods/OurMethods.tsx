import "./OurMethods.scss";
import { AiOutlineArrowRight } from 'react-icons/ai';


export const OurMethods = () => {
    return (
        <section className="container-full our-methods" id="our-methods">
             <div className='container'>
                <h1 className='section-title'>NASZE METODY</h1>
                <div className="background-image"></div>
                <div className="methods-container">
                    <div className="methods-tile">
                        <div className="tile-content">
                            <div className="text">
                                Na naszych kursach łączymy metody tradycyjne z nowoczesnymi, ale przede wszystkim - dostosowujemy sposób nauczania do danej grupy, bądź kursantów. Kierujemy się zasadą: „Nieważne, czy to metoda nowoczesna, czy tradycyjna - ważne, aby była skuteczna!”.
                            </div>                        
                        </div>
                        <div className="tile-arrow"><span><AiOutlineArrowRight /></span></div>
                    </div>
                    <div className="methods-tile">
                        <div className="tile-content">
                        <div className="text">
                                Prowadzimy nasze lekcje świadomie, unikamy przypadkowości i chaosu, jesteśmy elastyczni - najważniejszy jest dla nas kursant i jego postępy w nauce.
                            </div>
                        </div>
                        <div className="tile-arrow"><span><AiOutlineArrowRight /></span></div>
                    </div>
                    <div className="methods-tile">
                        <div className="tile-content">
                            <div className="text">
                                Każda minuta zajęć jest wykorzystana, uczymy się na zajęciach, a w domu jedynie utrwalamy przerobiony materiał.
                            </div>
                        </div>
                        <div className="tile-arrow"><span><AiOutlineArrowRight /></span></div>
                    </div>
                    <div className="methods-tile">
                        <div className="tile-content">
                            <div className="text">
                                Dzięki pracy w grupach lub parach, każdy ma okazję pracować nad sztuką mówienia podczas zajęć.
                            </div>
                        </div>
                        <div className="tile-arrow"><span><AiOutlineArrowRight /></span></div>
                    </div>
                    <div className="methods-tile">
                        <div className="tile-content">
                            <div className="text">
                                Podstawą naszych zajęć jest sprawdzony, polecany, ogólnodostępny kurs. Wzbogaciliśmy go jednak o nasze autorskie gry i zabawy językowe, które znacząco podnoszą efektywność nauki. Wierzymy, że jeśli nauka jest przyjemna, jest jednocześnie efektywna, a wiedza zdobyta w przyjaznej atmosferze pozostaje z nami na dłużej.
                            </div>
                        </div>
                        <div className="tile-arrow"><span><AiOutlineArrowRight /></span></div>
                    </div>
                    <div className="methods-tile">
                        <div className="tile-content">
                            <div className="text">
                                Intensywnie ćwiczymy słuchanie i mówienie oraz inne umiejętności językowe, które są podstawą swobodnej komunikacji.
                            </div>
                        </div>
                        <div className="tile-arrow"><span><AiOutlineArrowRight /></span></div>
                    </div>
                    <div className="methods-tile">
                        <div className="tile-content">
                            <div className="text">
                                Wszystko sprowadza się do tego, aby nasi kursanci mogli swobodnie komunikować się w języku angielskim, niezależnie od sytuacji w jakiej się znajdą.
                            </div>
                        </div>
                        <div className="tile-arrow"><span><AiOutlineArrowRight /></span></div>
                    </div>
                </div>
             </div>
        </section>
    )

}
