import React from "react";

function About ({ about, hideAboutSection }) {
    return (
        <div className={about ? 'about-section' : 'about-section hidden'}>
            <h1>About</h1>
            <p>Lorem Ipsum
                ....
            </p>
            <div className='about-section-close'>
                <p onClick={hideAboutSection}>Close</p>
            </div>
        </div>
    )
}

export default About