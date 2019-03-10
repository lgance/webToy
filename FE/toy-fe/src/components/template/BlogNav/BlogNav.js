import React, { Component } from 'react';

import NavContainer from '../../../containers/NavContainer.js'
import classNames from 'classnames/bind';
import style from './BlogNav.scss';
const cx = classNames.bind(style);

class BlogNav extends Component {
    render() {
        return (
           <nav>
               <div className={cx('Global__menu')}>
                    <NavContainer></NavContainer>
               </div>
               
           </nav>
        );
    }
}

export default BlogNav; 