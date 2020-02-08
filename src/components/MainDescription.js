import React from 'react';
import PropTypes from 'prop-types';

const MainDescription = (props) => {

    const { header, description, logo } = props;

    return (
        <div className="main-description">
            <h1>{header}</h1>
            <p>{description}</p>
        </div>
    );
}

export default MainDescription