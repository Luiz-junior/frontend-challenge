import React from 'react';

import './styles.css';
import flag from './belgica.jpg';
import leftArrow from '../../assets/left-arrow.svg';

const Home = props => {
    return (
        <div>
            <button className="back-button">
                <img src={leftArrow} />
                Back
            </button>
            <div className="home-container">
                <img src={flag} />
                <div className="home-info">
                    <h1>Belgium</h1>
                    <div className="list-features">
                        <ul>
                            <li>Native Name: Belgie</li>
                            <li>Population: 11,319,511</li>
                            <li>Region: Europe</li>
                            <li>Sub Region: Western Europe</li>
                            <li>Capital: Brussels</li>
                        </ul>
                        <ul>
                            <li>Top Level Domain: be</li>
                            <li>Curriences: Euro</li>
                            <li>Languages: Dutch, French, German</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Border Countries:</h4>
                        <ul>
                            <li className="border-countries">France</li>
                            <li className="border-countries">Germany</li>
                            <li className="border-countries">Netherlands</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;