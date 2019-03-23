import React from 'react';

import classNames from 'classnames/bind';
import style from './BlogNavigation.scss';

import NavContainer from 'containers/NavContainer.js'


const cx = classNames.bind(style);

const BlogNavigation = (
    {gnb}
    ) =>(
        
        <div className={cx('Global__menu')}>
             <NavContainer gnb = {gnb}></NavContainer>
        </div>
        
)


export default BlogNavigation; 


// class BlogNavigation extends Component {
//     render() {
//         return (
//            <nav>
//                <div className={cx('Global__menu')}>
//                     <NavContainer gnb = {items}></NavContainer>
//                </div>
               
//            </nav>
//         );
//     }
// }