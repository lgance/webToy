import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavItem.scss';
import className from 'classnames/bind';

import PropTypes from 'prop-types';
const cx = className.bind(styles);

/**
 * Redux를 붙이면서 getSDerivedStateFromProps라든지 등의 함수들이 전부 필요가 없어졌음
 * 
 * state가 불변한 상태로 되다보니 Link 태그의 active한 선택 상태는 react-route가 처리 해주며
 * 
 * state가 불변한 상태라 함은 최초실행시에 state만 변경되고 
 * 그 이후로는 props를 다시 던져주니 않기 때문에 부모의 props가 변동되지않아 
 * 하위의 Item 들도 재 렌더링 동작 조차 시작하지 않게 됨 
 * 
 * 아래의 코드들은 전부 의미가 없지만 테스트용으로 남김
 * 
 */
class NavItem extends Component {
    static propTypes ={
        children:PropTypes.string.isRequired,
        moveto:PropTypes.string.isRequired        
    }
    // optimization Test State 
    state = {
        activate:false
    }
  
    static getDerivedStateFromProps(nextProps,prevState){
        // console.log('getDerivedStateFromProps',nextProps,prevState);
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
       console.log('test');
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
    // console.warn(`Rendering NavItem  [props] ${this.props.children}`);
    const {children,moveto} = this.props;
    const _originMoveto = moveto ==='home' ? '/' : "/boardList/"+moveto;
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
