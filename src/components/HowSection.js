import React from 'react';
import PropTypes from 'prop-types';

const HowSection = (props) => {
    const { sectionId, header, steps, img, imgAlt } = props;

    return (
        <section id = { sectionId }>
            <h2>{ header }</h2>
            <ol>
                {
                    steps.map(( step, index ) => (
                        <li key = { index }>
                            <h3> { step.headline }</h3>
                            <p> { step.description }</p>
                        </li>
                    ))
                }
            </ol>
            <img src = { img } alt = { imgAlt }/>
        </section>
    );
}

HowSection.propTypes = {
    sectionId: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    steps: PropTypes.array.isRequired,
    img: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired
}

export default HowSection;