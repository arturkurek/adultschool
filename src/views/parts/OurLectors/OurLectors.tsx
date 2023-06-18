import "./OurLectors.scss";



export const OurLectors = () => {


    return (
        <section className="our-lectors">
            <h1 className='section-title'>Nasi lektorzy</h1>
            <h2 className="section-subtitle"><i>„Wybierz pracę, którą kochasz, a nie przepracujesz ani jednego dnia więcej w Twoim życiu.”</i> Konfucjusz (Kong Fuzi) </h2>
            <h3>Nasi Lektorzy to przede wszystkim wielcy pasjonaci języka angielskiego. Ich zamiłowanie do angielszczyzny podparte jest gruntownym wykształceniem filologicznym oraz pedagogicznym, regularnie utrwalanym przez szkolenia metodyczne i językowe (tak! - my też cały czas się uczymy, gdyż język to żywy organizm i nieustannie się zmienia).
Swoją pasją pragniemy zarazić naszych kursantów. Wierzymy, że każdy może nauczyć się komunikować w języku angielskim!
</h3>
            <div className="lectors-container">
                <div className="lectors-tile">
                    <div className="tile-image">
                        <img src="/static/images/teacher-02.jpg" alt="avatar" />
                    </div>
                    <div className="tile-title">
                    Joanna Nowak
                    </div>
                    <div className="tile-content">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    </div>
                </div>
                <div className="lectors-tile">
                    <div className="tile-image">
                        <img src="/static/images/teacher-02.jpg" alt="avatar" />
                    </div>
                    <div className="tile-title">
                    Anna Kowalska
                    </div>
                    <div className="tile-content">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    </div>
                </div>
                <div className="lectors-tile">
                    <div className="tile-image">
                        <img src="/static/images/teacher-02.jpg" alt="avatar" />
                    </div>
                    <div className="tile-title">
                    Zuzanna Malinowska
                    </div>
                    <div className="tile-content">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    </div>
                </div>
            </div>
        </section>
    )

}

