import React from 'react';

import classNames from 'classnames/bind';
import style from './BlogNavigation.scss';

import NavContainer from 'containers/NavContainer.js'


const cx = classNames.bind(style);

const BlogNavigation = () =>(
        <div className={cx('Global__menu')}>
             <NavContainer ></NavContainer>
        </div>
)
export default BlogNavigation; 
