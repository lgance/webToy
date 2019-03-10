import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './NavContainer.scss';
import NavItem from '../../components/NavItem';

const cx = classNames.bind(style);

class NavContainer extends Component {
    render() {
    const itemArray = new Array(15).fill(null).map((a,i)=><NavItem key={i}>{i+"번째"}</NavItem>)
        
        return (
            <nav className={cx('Nav__wrap')}>
                <ul className={cx('Nav__unordered')}>
                    {itemArray}
                </ul>
            </nav>
        );
    }
}

export default NavContainer;