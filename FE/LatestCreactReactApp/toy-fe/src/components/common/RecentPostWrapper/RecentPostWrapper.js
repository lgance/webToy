import React from 'react';

import styles from './RecentPostWrapper.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

const RecentPostItem = ({title,content,children}) =>(
    <div className={cx('Post__item') }>
        <div className={cx('Post__item-title')}>{title}</div>
        <div className={cx('Post__item-content')}>{children}</div>
    </div>
)


const RecentPostWrapper = () =>{
    return (
       <div style={{
           "width":"100%",
           "height":"auto",
           "borderBottom":"1px solid #D5D5D5"
        }
           }>
            <h1>최신 포스팅</h1>
            <RecentPostItem title="타이틀입니다.">내용입니다.</RecentPostItem>
            <RecentPostItem title="Chrome 72 Update">내용입니다.</RecentPostItem>
            <RecentPostItem title="출근했더니 GitLab이? ">내용입니다.</RecentPostItem>
            <RecentPostItem title="자료구조">내용입니다.</RecentPostItem>
       </div>

    )

}
export default RecentPostWrapper;