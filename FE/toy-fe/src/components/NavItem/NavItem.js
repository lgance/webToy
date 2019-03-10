import React from 'react';


const NavItem = ({
    children
}) => {
    return(
        <li className='Nav__item'>
            {children}
        </li>
    )
}

export default NavItem;