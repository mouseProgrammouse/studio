import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

const MainMenu = ( props ) =>  {

    const { menuItems } = props;
    
    return (
            <div className = "main-menu">
                <ul>
                    { menuItems.map((item) => (
                        <li><Link to = { item.to }>{ item.name }</Link></li>
                    )) }
                </ul>
            </div>
    );
}

MainMenu.propTypes = {
    menuItems: PropTypes.array.isRequired
}


export default MainMenu;