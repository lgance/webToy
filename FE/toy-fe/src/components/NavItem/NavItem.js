import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavItem.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);
const NavItem = ({
    children,
    activate,
    moveto,
    navHandle
}) => {
    return(
        <li className={cx('Nav__item',{activate})} 
        onClick={navHandle}>
            <Link to ={"/board/"+moveto}>
                {children}
            </Link>
        </li>
    )
}

export default NavItem;