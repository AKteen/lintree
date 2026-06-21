import React from 'react';
import './Linkspage.css';

const Linkspage = () => {
    return (
        <div className="container">
            <div className="photo">
                <img id="pp" src="/pp.png" alt="profilepic" />
                <h2 className="name">_alwaysak</h2>
                <div className="name-underline"></div>
                <p className="bio">Student, Software Developer, Runner.</p>
            </div>

            <div className="links">
                <ul>
                    <li id="linkedin-link" className="link-item linkedin">
                        <img src="/link.png" className="icons" alt="LinkedIn" />
                        <a href="https://www.linkedin.com/in/aditya-k-92911b1b9?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li id="github-link" className="link-item github">
                        <img src="/git.png" className="icons" alt="GitHub" />
                        <a href="https://github.com/AKteen" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li id="portfolio-link" className="link-item portfolio">
                        <img src="/a.png" className="icons" alt="Portfolio" />
                        <a href="https://adityakulkarniportfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
                    </li>
                    <li id="strava-link" className="link-item strava">
                        <img src="/strava.png" className="icons" alt="Strava" />
                        <a href="https://strava.app.link/sK6dxaM983b" target="_blank" rel="noopener noreferrer">Strava</a>
                    </li>
                    <li id="instagram-link" className="link-item instagram">
                        <img src="/ra.png" className="icons" alt="Instagram" />
                        <a href="https://www.instagram.com/recklessabundant?igsh=MWVlM2ozZWt2dHB3Mg==" target="_blank" rel="noopener noreferrer">Running</a>
                    </li>
                </ul>
            </div>

            <footer>Aditya Kulkarni</footer>
        </div>
    );
};

export default Linkspage;