import React from 'react';

import styles from './NavItem.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);
const NavItem = ({
    children,
    activate,
    navHandle
}) => {
    return(
        <li className={cx('Nav__item',{activate})} onClick={navHandle}>
            {children}
        </li>
    )
}

export default NavItem;