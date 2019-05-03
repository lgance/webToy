import React from 'react';
import styles from './BoardListItem.scss';
import classNames from 'classnames/bind';

import testImage from 'res/test/top.png';
const cx = classNames.bind(styles);

const BoardListItem = ({
    children,
    imgUrl,
    itemTitle,
    registeredDate,
    comments,
    onClick,
    ...rest
}) => {
  return (
      <div className={cx('BoardList__item')} >
          <figure className={cx('item__thumbnail')}>
              {/* <img src="/res/test/top.png" alt="로딩중"> */}
              <img src={testImage} alt="로딩중">
              
              </img>
          </figure>
          <div className={cx('item__contents')}>
            <strong>{children}</strong>
            <span> 2019.4.4 </span>
            <span> 
              <i>Icon</i>
              4
            </span>
          </div>
      </div>
  )

}

export default BoardListItem;