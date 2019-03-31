import React from 'react';
import styles from './BoardListTemplate.scss';
import classNames from 'classnames/bind';


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


const BoardListTemplate = ({
    noticeList,
    category
}) =>{
    return (
        <section className={cx('BoardListTemplate')}>
                <div>
                     <PaginationComponent></PaginationComponent>
                </div>
                <div className={cx('Notice__List')}>
                    NoticeList
                </div>
                <div className={cx('Category__List')}>
                    CategoryList

                </div>
                <div>
                    <PaginationComponent></PaginationComponent>
                </div>
        </section>
    )


}

export default BoardListTemplate; 

//    {/* <div>
//                 <label>
//                 카테고리는 {match.params.category} 
//                 </label>
//                 <br/>
//                {detail && 
//                     <label>
//                        상세보기 페이지이며 번호는 {pageNumber}
//                     </label>
//                 } 
//             </div> */}