import React, { Component } from 'react';

import NavContainer from '../../../containers/NavContainer.js'
import classNames from 'classnames/bind';
import style from './BlogNav.scss';
const cx = classNames.bind(style);

class BlogNav extends Component {
    render() {
    const {items,navHandle } = this.props;
        return (
           <nav>
               <div className={cx('Global__menu')}>
                    <NavContainer navItems={items} handleNavClick={navHandle} ></NavContainer>
               </div>
               
           </nav>
        );
    }
}

export default BlogNav; 