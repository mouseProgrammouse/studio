import React from 'react';
import PropTypes from 'prop-types';

const MainDescription = (props) => {

    const { header, description, logo, logoAlt } = props;

    return (
        <div className="main-description">
            <img src = { logo } alt = { logoAlt }/>
            <h1>{ header }</h1>
            <p>{ description }</p>
        </div>
    );
}

MainDescription.propTypes = {
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default MainDescription