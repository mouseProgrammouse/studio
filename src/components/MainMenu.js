import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const MainMenu = ( props ) =>  {

    const { menuItems } = props;
    
    return (
            <div className = "main-menu">
                <ul>
                    { menuItems.map(( item, index ) => (
                        <li key={`nav-${index}`}><Link to = { item.to }>{ item.name }</Link>
                            {
                            (item.anchors.length > 0) ? 
                                <ul>{ item.anchors.map(( anchor, index ) => 
                                    <li key={`anchor-${index}`}><AnchorLink href = {`#${ anchor.to }`}>{ anchor.name }</AnchorLink></li>
                                    ) }
                                </ul> : ""
                            }
                        </li>
                    )) }
                </ul>
            </div>
    ); 
}

MainMenu.propTypes = {
    menuItems: PropTypes.array.isRequired
}


export default MainMenu;