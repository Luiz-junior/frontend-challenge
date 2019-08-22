import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

class Home extends Component {

    state = {
        countries: [],
        loading: true,
        error: '',
    }

    async componentDidMount() {
        console.log(this.props)
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
                    <Link to={`/Details/${country.name}`} >
                        <div className="card-countries">
                            <img src={country.flag} />
                            <h2>{country.name}</h2>
                            <h4>Population: {country.population}</h4>
                            <h4>Region: {country.region}</h4>
                            <h4>Capital: {country.capital}</h4>
                        </div>
                    </Link>
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

    searchByRegion = async (e) => {
        const value = e.target.value;

        try {
            const response = await api.get(`/region/${value}`);
            this.setState({ countries: response.data, loading: false });    
        } catch (error) {
            this.setState({ error, loading: false });
        }
    };

    render() {
        const { countries, loading, error } = this.state;
        
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
                        
                        <select value={countries} onChange={this.searchByRegion} className="select-countries">
                            <option value="africa">Africa</option>  
                            <option value="asia">Asia</option>  
                            <option value="europe">Europe</option>  
                            <option value="oceania">Oceania</option>  
                        </select> 
                </div>

                <div className="container" >
                    { this.renderCountries(countries) }
                </div>
            </div>
        );
    };
};

export default Home;