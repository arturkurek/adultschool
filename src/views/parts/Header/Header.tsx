import "./Header.scss";


export const Header = () => {

    return (
        <section className='container-full header'>
            <div className="container">
                <div className="motto-container">
                    <img className="header-image" src="/static/images/english-book-resting-table-working-space.jpg" alt="adult students" />
                    <div className='motto'>
                        <h1>„Jeśli potrafisz o czymś marzyć, to potrafisz także tego dokonać”. ~ Walt Disney</h1>
                        <h2><i>If you can dream it, you can do it!</i></h2>
                    </div>
                </div>
            </div>
        </section>
    )
}
