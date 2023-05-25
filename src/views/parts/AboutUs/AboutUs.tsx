import React from 'react';
import "./AboutUs.scss";



export const AboutUs = () => {
    return <div className='aboutUs' data-testid="about-us-test-id">
        <img className="woman" src="/static/images/woman.png" alt="adult students" />
        <div className='motto'>
            <h3>„Jeśli potrafisz o czymś marzyć, to potrafisz także tego dokonać”. ~ Walt Disney</h3>
            <h4><i>If you can dream it, you can do it!</i></h4>
        </div>
    </div>
}

