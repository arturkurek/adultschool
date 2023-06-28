import "./Header.scss";


export const Header = () => {

    return (
        <section className='container-full header'>
            <div className="container">
                <div className="motto-container">
                    <img className="woman" src="/static/images/woman.png" alt="adult students" />
                    <div className='motto'>
                        <h3>„Jeśli potrafisz o czymś marzyć, to potrafisz także tego dokonać”. ~ Walt Disney</h3>
                        <h4><i>If you can dream it, you can do it!</i></h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
