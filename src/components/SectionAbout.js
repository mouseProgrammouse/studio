import React from 'react';
import PropTypes from 'prop-types';

const SectionAbout = ( props ) => {

    const { sectionId, header, description, img, imgAlt } = props;

    return (
        <section id = { sectionId } className = "section-about">
            <div className = "about-description">
                <h2>{ header }</h2>
                <p>{ description }</p>
            </div>
            <div className = "about-img">
                <img src = { img } alt = { imgAlt } />
            </div>
        </section>
    );
}

SectionAbout.propTypes = {
    sectionId: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired
}

export default SectionAbout;