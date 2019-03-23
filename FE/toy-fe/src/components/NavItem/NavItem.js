import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavItem.scss';
import className from 'classnames/bind';

import PropTypes from 'prop-types';
const cx = className.bind(styles);

// 재렌더링 할필요 없는건 재렌더링 하지않음
class NavItem extends Component {


    static propTypes ={
        children:PropTypes.string.isRequired,
        moveto:PropTypes.string.isRequired        
    }

    state = {
        activate:false
    }
  
    static getDerivedStateFromProps(nextProps,prevState){

        let pathSplitLength = window.location.pathname.split('/').length;
        let currentRoute = window.location.pathname.split('/')[pathSplitLength-1];
        if(currentRoute===nextProps.moveto  && prevState.activate === false){
            return {
                activate:true
            }
        }
        return null;
    }
    shouldComponentUpdate(nextProps,nextState){
       
       if(nextState.activate === true){
            console.warn(nextProps);
            console.warn(nextState);
            console.warn('활성화로 인한 재렌더링',nextProps.moveto);
            return true;
        }
        // console.warn('재 렌더링 안합니다.',nextProps.moveto);
        return false;
    }

    componentDidUpdate(prevProps,prevState){

        let pathSplitLength = window.location.pathname.split('/').length;
        let currentRoute = window.location.pathname.split('/')[pathSplitLength-1];

        if(currentRoute !== prevProps.moveto && prevState.activate ===true){
                this.setState({
                    activate:false
                })
        }
        return true;
    }

    render() {
    const {children,moveto} = this.props;
    const _originMoveto = moveto ==='home' ? '/' : "/board/"+moveto;
        return (
            <li className={cx('Nav__item')}    >
                <NavLink exact to ={_originMoveto}
                activeClassName="Nav__item activate"
                >
                   {children}
               </NavLink>
           </li>
        );
    }
}

export default NavItem;
