import React from 'react';
import PropTypes from 'prop-types';
import '../AnimalDetails/AnimalDetails'
import AnimalDetails from '../AnimalDetails/AnimalDetails';

export default function AnimalCard({name, diet, size}) {
    
    return(
        <div>
            <h3>{name}</h3>
            <div><AnimalDetails diet={diet}/></div>
            <div>{size}</div>
            
        </div>
    );

}

AnimalCard.propTypes = {
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
}