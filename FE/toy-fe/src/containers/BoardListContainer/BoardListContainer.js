import React ,{Component} from 'react';
import styles from './BoardListContainer.scss';
import classNames from 'classnames/bind';

import BoardListItem from 'components/BoardListItem';


import { connect } from 'react-redux';

const cx = classNames.bind(styles);

const PaginationComponent = () =>{

    const isLoading = true;

    // child가 5일때
    const tempList = 5;
    const maxPage = 3;
    const pageItem = new Array(tempList%maxPage).fill(0).map((v,i)=>{
            if(i===0){
                return (<button key={i} className={cx('current')}>{i+1}</button>)
            }
            return <button key={i}>{i+1}</button>
    })
    // console.log(pageItem);
    return(
        <div className={cx('Pagination__wrapper')}>
                <button disabled>처음</button>
                <button>이전</button>
                {isLoading && pageItem}
                <button>다음</button>
                <button>끝</button>
        </div>
    )
}
class BoardListContainer extends Component{

    render () {
        const { noticeList, categoryList,category} = this.props;
                console.warn('ListContainer Category ',category);
        const nostItemArray = noticeList.map((item,index) =>{
                return <div key={index}>
                    {item.title}
                </div>
        });
        const categoryItemArray = categoryList.map((item,index)=>{
                return <BoardListItem key={index}>
                                    {item.title}
                       </BoardListItem>
        });
        return (
            <section className={cx('BoardListContainer')}>
            <div className={cx('Pagination__area')}>
                <PaginationComponent></PaginationComponent>
           </div>
           
           <div className={cx('Notice__list')}>
               {nostItemArray}
           </div>

           <div className={cx('Category__total')}>
                [Categroy] [ToTal] 개의 글 
           </div>
           <div className={cx('Category__list')}>
               {categoryItemArray}
               {category}
           </div>
           <div className={cx('Pagination__area')}>
               <PaginationComponent></PaginationComponent>
           </div>
             </section>
        )
    }
}

function mapStateToProps({noticeList,categoryList}){
    return { 
        noticeList:noticeList.noticeList,
        categoryList:categoryList.categoryList

    }
}

export default connect(mapStateToProps)(BoardListContainer);


// const BoardListContainer = ({
//     noticeList,
//     category,
//     children
// }) => {
//     return(
        
        // <section className={cx('BoardListContainer')}>
        //          <div className={cx('Pagination__area')}>
        //              <PaginationComponent></PaginationComponent>
        //         </div>
        //         <div className={cx('Notice__List')}>
        //             {noticeList}
        //         </div>
        //         <div className={cx('Category__List')}>
        //             {/* {category} */}
        //         </div>
        //         <div className={cx('Pagination__area')}>
        //             <PaginationComponent></PaginationComponent>
        //         </div>
        // </section>

//     )
// }
