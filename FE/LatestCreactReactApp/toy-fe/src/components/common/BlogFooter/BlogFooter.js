import React from 'react';

import classNames from 'classnames/bind';
import styles from './BlogFooter.scss';

const cx = classNames.bind(styles);
const BlogFooter = () =>{
    return (
        <footer className={cx('Footer')}>
                    바닥입니다.
        </footer>
    )
}

export default BlogFooter;