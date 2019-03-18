import React, { Component } from 'react';

import classNames from 'classnames/bind';
import style from './BlogNavigation.scss';

import NavContainer from 'containers/NavContainer.js'


const cx = classNames.bind(style);

class BlogNavigation extends Component {
    render() {
    const {items,handleNavClick} = this.props;
        
        return (
           <nav>
               <div className={cx('Global__menu')}>
                    <NavContainer navItems={items} handleNavClick={handleNavClick} ></NavContainer>
               </div>
               
           </nav>
        );
    }
}

export default BlogNavigation; 