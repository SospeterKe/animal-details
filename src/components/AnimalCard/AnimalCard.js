import React from 'react';
import PropTypes from 'prop-types';
import '../AnimalDetails/AnimalDetails'
import AnimalDetails from '../AnimalDetails/AnimalDetails';

export default function AnimalCard({name, size, ...props}) {
    
    return(
        <div>
            <h3>{name}</h3>
            <div>{size}kgs</div>
            <div><AnimalDetails {...props}/></div>
            
            
        </div>
    );

}

AnimalCard.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
}