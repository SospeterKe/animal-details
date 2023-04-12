import React from 'react';
import PropTypes from 'prop-types';
import '../AnimalDetails/AnimalDetails'
import AnimalDetails from '../AnimalDetails/AnimalDetails';
import Card from '../card/Card';

export default function AnimalCard({name, size, ...props}) {
    
    return(
        <Card title='Animal' details={<em><AnimalDetails{...props}/></em>}>
            <h3>{name}</h3>
            <div>{size}kgs</div>
            
            
        </Card>
    );

}

AnimalCard.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired
}