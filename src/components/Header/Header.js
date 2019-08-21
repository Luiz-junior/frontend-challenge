import React from 'react';

import './styles.css';
import moon from '../../assets/moon.png';

const Header = props => {
    return (
        <div className="header-container">
            <h2>Where in the world?</h2>
            <div>
                <img src={moon} />
                <h5>Dark Mode</h5>
            </div>
        </div>
    )
};

export default Header;