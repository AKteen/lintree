import React from 'react';
import './Linkspage.css';

const Chevron = () => (
    <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

const Linkspage = () => {
    return (
        <div className="container">
            <div className="photo">
                <img id="pp" src="/pp.png" alt="profilepic" />
                <h2 className="name">_alwaysak</h2>
                <div className="name-underline"></div>
                <p className="bio">
                    <span>Software developer</span>
                    <span className="bio-dot"></span>
                    <span>Marathon training</span>
                </p>
            </div>

            <div className="links">
                <ul>
                    <li id="linkedin-link" className="link-item linkedin">
                        <span className="icon-wrap">
                            <img src="/link.png" className="icons" alt="LinkedIn" />
                        </span>
                        <a href="https://www.linkedin.com/in/aditya-k-92911b1b9?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <Chevron />
                    </li>
                    <li id="github-link" className="link-item github">
                        <span className="icon-wrap">
                            <img src="/git.png" className="icons" alt="GitHub" />
                        </span>
                        <a href="https://github.com/AKteen" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <Chevron />
                    </li>
                    <li id="portfolio-link" className="link-item portfolio">
                        <span className="icon-wrap">
                            <img src="/a.png" className="icons" alt="Portfolio" />
                        </span>
                        <a href="https://adityakulkarniportfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
                        <Chevron />
                    </li>
                    <li id="strava-link" className="link-item strava">
                        <span className="icon-wrap">
                            <img src="/strava.png" className="icons" alt="Strava" />
                        </span>
                        <a href="https://strava.app.link/sK6dxaM983b" target="_blank" rel="noopener noreferrer">Strava</a>
                        <Chevron />
                    </li>
                    <li id="instagram-link" className="link-item instagram">
                        <span className="icon-wrap">
                            <img src="/ra.png" className="icons" alt="Instagram" />
                        </span>
                        <a href="https://www.instagram.com/recklessabundant?igsh=MWVlM2ozZWt2dHB3Mg==" target="_blank" rel="noopener noreferrer">Running</a>
                        <Chevron />
                    </li>
                </ul>
            </div>

            <footer>Aditya Kulkarni</footer>
        </div>
    );
};

export default Linkspage;