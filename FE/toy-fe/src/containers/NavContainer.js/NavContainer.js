import React ,{Component} from 'react';

import classNames from 'classnames/bind';
import style from './NavContainer.scss';

import NavItem from 'components/NavItem';


import { connect } from 'react-redux';

const cx = classNames.bind(style);

// 클래스로 만들 필요는 없는데 확인 차 제작 
// NavItem 의 리렌더링을 방지하려고 하였으나 클래스로 하여도
// 어차피 Home -> board/Route를 탈때 무조건 리렌더링이 되니 의미가 없음 

// 최초 마운트시 
// constructor -> getDerivedStateFromProps -> render -> componentDidMount

// 업데이트 시

// getDerivedStateFromProps -> shouldComponentUpdate -> render 
// -> getSnapshotBeforeUpdate -> componentDidUpdate 

// 언마운트
// componentWillUnmount

class NavContainer extends Component {
   
    // Props 가 변경 됐을시 또는 부모 리렌더링시 호출됨
// props를 변동된게 있으면 state에 동기화 하는 작업 
    static getDerivedStateFromProps(nextProps,prevState){
            // console.warn('getDerivedStateFromProps');

            // 메뉴 길이가 다르다면 state를 동기화 
            if(nextProps.gnb.length !== prevState.gnb.length){
                    return {
                        gnb:nextProps.gnb
                    }
            }
        return null;
        }
// state가 변경됐을때 호출된다. return false시 리렌더링 취소 
    shouldComponentUpdate(nextProps,nextState){
            // console.warn('shouldComponentUpdate');
            //     console.log(nextProps);
            //     console.log(nextState);

        // return nextProps === nextState ? false : true;
        if(nextProps.gnb.length !== nextState.gnb.length){
                return true;
        }
        // 무조건 렌더링을위해서 true로 변경 임시 
        // return false;
        return true;
    }
// render후에 실행되는 함수  DOM이 적용되기직전에 호출 16.3 메서드 
    getSnapshotBeforeUpdate(prevProps,prevState){
            // console.warn('getSnapshotBeforeUpdate');
        return null;
    }

// 컴포넌트의 업데이트 작업이 전부 끝난 후 호출됩니다. (DOM 변동 후 )
    componentDidUpdate(){
                // console.warn('Component Did Update');
        return true;
    }
// forceUpdate가 호출될시 무조건 렌더가 불리는데 별로 좋지 않음
    render() {
        
        // blognavlist

        const { blognavlist } = this.props;
               const itemArray = blognavlist.map((item,index)=>{
                return <NavItem moveto={item.id} 
                        key={index}
                        activate={item.activate}
                        >
                                {item.text}
                        </NavItem>
                }) ;
        

        return (    
            <nav className={cx('Nav__wrap')} role="navigation">
                <ul className={cx('Nav__unordered')} >
                    {itemArray}
                </ul>
            </nav>
        );
    }
    
}


// const NavContainer = ({
//         children,
//         navItems,
//         handlenavClick,
//         ...rest
// }) => {

// {/* <NavContainer navItems={items} handleNavClick={handleNavClick} ></NavContainer> */}
//         const itemArray = navItems.map((item,index)=>{
//                 return <NavItem moveto={item.id} 
//                         // navHandle={(e)=>handlenavClick(item.id,e)}
//                         key={index}
//                         activate={item.activate}
//                         >
//                                 {item.text}
//                         </NavItem>
//         }) 
 
//     return (
//             <nav className={cx('Nav__wrap')}>
//                 <ul className={cx('Nav__unordered')} >
//                      {itemArray}
//                 </ul>
//             </nav>
//     )
// };


export default NavContainer;

