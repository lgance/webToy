import React, { Component ,Fragment} from 'react';
import classNames from 'classnames/bind';
import styles from './BlogHeader.scss';

import BlogNav from 'components/template/BlogNav';
import Button from 'components/Button';

const cx = classNames.bind(styles);
class BlogHeader extends Component {
    render() {
        const {version,navMenu,navHandle} = this.props;

        return (
            <Fragment>
            <header>
                <div className={cx('Header__logo')}>
                    <svg height="22" width="112" viewBox="0 0 111.5 22">
                        <path d="M56.3 19.5c0 .4 0 .5.3.7l1.5 1.4v.1h-6.5V19c-.7 1.8-2.4 3-4.3 3-3.3 0-5.8-2.6-5.8-7.5 0-4.5 2.6-7.6 6.3-7.6 1.6-.1 3.1.8 3.8 2.4V3.2c0-.3-.1-.6-.3-.7l-1.4-1.4V1l6.5-.8v19.3zm-4.8-.8V9.5c-.5-.6-1.2-.9-1.9-.9-1.6 0-3.1 1.4-3.1 5.7 0 4 1.3 5.4 3 5.4.8.1 1.6-.3 2-1zm9.1 3.1V9.4c0-.3-.1-.6-.3-.7l-1.4-1.5v-.1h6.5v12.5c0 .4 0 .5.3.7l1.4 1.4v.1h-6.5zm-.2-19.2C60.4 1.2 61.5 0 63 0c1.4 0 2.6 1.2 2.6 2.6S64.4 5.3 63 5.3c-1.5 0-2.6-1.2-2.6-2.7zm22.5 16.9c0 .4 0 .5.3.7l1.5 1.4v.1h-6.5v-3.2c-.6 2-2.4 3.4-4.5 3.4-2.9 0-4.4-2.1-4.4-6.2 0-1.9 0-4.1.1-6.5 0-.3-.1-.5-.3-.7L67.7 7v.1H74v8c0 2.6.4 4.4 2 4.4.9-.1 1.7-.6 2.1-1.3V9.5c0-.3-.1-.6-.3-.7l-1.4-1.5v-.2h6.5v12.4zm22 2.3c0-.5.1-6.5.1-7.9 0-2.6-.4-4.5-2.2-4.5-.9 0-1.8.5-2.3 1.3.2.8.3 1.7.3 2.5 0 1.8-.1 4.2-.1 6.5 0 .3.1.5.3.7l1.5 1.4v.1H96c0-.4.1-6.5.1-7.9 0-2.7-.4-4.5-2.2-4.5-.9 0-1.7.5-2.2 1.3v9c0 .4 0 .5.3.7l1.4 1.4v.1h-6.5V9.5c0-.3-.1-.6-.3-.7l-1.4-1.5v-.2h6.5v3.1c.6-2.1 2.5-3.5 4.6-3.4 2.2 0 3.6 1.2 4.2 3.5.7-2.1 2.7-3.6 4.9-3.5 2.9 0 4.5 2.2 4.5 6.2 0 1.9-.1 4.2-.1 6.5-.1.3.1.6.3.7l1.4 1.4v.1h-6.6zm-81.4-2l1.9 1.9v.1h-9.8v-.1l2-1.9c.2-.2.3-.4.3-.7V7.3c0-.5 0-1.2.1-1.8L11.4 22h-.1L4.5 6.8c-.1-.4-.2-.4-.3-.6v10c-.1.7 0 1.3.3 1.9l2.7 3.6v.1H0v-.1L2.7 18c.3-.6.4-1.3.3-1.9v-11c0-.5-.1-1.1-.5-1.5L.7 1.1V1h7l5.8 12.9L18.6 1h6.8v.1l-1.9 2.2c-.2.2-.3.5-.3.7v15.2c0 .2.1.5.3.6zm7.6-5.9c0 3.8 1.9 5.3 4.2 5.3 1.9.1 3.6-1 4.4-2.7h.1c-.8 3.7-3.1 5.5-6.5 5.5-3.7 0-7.2-2.2-7.2-7.4 0-5.5 3.5-7.6 7.3-7.6 3.1 0 6.4 1.5 6.4 6.2v.8h-8.7zm0-.8h4.3v-.8c0-3.9-.8-4.9-2-4.9-1.4.1-2.3 1.6-2.3 5.7z"></path>
                    </svg>
                    <span className={cx('Header__version')}>
                            {version}
                    </span>
                </div>
                <div className="Header_right">
                    <div className="Header_rightset">
                        <svg className="Search__icon" width="25"height="25">
                            <path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z">
                            </path>
                        </svg>
                    </div>
                       
                       <Button>Sign in</Button>
                      
                </div>
            </header>
                   <BlogNav items={navMenu} handleNavClick = {navHandle}></BlogNav>
            </Fragment>
        );
    }
}

export default BlogHeader; 