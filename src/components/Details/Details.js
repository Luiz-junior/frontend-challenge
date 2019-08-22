import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import leftArrow from '../../assets/left-arrow.svg';

const Details = props => {
    
    return (
        <div>
            <Link to="/" className="back-button">
                    <img src={leftArrow} />
                    Back
            </Link>

            {
                props.country.map((c, index) => {
                    
                    return (
                        <div className="details-container" key={index}>
                        <img src={c.flag} />

                        <div className="details-info">
                            <h1>{c.name}</h1>

                            <div className="list-features"> 
                                <ul>
                                    <li>Native Name: {c.nativeName}</li>
                                    <li>Population: {c.population}</li>
                                    <li>Region: {c.region}</li>
                                    <li>Sub Region: {c.subregion}</li>
                                    <li>Capital: {c.capital}</li>
                                </ul>

                                <ul>
                                    <li>Top Level Domain: {c.topLevelDomain}</li>    
                                    <li> Currencies: { c.currencies.map(curr => curr.name) }  </li> 
                                    <li> Languages: { c.languages.map(lang => lang.name ) }  </li>
                                </ul>
                            </div> 

                            <div className="border-container">
                                <h4>Border Countries:</h4>
                                <ul>
                                    <li className="border-countries">France</li>
                                    <li className="border-countries">Germany</li>
                                    <li className="border-countries">Netherlands</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    );
                })
            }
        </div>
    )
};

export default Details;