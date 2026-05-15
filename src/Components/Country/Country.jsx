import React from 'react';
import './Country.css'

const Country = ({ country }) => {
    // console.log(country.cca3.cca3);
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <h3>Region: {country.region.region}</h3>
            <h4>Continents: {country.continents.continents}</h4>
            <p>Languages: {" "} {Object.values(country.languages.languages).join(", ")}</p>
            <p>Currencies: {" "} {Object.values(country.currencies.currencies)
                .map(currency => currency.name)
                .join(", ")}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            <p>Population: {country.population.population}</p>

        </div>
    );
};

export default Country;