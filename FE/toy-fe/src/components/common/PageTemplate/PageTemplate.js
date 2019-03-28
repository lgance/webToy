import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

import BlogHeader from 'components/common/BlogHeader';
import BlogFooter from 'components/common/BlogFooter';
import BlogNavigation from 'components/common/BlogNavigation';
const cx = classNames.bind(styles);

 

const gnb = [
  {id:"home",text:"HOME"},
  {id:"node",text:"Node.js"},
  {id:"js",text:"JavaScript"},
  {id:"selenium",text:"Selenium"},
  {id:"issue",text:"Issue"},
  {id:"profile",text:"Profile"},
  {id:"editor",text:"Editor"},
  ]



const PageTemplate = ({children}) =>{
  return(
        <div className ={cx('Page__template')}>
            <BlogHeader version="v0.0.1"></BlogHeader>
            <BlogNavigation gnb={gnb} ></BlogNavigation>
                <main>
                  {children}
                </main>
            <BlogFooter></BlogFooter>
        </div> 
        )

}

export default PageTemplate;