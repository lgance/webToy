import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavItem.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);
const NavItem = ({
    children,
    activate,
    moveto,
    navHandle
}) => {
    console.log(moveto );
    return(
        <li className={cx('Nav__item')}    >
            <NavLink exact to ={"/board/"+moveto}
            
            activeClassName="Nav__item activate"
            >
                {children}
            </NavLink>
        </li>
    )
}

export default NavItem;