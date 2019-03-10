import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({
    children,
    disabled,
    onClick,
    ...rest
}) =>{
    return(
        <div className={
            cx('button')
        }
        onClick={disabled ? undefined : onClick}
        {...rest}>
            {children}
        </div>

    )
}

export default Button;