import React from 'react';
import classNames from 'classnames/bind';
import styles from './BlogHeader.scss';

// import BlogNav from 'components/template/BlogNav';
import Button from 'components/Button';

const cx = classNames.bind(styles);

const BlogHeader = ({version})=> (
    <header className={cx('Header')}>
    <div className={cx('Header__logo')}>
            <h2>
                <span>Node.js</span>  
                <span class="light">GDL</span> 
                <span> Selenium </span> 
                <span> JavaScript </span>  
                <span> TypeScript</span>
            </h2>
        <span className={cx('Header__version')}>
                {version}
        </span>
    </div>
    <div className="Header_right">
        <div className="Header_rightset">
            <input type="input" placeholder="Search in Category"></input>
            <div className="icon">
                <svg className="Search__icon" width="25"height="25">
                    <path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z">
                    </path>
                </svg>    
            </div>
            
            <Button>Sign in</Button>
        </div>
          
          
    </div>
</header>
);



// class BlogHeader extends Component {
//     render() {
//         const {version,navMenu,navHandle} = this.props;

//         return (
//             <Fragment>
           
//                    <BlogNav items={navMenu} handleNavClick = {navHandle}></BlogNav>
//             </Fragment>
//         );
//     }
// }

export default BlogHeader; 