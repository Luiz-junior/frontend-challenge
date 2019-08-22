import React, { Component } from 'react';

import './styles.css';
import api from '../../services/api';

class Home extends Component {

    state = {
        countries: [],
        loading: true,
        error: '',
    }

    async componentDidMount() {
        try {
            const response = await api.get(`/all`);
            this.setState({ countries: response.data, loading: false });    
        } catch (error) {
            this.setState({ error, loading: false });
        }
    }

    renderCountries = countries => {
        return countries.map((country, index) => {
            return ( 
                <div className="home-container" key={index}>
                    <div className="card-countries">
                        <img src={country.flag} />
                        <h2>{country.name}</h2>
                        <h4>Population: {country.population}</h4>
                        <h4>Region: {country.region}</h4>
                        <h4>Capital: {country.capital}</h4>
                    </div>
                </div> 
            )
        })
    };

    searchCountry = async (e) => {
        const value = e.target.value;
        try {
            const response = await api.get(`/name/${value}`);
            this.setState({ countries: response.data, loading: false });    
        } catch (error) {
            this.setState({ error, loading: false });
        }
    };

    render() {
        const { countries, loading, error } = this.state;
        console.log(this.state.countries);
        if(loading)
            return <h5>Carregando...</h5>
    
        return (
            <div className="main-container">
                <div className="input-container">
                    <input 
                        type="text" 
                        placeholder="Search for a country" 
                        className="input-countries"
                        onChange={(e) => this.searchCountry(e)}
                         />
                        
                        <select value={countries} onChange={this.searchCountry} className="select-countries">
                            { countries.map(country => (
                                <option value={country.name}>{country.name}</option> 
                            )) }
                        </select>
                </div>

                <div className="container">
                    { this.renderCountries(countries) }
                </div>
            </div>
        );
    };
};

export default Home;