import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './NavContainer.scss';
import NavItem from 'components/NavItem';

const cx = classNames.bind(style);

class NavContainer extends Component {
    render() {
        const {navItems,handleNavClick} = this.props;
        const itemArray = navItems.map((item,index)=>{
            return <NavItem moveto={item.id} navHandle={(e)=>handleNavClick(item.id,e)}
            key={index}
            activate={item.activate}>
            {item.text}</NavItem>
        });

        return (    
            <nav className={cx('Nav__wrap')}>
                <ul className={cx('Nav__unordered')} >
                    {itemArray}
                </ul>
            </nav>
        );
    }
}

export default NavContainer;