import React from 'react';
import "./AboutUs.scss";



export const AboutUs = () => {
    return <section className='about-us' data-testid="about-us-test-id">
        <div className="motto-container">
            <img className="woman" src="/static/images/woman.png" alt="adult students" />
            <div className='motto'>
                <h3>„Jeśli potrafisz o czymś marzyć, to potrafisz także tego dokonać”. ~ Walt Disney</h3>
                <h4><i>If you can dream it, you can do it!</i></h4>
            </div>
        </div>
        <h1 className='section-title'>O NAS</h1>
        <div className="about-us-container">
            <h1>
                Jesteśmy Szkołą Języka Angielskiego dla Dorosłych!
            </h1>
            <h2>
                Zaczynaliśmy od nauczania dzieci i młodzieży, ale coraz więcej Rodziców przychodziło do nas z prośbą: „Ja też chciałbym/-łabym nauczyć się języka angielskiego!”. Stąd zrodził się pomysł na kursy dla osób dorosłych.
            </h2>
            <div className="questions">
                <ul>
                    <li>Chcesz zmienić prace na lepszą? Zdobyć awans?</li>
                    <li>Wyjechać za granicę?</li>
                    <li>Chcesz bez problemu dogadywać się na zagranicznych wakacjach?</li>
                </ul>
            </div>
            <h2>
            Każdy powód jest dobry, aby zacząć naukę j. angielskiego już dziś. Przyjdź do nas, a my pomożemy zrealizować Twoje plany i marzenia!
            </h2>
        </div>
        
    </section>
}

