import React from 'react';
import PropTypes from 'prop-types';
import pin from '../imgs/pin.svg';

const CityInfo = ( props ) => {
    
    const { city } = props;

    return (
        <span>
            <img src = { pin } alt = "Город в котором находится Ателье"/>
            { city }
        </span>
    );
}

CityInfo.propTypes = {
    city: PropTypes.string.isRequired
}

export default CityInfo;