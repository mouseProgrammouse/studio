import React from 'react';
import PropTypes from 'prop-types';

const ServicesSection = (props) => {
    const { sectionId, header, servicesIcons, services } = props;
    
    return (
        <section id = { sectionId } className = "services-section">
            <h2>{ header }</h2>
            <ul>
                {
                    services.map((service, index) => 
                    <li> 
                        <img src = {servicesIcons[index].img} alt = {servicesIcons[index].imgAlt}/>
                        <h3> { service.serviceHeadline } </h3>
                        <p> { service.serviceDescription } </p>
                    </li>
                )
                }
            </ul>
        </section>
    );
}

ServicesSection.propTypes = {
    sectionId: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    services: PropTypes.array.isRequired,
    servicesIcons: PropTypes.array.isRequired
}

export default ServicesSection;