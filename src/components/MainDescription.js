import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';

const MainDescription = (props) => {

    const { header, description, logo, logoAlt, idCallToAction, callToActionButton } = props;
    // TODO callToAction button with anchor tag
    return (
        <div className="main-description">
            <img src = { logo } alt = { logoAlt }/>
            <h1>{ header }</h1>
            <p>{ description }</p>
            <AnchorLink href = { idCallToAction }>{ callToActionButton }</AnchorLink>
        </div>
    );
}

MainDescription.propTypes = {
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    logoAlt: PropTypes.string.isRequired,
    idCallToAction: PropTypes.string.isRequired,
    callToActionButton: PropTypes.string.isRequired
}

export default MainDescription